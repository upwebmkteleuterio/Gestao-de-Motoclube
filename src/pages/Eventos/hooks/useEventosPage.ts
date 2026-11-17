import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEventosClube } from '../../../hooks';
import { useAppStore } from '../../../store';
import type { EventosAbaTipo } from '../../../types';

const DRAFT_KEY = 'eventos-filtros';
const MODAL_KEY = 'eventos-periodo-modal';
const PAGE_SIZE = 6;

interface EventosDraftState {
  aba?: EventosAbaTipo;
  de?: string;
  ate?: string;
  pagina?: number;
}

export function useEventosPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const activeClubId = useAppStore((s) => s.activeClubId);
  const savedDraft = useAppStore((s) => s.draftForms[DRAFT_KEY]) as
    | EventosDraftState
    | undefined;
  const setDraftForm = useAppStore((s) => s.setDraftForm);
  const periodoModalOpen = useAppStore((s) => Boolean(s.openModals[MODAL_KEY]));
  const setModalOpen = useAppStore((s) => s.setModalOpen);

  const urlAba = searchParams.get('aba');
  const urlDe = searchParams.get('de') ?? undefined;
  const urlAte = searchParams.get('ate') ?? undefined;
  const urlPagina = searchParams.get('pagina');

  const aba: EventosAbaTipo =
    urlAba === 'past' || urlAba === 'upcoming'
      ? urlAba
      : savedDraft?.aba === 'past'
        ? 'past'
        : 'upcoming';

  const hasValidUrlDates =
    Boolean(urlDe && urlAte) &&
    /^\d{4}-\d{2}-\d{2}$/.test(urlDe!) &&
    /^\d{4}-\d{2}-\d{2}$/.test(urlAte!) &&
    urlDe! <= urlAte!;

  const hasValidDraftDates =
    !urlAba &&
    !urlDe &&
    !urlAte &&
    Boolean(savedDraft?.de && savedDraft?.ate) &&
    /^\d{4}-\d{2}-\d{2}$/.test(savedDraft!.de!) &&
    /^\d{4}-\d{2}-\d{2}$/.test(savedDraft!.ate!) &&
    savedDraft!.de! <= savedDraft!.ate!;

  const de = hasValidUrlDates ? urlDe : hasValidDraftDates ? savedDraft?.de : undefined;
  const ate = hasValidUrlDates ? urlAte : hasValidDraftDates ? savedDraft?.ate : undefined;

  const page = Math.max(
    1,
    Number(urlPagina ?? (urlAba || urlDe || urlAte ? '1' : savedDraft?.pagina) ?? '1') || 1,
  );

  const query = useEventosClube({
    motoclubeId: activeClubId,
    aba,
    de,
    ate,
    page,
    pageSize: PAGE_SIZE,
  });

  const [draftDe, setDraftDe] = useState(de ?? query.data?.periodoInicio ?? '');
  const [draftAte, setDraftAte] = useState(ate ?? query.data?.periodoFim ?? '');
  const [periodError, setPeriodError] = useState<string | null>(null);

  useEffect(() => {
    if (!periodoModalOpen) return;
    setDraftDe(de ?? query.data?.periodoInicio ?? '');
    setDraftAte(ate ?? query.data?.periodoFim ?? '');
    setPeriodError(null);
  }, [periodoModalOpen, de, ate, query.data?.periodoInicio, query.data?.periodoFim]);

  const syncParamsAndDraft = (updates: {
    aba?: EventosAbaTipo;
    de?: string;
    ate?: string;
    pagina?: number;
  }) => {
    const nextAba = updates.aba ?? aba;
    const nextDe = updates.de !== undefined ? updates.de || undefined : de;
    const nextAte = updates.ate !== undefined ? updates.ate || undefined : ate;
    const nextPage = updates.pagina ?? 1;

    setDraftForm(DRAFT_KEY, {
      aba: nextAba,
      de: nextDe,
      ate: nextAte,
      pagina: nextPage,
    });

    const next = new URLSearchParams();
    next.set('aba', nextAba);
    if (nextDe && nextAte) {
      next.set('de', nextDe);
      next.set('ate', nextAte);
    }
    if (nextPage > 1) {
      next.set('pagina', String(nextPage));
    }
    setSearchParams(next, { replace: true });
  };

  const handleSelectAba = (nextAba: string) => {
    if (nextAba !== 'upcoming' && nextAba !== 'past') return;
    syncParamsAndDraft({ aba: nextAba, pagina: 1 });
  };

  const handlePageChange = (nextPage: number) => {
    syncParamsAndDraft({ pagina: Math.max(1, nextPage) });
  };

  const openPeriodoModal = () => setModalOpen(MODAL_KEY, true);
  const closePeriodoModal = () => setModalOpen(MODAL_KEY, false);

  const handleApplyCustomPeriod = () => {
    if (!draftDe || !draftAte) {
      setPeriodError('Informe a data inicial e a data final.');
      return;
    }
    if (draftDe > draftAte) {
      setPeriodError('A data inicial não pode ser posterior à data final.');
      return;
    }
    setPeriodError(null);
    syncParamsAndDraft({ de: draftDe, ate: draftAte, pagina: 1 });
    closePeriodoModal();
  };

  const handleResetDefaultPeriod = () => {
    setPeriodError(null);
    syncParamsAndDraft({ de: '', ate: '', pagina: 1 });
    closePeriodoModal();
  };

  return {
    ...query,
    aba,
    periodoModalOpen,
    draftDe,
    draftAte,
    periodError,
    setDraftDe,
    setDraftAte,
    handleSelectAba,
    handlePageChange,
    openPeriodoModal,
    closePeriodoModal,
    handleApplyCustomPeriod,
    handleResetDefaultPeriod,
    openCriarEvento: () => navigate('/eventos/novo'),
  };
}
