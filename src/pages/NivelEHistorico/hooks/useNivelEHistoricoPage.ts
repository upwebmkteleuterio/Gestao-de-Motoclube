import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useAlterarNivelMembro, useNivelEHistorico } from '../../../hooks';
import { ServiceConcurrencyError } from '../../../services';
import { useAppStore } from '../../../store';
import type { PeriodoFiltroInput, PeriodoResumoTipo } from '../../../types';

const VALID_PERIODS: PeriodoResumoTipo[] = ['rolling', '2026', '2025', 'custom'];

interface PeriodDraftState {
  periodo?: PeriodoResumoTipo;
  de?: string;
  ate?: string;
  draftPeriodo?: PeriodoResumoTipo;
  draftDe?: string;
  draftAte?: string;
}

export function useNivelEHistoricoPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeClubId = useAppStore((s) => s.activeClubId);

  const modalKey = `alterar-nivel-${id ?? ''}`;
  const draftKey = `nivel-periodo-${id ?? ''}`;

  const modalOpen = useAppStore((s) => Boolean(s.openModals[modalKey]));
  const setModalOpen = useAppStore((s) => s.setModalOpen);
  const savedDraft = useAppStore((s) => s.draftForms[draftKey]) as PeriodDraftState | undefined;
  const setDraftForm = useAppStore((s) => s.setDraftForm);

  const [feedbackMsg, setFeedbackMsg] = useState<string>('');
  const [modalErro, setModalErro] = useState<string | null>(null);
  const [concorrenciaDetectada, setConcorrenciaDetectada] = useState(false);

  useEffect(() => {
    const atualizado = searchParams.get('atualizado');
    if (atualizado) {
      setFeedbackMsg(`Nível atualizado para ${atualizado}.`);
      const next = new URLSearchParams(searchParams);
      next.delete('atualizado');
      setSearchParams(next, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const rawUrlPeriodo = searchParams.get('periodo') as PeriodoResumoTipo | null;
  const hasUrlPeriodo = Boolean(rawUrlPeriodo && VALID_PERIODS.includes(rawUrlPeriodo));

  const appliedPeriodo: PeriodoResumoTipo = hasUrlPeriodo
    ? (rawUrlPeriodo as PeriodoResumoTipo)
    : savedDraft?.periodo && VALID_PERIODS.includes(savedDraft.periodo)
      ? savedDraft.periodo
      : '2026';

  const appliedDe = hasUrlPeriodo
    ? (searchParams.get('de') ?? undefined)
    : savedDraft?.de;
  const appliedAte = hasUrlPeriodo
    ? (searchParams.get('ate') ?? undefined)
    : savedDraft?.ate;

  const filtro: PeriodoFiltroInput = useMemo(
    () => ({ periodo: appliedPeriodo, de: appliedDe, ate: appliedAte }),
    [appliedPeriodo, appliedDe, appliedAte],
  );

  const selectorPeriodo: PeriodoResumoTipo =
    savedDraft?.draftPeriodo && VALID_PERIODS.includes(savedDraft.draftPeriodo)
      ? savedDraft.draftPeriodo
      : appliedPeriodo;

  const selectorDe = savedDraft?.draftDe ?? appliedDe;
  const selectorAte = savedDraft?.draftAte ?? appliedAte;

  const query = useNivelEHistorico(activeClubId, id, filtro);
  const alterarMutation = useAlterarNivelMembro();

  const onPeriodDraftChange = (draft: {
    periodo: PeriodoResumoTipo;
    de: string;
    ate: string;
  }) => {
    setDraftForm(draftKey, {
      ...(savedDraft ?? {}),
      draftPeriodo: draft.periodo,
      draftDe: draft.de,
      draftAte: draft.ate,
    });
  };

  const aplicarPeriodo = (payload: { periodo: PeriodoResumoTipo; de?: string; ate?: string }) => {
    setDraftForm(draftKey, {
      periodo: payload.periodo,
      de: payload.periodo === 'custom' ? payload.de : undefined,
      ate: payload.periodo === 'custom' ? payload.ate : undefined,
      draftPeriodo: payload.periodo,
      draftDe: payload.de,
      draftAte: payload.ate,
    });

    const next = new URLSearchParams(searchParams);
    next.set('periodo', payload.periodo);
    if (payload.periodo === 'custom' && payload.de && payload.ate) {
      next.set('de', payload.de);
      next.set('ate', payload.ate);
    } else {
      next.delete('de');
      next.delete('ate');
    }
    setSearchParams(next, { replace: true });
  };

  const openModal = () => {
    setModalErro(null);
    setConcorrenciaDetectada(false);
    setModalOpen(modalKey, true);
  };

  const closeModal = () => {
    if (alterarMutation.isPending) return;
    setModalErro(null);
    setConcorrenciaDetectada(false);
    setModalOpen(modalKey, false);
  };

  const reloadMemberLevel = async () => {
    setModalErro(null);
    setConcorrenciaDetectada(false);
    await query.refetch();
  };

  const confirmarMudanca = async (novoNivelId: string) => {
    const data = query.data;
    if (!data || alterarMutation.isPending) return;

    setModalErro(null);
    setConcorrenciaDetectada(false);

    try {
      const result = await alterarMutation.mutateAsync({
        motoclubeId: data.clube.motoclubeId,
        membroId: data.membroId,
        gestorId: data.clube.gestorId,
        nivelAtualEsperadoId: data.nivelAtualId,
        novoNivelId,
      });
      setModalOpen(modalKey, false);
      setFeedbackMsg(`Nível atualizado para ${result.novoNivelNome}.`);
    } catch (err) {
      if (err instanceof ServiceConcurrencyError) {
        setConcorrenciaDetectada(true);
        setModalErro(err.message);
        await query.refetch();
      } else if (err instanceof Error) {
        setModalErro(err.message);
      } else {
        setModalErro('Não foi possível alterar o nível do membro.');
      }
    }
  };

  return {
    ...query,
    selectorPeriodo,
    selectorDe,
    selectorAte,
    onPeriodDraftChange,
    aplicarPeriodo,
    modalOpen,
    openModal,
    closeModal,
    confirmarMudanca,
    reloadMemberLevel,
    isPendingMutation: alterarMutation.isPending,
    modalErro,
    concorrenciaDetectada,
    feedbackMsg,
    goToMembers: () => navigate('/membros'),
  };
}
