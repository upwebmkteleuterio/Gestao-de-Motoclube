import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCadastrarMembro, useNiveisDoClube, usePainelGestor } from '../../../hooks';
import { ServiceValidationError, getHojeLocalCampoGrande } from '../../../services';
import { useAppStore } from '../../../store';

const DRAFT_KEY = 'cadastrar-membro';

export interface MemberFormDraft {
  nome: string;
  apelido: string;
  email: string;
  telefone: string;
  entradaEm: string;
  nivelId: string;
  status: 'ativo' | 'inativo';
  fotoUrl: string | null;
}

export function formatPhoneBr(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function formatDateBr(isoDate: string): string {
  const [y, m, d] = isoDate.split('-');
  if (!y || !m || !d) return isoDate;
  return `${d}/${m}/${y}`;
}

function buildInitialDraft(
  savedDraft: Partial<MemberFormDraft> | undefined,
  todayIso: string,
): MemberFormDraft {
  return {
    nome: typeof savedDraft?.nome === 'string' ? savedDraft.nome : '',
    apelido: typeof savedDraft?.apelido === 'string' ? savedDraft.apelido : '',
    email: typeof savedDraft?.email === 'string' ? savedDraft.email : '',
    telefone: typeof savedDraft?.telefone === 'string' ? savedDraft.telefone : '',
    entradaEm: typeof savedDraft?.entradaEm === 'string' ? savedDraft.entradaEm : todayIso,
    nivelId: typeof savedDraft?.nivelId === 'string' ? savedDraft.nivelId : '',
    status: savedDraft?.status === 'inativo' ? 'inativo' : 'ativo',
    fotoUrl: typeof savedDraft?.fotoUrl === 'string' ? savedDraft.fotoUrl : null,
  };
}

export function useCadastrarMembroForm() {
  const navigate = useNavigate();
  const todayIso = useMemo(() => getHojeLocalCampoGrande(), []);

  const activeClubId = useAppStore((s) => s.activeClubId);
  const savedDraft = useAppStore((s) => s.draftForms[DRAFT_KEY]) as
    | Partial<MemberFormDraft>
    | undefined;
  const setDraftForm = useAppStore((s) => s.setDraftForm);
  const clearDraftForm = useAppStore((s) => s.clearDraftForm);

  const painelQuery = usePainelGestor(activeClubId);
  const niveisQuery = useNiveisDoClube(activeClubId);
  const cadastrarMutation = useCadastrarMembro();

  const [restoredFromDraft, setRestoredFromDraft] = useState<boolean>(() =>
    Boolean(
      savedDraft &&
        (savedDraft.nome || savedDraft.apelido || savedDraft.email || savedDraft.telefone),
    ),
  );

  const [form, setForm] = useState<MemberFormDraft>(() => buildInitialDraft(savedDraft, todayIso));
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    const niveis = niveisQuery.data;
    if (niveis && niveis.length > 0 && !form.nivelId) {
      setForm((prev) => ({ ...prev, nivelId: niveis[0].id }));
    }
  }, [niveisQuery.data, form.nivelId]);

  useEffect(() => {
    setDraftForm(DRAFT_KEY, form as unknown as Record<string, unknown>);
  }, [form, setDraftForm]);

  const updateField = <K extends keyof MemberFormDraft>(key: K, value: MemberFormDraft[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setFieldErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
    setFormError(null);
  };

  const resetDraft = () => {
    clearDraftForm(DRAFT_KEY);
    setRestoredFromDraft(false);
    setFieldErrors({});
    setFormError(null);
    setForm({
      nome: '',
      apelido: '',
      email: '',
      telefone: '',
      entradaEm: todayIso,
      nivelId: niveisQuery.data?.[0]?.id ?? '',
      status: 'ativo',
      fotoUrl: null,
    });
  };

  const handleCancel = () => {
    clearDraftForm(DRAFT_KEY);
    navigate('/membros');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!painelQuery.data) return;

    setFieldErrors({});
    setFormError(null);

    try {
      await cadastrarMutation.mutateAsync({
        motoclubeId: activeClubId,
        gestorId: painelQuery.data.clube.gestorId,
        nome: form.nome,
        apelido: form.apelido,
        email: form.email,
        telefone: form.telefone,
        entradaEm: form.entradaEm,
        nivelId: form.nivelId,
        status: form.status,
        fotoUrl: form.fotoUrl,
      });
      clearDraftForm(DRAFT_KEY);
      navigate('/membros');
    } catch (err) {
      if (err instanceof ServiceValidationError) {
        setFieldErrors(err.fieldErrors);
        setFormError(err.message);
      } else if (err instanceof Error) {
        setFormError(err.message);
      } else {
        setFormError('Não foi possível salvar o membro. Tente novamente.');
      }
    }
  };

  return {
    todayIso,
    form,
    fieldErrors,
    formError,
    restoredFromDraft,
    isLoading: painelQuery.isLoading || niveisQuery.isLoading,
    isError: painelQuery.isError || niveisQuery.isError || !painelQuery.data,
    isPending: cadastrarMutation.isPending,
    clube: painelQuery.data?.clube,
    niveis: niveisQuery.data ?? [],
    refetchAll: () => {
      painelQuery.refetch();
      niveisQuery.refetch();
    },
    goToCreateLevel: () => navigate('/hierarquia/nivel'),
    updateField,
    resetDraft,
    handleCancel,
    handleSubmit,
  };
}
