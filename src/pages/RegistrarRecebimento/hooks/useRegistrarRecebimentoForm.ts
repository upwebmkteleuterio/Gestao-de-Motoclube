import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  formatBrlFromCents,
} from '../../../components';
import {
  useContextoRegistrarRecebimento,
  useRegistrarRecebimento,
} from '../../../hooks';
import { ServiceValidationError } from '../../../services';
import { useAppStore } from '../../../store';
import type { FormaRecebimento, MensalidadePendenteOptionDTO } from '../../../types';

const DRAFT_KEY = 'registrar-recebimento';

export interface RecebimentoDraft {
  mensalidadeId: string;
  valorTexto: string;
  recebidoEm: string;
  forma: FormaRecebimento;
  observacao: string;
}

export function formatCentavosParaInput(centavos: number): string {
  return (centavos / 100).toFixed(2).replace('.', ',');
}

export function parseValorBrlParaCentavos(raw: string): number {
  const cleaned = raw.replace(/[R$\s]/g, '').trim();
  if (!cleaned) return 0;

  let normalized = cleaned;
  if (cleaned.includes(',') && cleaned.includes('.')) {
    normalized = cleaned.replace(/\./g, '').replace(',', '.');
  } else if (cleaned.includes(',')) {
    normalized = cleaned.replace(',', '.');
  }

  if (!/^\d+(\.\d{1,2})?$/.test(normalized)) {
    const parsed = Number(normalized);
    if (!Number.isFinite(parsed) || parsed <= 0) return 0;
    return Math.round(parsed * 100);
  }
  return Math.round(Number(normalized) * 100);
}

const VALID_FORMAS: FormaRecebimento[] = ['pix', 'dinheiro', 'transferencia', 'cartao', 'outro'];

export function useRegistrarRecebimentoForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const activeClubId = useAppStore((s) => s.activeClubId);
  const savedDraft = useAppStore((s) => s.draftForms[DRAFT_KEY]) as
    | Partial<RecebimentoDraft>
    | undefined;
  const setDraftForm = useAppStore((s) => s.setDraftForm);
  const clearDraftForm = useAppStore((s) => s.clearDraftForm);

  const urlMes = searchParams.get('mes') ?? undefined;
  const urlMembro = searchParams.get('membro') ?? undefined;
  const urlMensalidade = searchParams.get('mensalidade') ?? undefined;

  const voltarPara = urlMes ? `/financeiro?mes=${encodeURIComponent(urlMes)}` : '/financeiro';

  const contextoQuery = useContextoRegistrarRecebimento({
    motoclubeId: activeClubId,
    mensalidadeId: urlMensalidade,
    membroId: urlMembro,
    competencia: urlMes,
  });

  const registrarMutation = useRegistrarRecebimento();

  const [initializedKey, setInitializedKey] = useState<string>('');
  const [form, setForm] = useState<RecebimentoDraft>({
    mensalidadeId: '',
    valorTexto: '',
    recebidoEm: '',
    forma: 'pix',
    observacao: '',
  });
  const [restoredFromDraft, setRestoredFromDraft] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    const ctx = contextoQuery.data;
    if (!ctx) return;

    const targetId =
      urlMensalidade && ctx.opcoesPendentes.some((o) => o.id === urlMensalidade)
        ? urlMensalidade
        : !urlMensalidade &&
            !urlMembro &&
            savedDraft?.mensalidadeId &&
            ctx.opcoesPendentes.some((o) => o.id === savedDraft.mensalidadeId)
          ? savedDraft.mensalidadeId
          : (ctx.selecionada?.id ?? '');

    const key = `${activeClubId}:${urlMensalidade ?? ''}:${urlMembro ?? ''}:${urlMes ?? ''}:${targetId}`;
    if (initializedKey === key) return;

    const opcao = ctx.opcoesPendentes.find((o) => o.id === targetId) ?? ctx.selecionada;
    const canRestoreDraft =
      Boolean(savedDraft) &&
      Boolean(opcao) &&
      savedDraft?.mensalidadeId === opcao?.id &&
      Boolean(savedDraft?.valorTexto || savedDraft?.observacao);

    setForm({
      mensalidadeId: opcao?.id ?? '',
      valorTexto:
        canRestoreDraft && savedDraft?.valorTexto
          ? savedDraft.valorTexto
          : opcao
            ? formatCentavosParaInput(opcao.saldoCentavos)
            : '',
      recebidoEm:
        canRestoreDraft &&
        savedDraft?.recebidoEm &&
        /^\d{4}-\d{2}-\d{2}$/.test(savedDraft.recebidoEm)
          ? savedDraft.recebidoEm
          : ctx.hojeLocal,
      forma:
        canRestoreDraft && savedDraft?.forma && VALID_FORMAS.includes(savedDraft.forma)
          ? savedDraft.forma
          : 'pix',
      observacao: canRestoreDraft && savedDraft?.observacao ? savedDraft.observacao : '',
    });
    setRestoredFromDraft(canRestoreDraft);
    setInitializedKey(key);
  }, [
    contextoQuery.data,
    activeClubId,
    urlMensalidade,
    urlMembro,
    urlMes,
    savedDraft,
    initializedKey,
  ]);

  useEffect(() => {
    if (!initializedKey || !form.mensalidadeId) return;
    setDraftForm(DRAFT_KEY, form as unknown as Record<string, unknown>);
  }, [form, initializedKey, setDraftForm]);

  const selecionada: MensalidadePendenteOptionDTO | null = useMemo(() => {
    const lista = contextoQuery.data?.opcoesPendentes ?? [];
    return lista.find((o) => o.id === form.mensalidadeId) ?? contextoQuery.data?.selecionada ?? null;
  }, [contextoQuery.data, form.mensalidadeId]);

  const valorCentavos = useMemo(() => parseValorBrlParaCentavos(form.valorTexto), [form.valorTexto]);

  const simulacaoSaldo = useMemo(() => {
    if (!selecionada) return null;
    if (valorCentavos <= 0) {
      return {
        tipo: 'invalido' as const,
        texto: 'Informe um valor positivo até o saldo em aberto.',
      };
    }
    if (valorCentavos > selecionada.saldoCentavos) {
      return {
        tipo: 'excede' as const,
        texto: `O valor excede o saldo em aberto de ${formatBrlFromCents(selecionada.saldoCentavos)}.`,
      };
    }
    const restante = selecionada.saldoCentavos - valorCentavos;
    if (restante === 0) {
      return {
        tipo: 'quita' as const,
        texto: 'Quita integralmente esta mensalidade.',
      };
    }
    return {
      tipo: 'parcial' as const,
      texto: `Recebimento parcial: restará ${formatBrlFromCents(restante)} em aberto.`,
    };
  }, [selecionada, valorCentavos]);

  const updateField = <K extends keyof RecebimentoDraft>(key: K, value: RecebimentoDraft[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setFieldErrors((prev) => {
      const errorKey = key === 'valorTexto' ? 'valor' : key;
      if (!prev[errorKey]) return prev;
      const next = { ...prev };
      delete next[errorKey];
      return next;
    });
    setFormError(null);
  };

  const handleSelectMensalidade = (mensalidadeId: string) => {
    const opcao = contextoQuery.data?.opcoesPendentes.find((o) => o.id === mensalidadeId);
    setRestoredFromDraft(false);
    setFieldErrors({});
    setFormError(null);
    setForm((prev) => ({
      ...prev,
      mensalidadeId,
      valorTexto: opcao ? formatCentavosParaInput(opcao.saldoCentavos) : prev.valorTexto,
    }));
  };

  const preencherSaldoTotal = () => {
    if (!selecionada) return;
    updateField('valorTexto', formatCentavosParaInput(selecionada.saldoCentavos));
  };

  const resetDraft = () => {
    clearDraftForm(DRAFT_KEY);
    setRestoredFromDraft(false);
    setFieldErrors({});
    setFormError(null);
    if (selecionada && contextoQuery.data) {
      setForm({
        mensalidadeId: selecionada.id,
        valorTexto: formatCentavosParaInput(selecionada.saldoCentavos),
        recebidoEm: contextoQuery.data.hojeLocal,
        forma: 'pix',
        observacao: '',
      });
    }
  };

  const handleCancel = () => {
    clearDraftForm(DRAFT_KEY);
    navigate(voltarPara);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const ctx = contextoQuery.data;
    if (!ctx || !selecionada || registrarMutation.isPending) return;

    setFieldErrors({});
    setFormError(null);

    if (valorCentavos <= 0) {
      setFieldErrors({ valor: 'Informe um valor maior que zero.' });
      setFormError('Verifique os campos destacados.');
      return;
    }

    if (valorCentavos > selecionada.saldoCentavos) {
      setFieldErrors({ valor: 'O valor não pode ser maior que o saldo em aberto.' });
      setFormError('O valor informado excede o saldo em aberto.');
      return;
    }

    try {
      await registrarMutation.mutateAsync({
        motoclubeId: activeClubId,
        gestorId: ctx.clube.gestorId,
        mensalidadeId: selecionada.id,
        valorCentavos,
        saldoEsperadoCentavos: selecionada.saldoCentavos,
        recebidoEm: form.recebidoEm,
        forma: form.forma,
        observacao: form.observacao,
      });
      clearDraftForm(DRAFT_KEY);
      navigate(`/financeiro?mes=${encodeURIComponent(selecionada.competencia)}`);
    } catch (err) {
      if (err instanceof ServiceValidationError) {
        setFieldErrors(err.fieldErrors);
        setFormError(err.message);
      } else if (err instanceof Error) {
        setFormError(err.message);
      } else {
        setFormError('Não foi possível registrar o recebimento. Tente novamente.');
      }
    }
  };

  return {
    contexto: contextoQuery.data,
    isLoading: contextoQuery.isLoading,
    isError: contextoQuery.isError || !contextoQuery.data,
    refetch: contextoQuery.refetch,
    isPending: registrarMutation.isPending,
    voltarPara,
    selecionada,
    form,
    restoredFromDraft,
    simulacaoSaldo,
    fieldErrors,
    formError,
    updateField,
    handleSelectMensalidade,
    preencherSaldoTotal,
    resetDraft,
    handleCancel,
    handleSubmit,
  };
}
