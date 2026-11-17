import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAtualizarMembro, useMembroParaEdicao } from '../../../hooks';
import { ServiceValidationError, getHojeLocalCampoGrande } from '../../../services';
import { useAppStore } from '../../../store';

export interface EditarMembroFormDraft {
  nome: string;
  apelido: string;
  email: string;
  telefone: string;
  entradaEm: string;
  status: 'ativo' | 'inativo' | 'suspenso';
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

export function useEditarMembroForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const todayIso = useMemo(() => getHojeLocalCampoGrande(), []);

  const activeClubId = useAppStore((s) => s.activeClubId);
  const draftKey = `editar-membro-${id ?? ''}`;
  const savedDraft = useAppStore((s) => s.draftForms[draftKey]) as
    | Partial<EditarMembroFormDraft>
    | undefined;
  const setDraftForm = useAppStore((s) => s.setDraftForm);
  const clearDraftForm = useAppStore((s) => s.clearDraftForm);

  const memberQuery = useMembroParaEdicao(activeClubId, id);
  const atualizarMutation = useAtualizarMembro();

  const [initializedForId, setInitializedForId] = useState<string | null>(null);
  const [initializedUpdatedAt, setInitializedUpdatedAt] = useState<number>(0);
  const [isDirty, setIsDirty] = useState(false);
  const [restoredFromDraft, setRestoredFromDraft] = useState(false);
  const [form, setForm] = useState<EditarMembroFormDraft>({
    nome: '',
    apelido: '',
    email: '',
    telefone: '',
    entradaEm: todayIso,
    status: 'ativo',
    fotoUrl: null,
  });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    const data = memberQuery.data;
    if (!data) return;

    const isSameMember = initializedForId === data.id;
    if (isSameMember && (isDirty || initializedUpdatedAt === memberQuery.dataUpdatedAt)) {
      return;
    }

    const baseForm: EditarMembroFormDraft = {
      nome: data.nome,
      apelido: data.apelido ?? '',
      email: data.email,
      telefone: data.telefone,
      entradaEm: data.entradaEm,
      status: data.status,
      fotoUrl: data.fotoUrl,
    };

    const hasDraft = Boolean(
      savedDraft &&
        (savedDraft.nome !== undefined ||
          savedDraft.apelido !== undefined ||
          savedDraft.email !== undefined ||
          savedDraft.telefone !== undefined ||
          savedDraft.entradaEm !== undefined ||
          savedDraft.status !== undefined ||
          savedDraft.fotoUrl !== undefined),
    );

    if (hasDraft) {
      const merged: EditarMembroFormDraft = {
        nome: typeof savedDraft?.nome === 'string' ? savedDraft.nome : baseForm.nome,
        apelido: typeof savedDraft?.apelido === 'string' ? savedDraft.apelido : baseForm.apelido,
        email: typeof savedDraft?.email === 'string' ? savedDraft.email : baseForm.email,
        telefone:
          typeof savedDraft?.telefone === 'string' ? savedDraft.telefone : baseForm.telefone,
        entradaEm:
          typeof savedDraft?.entradaEm === 'string' ? savedDraft.entradaEm : baseForm.entradaEm,
        status:
          savedDraft?.status === 'inativo' ||
          savedDraft?.status === 'suspenso' ||
          savedDraft?.status === 'ativo'
            ? savedDraft.status
            : baseForm.status,
        fotoUrl: savedDraft?.fotoUrl !== undefined ? (savedDraft.fotoUrl ?? null) : baseForm.fotoUrl,
      };
      const differsFromBase =
        merged.nome !== baseForm.nome ||
        merged.apelido !== baseForm.apelido ||
        merged.email !== baseForm.email ||
        merged.telefone !== baseForm.telefone ||
        merged.entradaEm !== baseForm.entradaEm ||
        merged.status !== baseForm.status ||
        merged.fotoUrl !== baseForm.fotoUrl;
      setForm(merged);
      setRestoredFromDraft(differsFromBase);
      setIsDirty(differsFromBase);
    } else {
      setForm(baseForm);
      setRestoredFromDraft(false);
      setIsDirty(false);
    }

    setInitializedForId(data.id);
    setInitializedUpdatedAt(memberQuery.dataUpdatedAt);
  }, [memberQuery.data, memberQuery.dataUpdatedAt, initializedForId, initializedUpdatedAt, isDirty, savedDraft]);

  const updateField = <K extends keyof EditarMembroFormDraft>(
    key: K,
    value: EditarMembroFormDraft[K],
  ) => {
    setIsDirty(true);
    setForm((prev) => {
      const next = { ...prev, [key]: value };
      setDraftForm(draftKey, next as unknown as Record<string, unknown>);
      return next;
    });
    setFieldErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
    setFormError(null);
  };

  const discardDraft = () => {
    const data = memberQuery.data;
    clearDraftForm(draftKey);
    setRestoredFromDraft(false);
    setIsDirty(false);
    setFieldErrors({});
    setFormError(null);
    if (data) {
      setForm({
        nome: data.nome,
        apelido: data.apelido ?? '',
        email: data.email,
        telefone: data.telefone,
        entradaEm: data.entradaEm,
        status: data.status,
        fotoUrl: data.fotoUrl,
      });
    }
  };

  const handleCancel = () => {
    clearDraftForm(draftKey);
    setIsDirty(false);
    navigate(id ? `/membros/${id}` : '/membros');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const data = memberQuery.data;
    if (!data) return;

    setFieldErrors({});
    setFormError(null);

    try {
      await atualizarMutation.mutateAsync({
        motoclubeId: data.clube.motoclubeId,
        membroId: data.id,
        nome: form.nome,
        apelido: form.apelido,
        email: form.email,
        telefone: form.telefone,
        entradaEm: form.entradaEm,
        status: form.status,
        fotoUrl: form.fotoUrl,
      });
      clearDraftForm(draftKey);
      setIsDirty(false);
      navigate(`/membros/${data.id}`);
    } catch (err) {
      if (err instanceof ServiceValidationError) {
        setFieldErrors(err.fieldErrors);
        setFormError(err.message);
      } else if (err instanceof Error) {
        setFormError(err.message);
      } else {
        setFormError('Não foi possível salvar as alterações. Tente novamente.');
      }
    }
  };

  return {
    todayIso,
    data: memberQuery.data,
    isLoading: memberQuery.isLoading,
    isError: memberQuery.isError,
    refetch: memberQuery.refetch,
    isPending: atualizarMutation.isPending,
    form,
    fieldErrors,
    formError,
    restoredFromDraft,
    updateField,
    discardDraft,
    handleCancel,
    handleSubmit,
    goToMembers: () => navigate('/membros'),
  };
}
