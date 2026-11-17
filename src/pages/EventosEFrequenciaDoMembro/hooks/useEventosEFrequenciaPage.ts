import { useMemo } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useEventosEFrequenciaMembro } from '../../../hooks';
import { addDaysIso, getHojeLocalCampoGrande } from '../../../services';
import { useAppStore } from '../../../store';
import type { PeriodoFrequenciaTipo, PresencaFiltroTipo } from '../../../types';

const VALID_PERIODS: PeriodoFrequenciaTipo[] = ['quarter', 'month', 'custom'];
const VALID_PRESENCE: PresencaFiltroTipo[] = ['all', 'present', 'absent'];
const DEFAULT_LIMIT = 3;

interface FrequenciaDraftState {
  periodo?: PeriodoFrequenciaTipo;
  de?: string;
  ate?: string;
  draftPeriodo?: PeriodoFrequenciaTipo;
  draftDe?: string;
  draftAte?: string;
  presenca?: PresencaFiltroTipo;
  expanded?: boolean;
}

export function useEventosEFrequenciaPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeClubId = useAppStore((s) => s.activeClubId);

  const draftKey = `frequencia-membro-${id ?? ''}`;
  const savedDraft = useAppStore((s) => s.draftForms[draftKey]) as
    | FrequenciaDraftState
    | undefined;
  const setDraftForm = useAppStore((s) => s.setDraftForm);

  const todayIso = useMemo(() => getHojeLocalCampoGrande(), []);
  const defaultQuarterStart = useMemo(() => addDaysIso(todayIso, -90), [todayIso]);

  const rawUrlPeriodo = searchParams.get('periodo') as PeriodoFrequenciaTipo | null;
  const hasUrlPeriodo = Boolean(rawUrlPeriodo && VALID_PERIODS.includes(rawUrlPeriodo));

  const appliedPeriodo: PeriodoFrequenciaTipo = hasUrlPeriodo
    ? (rawUrlPeriodo as PeriodoFrequenciaTipo)
    : savedDraft?.periodo && VALID_PERIODS.includes(savedDraft.periodo)
      ? savedDraft.periodo
      : 'quarter';

  const appliedDe = hasUrlPeriodo
    ? (searchParams.get('de') ?? undefined)
    : savedDraft?.de;
  const appliedAte = hasUrlPeriodo
    ? (searchParams.get('ate') ?? undefined)
    : savedDraft?.ate;

  const rawUrlPresenca = searchParams.get('presenca') as PresencaFiltroTipo | null;
  const presencaFiltro: PresencaFiltroTipo =
    rawUrlPresenca && VALID_PRESENCE.includes(rawUrlPresenca)
      ? rawUrlPresenca
      : savedDraft?.presenca && VALID_PRESENCE.includes(savedDraft.presenca)
        ? savedDraft.presenca
        : 'all';

  const urlExpanded = searchParams.get('todos');
  const expanded =
    urlExpanded !== null ? urlExpanded === '1' : Boolean(savedDraft?.expanded);

  const urlOverridesDraft = Boolean(
    hasUrlPeriodo && savedDraft?.periodo && rawUrlPeriodo !== savedDraft.periodo,
  );

  const selectorPeriodo: PeriodoFrequenciaTipo =
    !urlOverridesDraft &&
    savedDraft?.draftPeriodo &&
    VALID_PERIODS.includes(savedDraft.draftPeriodo)
      ? savedDraft.draftPeriodo
      : appliedPeriodo;
  const selectorDe =
    (!urlOverridesDraft ? savedDraft?.draftDe : undefined) ?? appliedDe ?? defaultQuarterStart;
  const selectorAte =
    (!urlOverridesDraft ? savedDraft?.draftAte : undefined) ?? appliedAte ?? todayIso;

  const query = useEventosEFrequenciaMembro({
    motoclubeId: activeClubId,
    membroId: id ?? '',
    periodo: appliedPeriodo,
    de: appliedDe,
    ate: appliedAte,
    presencaFiltro,
    limit: expanded ? undefined : DEFAULT_LIMIT,
  });

  const syncUrl = (nextState: {
    periodo?: PeriodoFrequenciaTipo;
    de?: string;
    ate?: string;
    presenca?: PresencaFiltroTipo;
    expanded?: boolean;
  }) => {
    const p = nextState.periodo ?? appliedPeriodo;
    const d = nextState.de !== undefined ? nextState.de : appliedDe;
    const a = nextState.ate !== undefined ? nextState.ate : appliedAte;
    const f = nextState.presenca ?? presencaFiltro;
    const exp = nextState.expanded ?? expanded;

    const next = new URLSearchParams();
    next.set('periodo', p);
    if (p === 'custom' && d && a) {
      next.set('de', d);
      next.set('ate', a);
    }
    if (f !== 'all') {
      next.set('presenca', f);
    }
    if (exp) {
      next.set('todos', '1');
    }
    setSearchParams(next, { replace: true });
  };

  const onPeriodDraftChange = (draft: {
    periodo: PeriodoFrequenciaTipo;
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

  const aplicarPeriodo = (payload: {
    periodo: PeriodoFrequenciaTipo;
    de?: string;
    ate?: string;
  }) => {
    const nextDe = payload.periodo === 'custom' ? payload.de : undefined;
    const nextAte = payload.periodo === 'custom' ? payload.ate : undefined;

    setDraftForm(draftKey, {
      ...(savedDraft ?? {}),
      periodo: payload.periodo,
      de: nextDe,
      ate: nextAte,
      draftPeriodo: payload.periodo,
      draftDe: payload.de,
      draftAte: payload.ate,
      expanded: false,
    });

    syncUrl({
      periodo: payload.periodo,
      de: nextDe,
      ate: nextAte,
      expanded: false,
    });
  };

  const selectPresencaFiltro = (nextPresenca: string) => {
    if (!VALID_PRESENCE.includes(nextPresenca as PresencaFiltroTipo)) return;
    const typed = nextPresenca as PresencaFiltroTipo;
    setDraftForm(draftKey, {
      ...(savedDraft ?? {}),
      presenca: typed,
      expanded: false,
    });
    syncUrl({ presenca: typed, expanded: false });
  };

  const toggleExpanded = () => {
    const nextExpanded = !expanded;
    setDraftForm(draftKey, {
      ...(savedDraft ?? {}),
      expanded: nextExpanded,
    });
    syncUrl({ expanded: nextExpanded });
  };

  const openEvento = (eventoId: string) => {
    navigate(`/eventos/${eventoId}`);
  };

  return {
    ...query,
    membroIdParam: id,
    selectorPeriodo,
    selectorDe,
    selectorAte,
    presencaFiltro,
    expanded,
    onPeriodDraftChange,
    aplicarPeriodo,
    selectPresencaFiltro,
    toggleExpanded,
    openEvento,
    goToMembers: () => navigate('/membros'),
  };
}
