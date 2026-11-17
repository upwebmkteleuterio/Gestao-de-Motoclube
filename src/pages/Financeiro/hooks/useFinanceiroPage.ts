import { useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useFinanceiroCompetencia } from '../../../hooks';
import { getHojeLocalCampoGrande } from '../../../services';
import { useAppStore } from '../../../store';
import type { FinanceiroSituacaoFiltro } from '../../../types';

const VALID_FILTERS: FinanceiroSituacaoFiltro[] = ['all', 'paid', 'soon', 'late'];
const DRAFT_KEY = 'financeiro-filtros';
const PAGE_SIZE = 6;

interface FinanceiroDraftState {
  mes?: string;
  filtro?: FinanceiroSituacaoFiltro;
  pagina?: number;
}

export function useFinanceiroPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeClubId = useAppStore((s) => s.activeClubId);
  const savedDraft = useAppStore((s) => s.draftForms[DRAFT_KEY]) as
    | FinanceiroDraftState
    | undefined;
  const setDraftForm = useAppStore((s) => s.setDraftForm);

  const defaultMes = useMemo(() => getHojeLocalCampoGrande().slice(0, 7), []);

  const urlMes = searchParams.get('mes');
  const urlFiltro = searchParams.get('filtro') as FinanceiroSituacaoFiltro | null;
  const urlMembro = searchParams.get('membro') ?? '';
  const urlPagina = searchParams.get('pagina');

  const competencia =
    urlMes && /^\d{4}-\d{2}$/.test(urlMes)
      ? urlMes
      : !urlMembro && savedDraft?.mes && /^\d{4}-\d{2}$/.test(savedDraft.mes)
        ? savedDraft.mes
        : defaultMes;

  const filtro: FinanceiroSituacaoFiltro =
    urlFiltro && VALID_FILTERS.includes(urlFiltro)
      ? urlFiltro
      : urlMembro
        ? 'all'
        : savedDraft?.filtro && VALID_FILTERS.includes(savedDraft.filtro)
          ? savedDraft.filtro
          : 'late';

  const page = Math.max(
    1,
    Number(
      urlPagina ?? (urlMes || urlFiltro || urlMembro ? '1' : savedDraft?.pagina) ?? '1',
    ) || 1,
  );

  const query = useFinanceiroCompetencia({
    motoclubeId: activeClubId,
    competencia,
    filtro,
    membroId: urlMembro,
    page,
    pageSize: PAGE_SIZE,
  });

  const syncParamsAndDraft = (updates: {
    mes?: string;
    filtro?: FinanceiroSituacaoFiltro;
    pagina?: number;
    membro?: string | null;
  }) => {
    const nextMes = updates.mes ?? competencia;
    const nextFiltro = updates.filtro ?? filtro;
    const nextPage = updates.pagina ?? 1;
    const nextMembro = updates.membro === undefined ? urlMembro : (updates.membro ?? '');

    if (!nextMembro) {
      setDraftForm(DRAFT_KEY, {
        mes: nextMes,
        filtro: nextFiltro,
        pagina: nextPage,
      });
    }

    const next = new URLSearchParams();
    next.set('mes', nextMes);
    next.set('filtro', nextFiltro);
    if (nextPage > 1) {
      next.set('pagina', String(nextPage));
    }
    if (nextMembro) {
      next.set('membro', nextMembro);
    }
    setSearchParams(next, { replace: true });
  };

  const handleSelectCompetencia = (nextMes: string | null) => {
    if (!nextMes) return;
    syncParamsAndDraft({ mes: nextMes, pagina: 1 });
  };

  const handleSelectFiltro = (nextFiltro: string) => {
    if (!VALID_FILTERS.includes(nextFiltro as FinanceiroSituacaoFiltro)) return;
    syncParamsAndDraft({ filtro: nextFiltro as FinanceiroSituacaoFiltro, pagina: 1 });
  };

  const handlePageChange = (nextPage: number) => {
    syncParamsAndDraft({ pagina: Math.max(1, nextPage) });
  };

  const handleClearMemberFilter = () => {
    syncParamsAndDraft({ membro: null, filtro: 'late', pagina: 1 });
  };

  const openRecebimento = (membroId?: string, mensalidadeId?: string) => {
    const targetParams = new URLSearchParams();
    targetParams.set('mes', query.data?.competencia ?? competencia);
    if (membroId) targetParams.set('membro', membroId);
    if (mensalidadeId) targetParams.set('mensalidade', mensalidadeId);
    navigate(`/financeiro/recebimento?${targetParams.toString()}`);
  };

  return {
    ...query,
    filtro,
    handleSelectCompetencia,
    handleSelectFiltro,
    handlePageChange,
    handleClearMemberFilter,
    openRecebimento,
  };
}
