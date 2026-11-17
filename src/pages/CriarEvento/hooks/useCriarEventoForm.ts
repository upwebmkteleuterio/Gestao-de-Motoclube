import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContextoCriarEvento, useCriarEvento } from '../../../hooks';
import { ServiceValidationError, getHojeLocalCampoGrande } from '../../../services';
import { useAppStore } from '../../../store';

const DRAFT_KEY = 'criar-evento';

export interface CriarEventoDraft {
  titulo: string;
  tipo: string;
  data: string;
  horario: string;
  local: string;
  descricao: string;
  fotoUrl: string | null;
  todosNiveis: boolean;
  nivelIds: string[];
}

function buildInitialDraft(
  savedDraft: Partial<CriarEventoDraft> | undefined,
  defaultDate: string,
): CriarEventoDraft {
  return {
    titulo: typeof savedDraft?.titulo === 'string' ? savedDraft.titulo : '',
    tipo: typeof savedDraft?.tipo === 'string' && savedDraft.tipo ? savedDraft.tipo : 'Passeio',
    data:
      typeof savedDraft?.data === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(savedDraft.data)
        ? savedDraft.data
        : defaultDate,
    horario:
      typeof savedDraft?.horario === 'string' && /^\d{2}:\d{2}$/.test(savedDraft.horario)
        ? savedDraft.horario
        : '08:00',
    local: typeof savedDraft?.local === 'string' ? savedDraft.local : '',
    descricao: typeof savedDraft?.descricao === 'string' ? savedDraft.descricao : '',
    fotoUrl: typeof savedDraft?.fotoUrl === 'string' ? savedDraft.fotoUrl : null,
    todosNiveis: typeof savedDraft?.todosNiveis === 'boolean' ? savedDraft.todosNiveis : true,
    nivelIds: Array.isArray(savedDraft?.nivelIds)
      ? savedDraft.nivelIds.filter((id): id is string => typeof id === 'string')
      : [],
  };
}

export function useCriarEventoForm() {
  const navigate = useNavigate();
  const todayIso = useMemo(() => getHojeLocalCampoGrande(), []);

  const activeClubId = useAppStore((s) => s.activeClubId);
  const savedDraft = useAppStore((s) => s.draftForms[DRAFT_KEY]) as
    | Partial<CriarEventoDraft>
    | undefined;
  const setDraftForm = useAppStore((s) => s.setDraftForm);
  const clearDraftForm = useAppStore((s) => s.clearDraftForm);

  const contextoQuery = useContextoCriarEvento(activeClubId);
  const criarMutation = useCriarEvento();

  const [restoredFromDraft, setRestoredFromDraft] = useState<boolean>(() =>
    Boolean(
      savedDraft &&
        (savedDraft.titulo || savedDraft.local || savedDraft.descricao || savedDraft.fotoUrl),
    ),
  );

  const [form, setForm] = useState<CriarEventoDraft>(() =>
    buildInitialDraft(savedDraft, todayIso),
  );
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    setDraftForm(DRAFT_KEY, form as unknown as Record<string, unknown>);
  }, [form, setDraftForm]);

  const updateField = <K extends keyof CriarEventoDraft>(key: K, value: CriarEventoDraft[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setFieldErrors((prev) => {
      if (!prev[key] && !(key === 'nivelIds' && prev.publico) && !(key === 'todosNiveis' && prev.publico)) {
        return prev;
      }
      const next = { ...prev };
      delete next[key];
      if (key === 'nivelIds' || key === 'todosNiveis') {
        delete next.publico;
      }
      return next;
    });
    setFormError(null);
  };

  const toggleNivelId = (nivelId: string) => {
    const exists = form.nivelIds.includes(nivelId);
    const nextIds = exists
      ? form.nivelIds.filter((id) => id !== nivelId)
      : [...form.nivelIds, nivelId];
    updateField('nivelIds', nextIds);
  };

  const setTodosNiveis = (todos: boolean) => {
    setForm((prev) => ({
      ...prev,
      todosNiveis: todos,
      nivelIds:
        !todos && prev.nivelIds.length === 0 && contextoQuery.data?.niveis[0]
          ? [contextoQuery.data.niveis[0].id]
          : prev.nivelIds,
    }));
    setFieldErrors((prev) => {
      if (!prev.publico) return prev;
      const next = { ...prev };
      delete next.publico;
      return next;
    });
    setFormError(null);
  };

  const expectedCount = useMemo(() => {
    const ctx = contextoQuery.data;
    if (!ctx) return 0;
    if (form.todosNiveis) return ctx.totalMembrosAtivos;
    const selected = new Set(form.nivelIds);
    return ctx.niveis.reduce(
      (acc, nivel) => (selected.has(nivel.id) ? acc + nivel.totalMembrosAtivos : acc),
      0,
    );
  }, [contextoQuery.data, form.todosNiveis, form.nivelIds]);

  const resetDraft = () => {
    clearDraftForm(DRAFT_KEY);
    setRestoredFromDraft(false);
    setFieldErrors({});
    setFormError(null);
    setForm({
      titulo: '',
      tipo: contextoQuery.data?.tiposDisponiveis[0] ?? 'Passeio',
      data: contextoQuery.data?.hojeLocal ?? todayIso,
      horario: '08:00',
      local: '',
      descricao: '',
      fotoUrl: null,
      todosNiveis: true,
      nivelIds: [],
    });
  };

  const handleCancel = () => {
    clearDraftForm(DRAFT_KEY);
    navigate('/eventos');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!contextoQuery.data || criarMutation.isPending) return;

    setFieldErrors({});
    setFormError(null);

    try {
      await criarMutation.mutateAsync({
        motoclubeId: activeClubId,
        titulo: form.titulo,
        tipo: form.tipo,
        data: form.data,
        horario: form.horario,
        local: form.local,
        descricao: form.descricao,
        fotoUrl: form.fotoUrl,
        todosNiveis: form.todosNiveis,
        nivelIds: form.todosNiveis ? [] : form.nivelIds,
      });
      clearDraftForm(DRAFT_KEY);
      navigate('/eventos?aba=upcoming');
    } catch (err) {
      if (err instanceof ServiceValidationError) {
        setFieldErrors(err.fieldErrors);
        setFormError(err.message);
      } else if (err instanceof Error) {
        setFormError(err.message);
      } else {
        setFormError('Não foi possível publicar o evento. Tente novamente.');
      }
    }
  };

  return {
    contexto: contextoQuery.data,
    isLoading: contextoQuery.isLoading,
    isError: contextoQuery.isError || !contextoQuery.data,
    refetch: contextoQuery.refetch,
    isPending: criarMutation.isPending,
    form,
    fieldErrors,
    formError,
    restoredFromDraft,
    expectedCount,
    updateField,
    toggleNivelId,
    setTodosNiveis,
    resetDraft,
    handleCancel,
    handleSubmit,
  };
}
