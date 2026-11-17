import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Button, Card, GrupoDeFiltros } from '../../../components';
import type { FinanceiroCompetenciaDTO, FinanceiroSituacaoFiltro } from '../../../types';

export interface FiltroCompetenciaESituacaoProps {
  data: FinanceiroCompetenciaDTO;
  filtro: FinanceiroSituacaoFiltro;
  isFetching: boolean;
  onSelectCompetencia: (mes: string | null) => void;
  onSelectFiltro: (filtro: string) => void;
  onClearMemberFilter: () => void;
}

export function SeletorDeCompetencia({
  data,
  isFetching,
  onSelectCompetencia,
}: Pick<FiltroCompetenciaESituacaoProps, 'data' | 'isFetching' | 'onSelectCompetencia'>) {
  return (
    <div className="grid grid-cols-[44px_minmax(0,1fr)_44px] items-center rounded-[11px] border border-[#d7dbe3] dark:border-[#71747b] bg-white dark:bg-[#1a1c20] text-center">
      <button
        type="button"
        aria-label="Mês anterior"
        disabled={!data.canPrev || isFetching}
        onClick={() => onSelectCompetencia(data.prevCompetencia)}
        className="grid min-h-[42px] place-items-center rounded-[10px] transition-colors hover:bg-[#eceef2] dark:hover:bg-[#333640] disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <ArrowLeft className="h-4 w-4" />
      </button>
      <strong aria-live="polite" className="text-sm font-bold">
        {data.competenciaRotulo}
      </strong>
      <button
        type="button"
        aria-label="Próximo mês"
        disabled={!data.canNext || isFetching}
        onClick={() => onSelectCompetencia(data.nextCompetencia)}
        className="grid min-h-[42px] place-items-center rounded-[10px] transition-colors hover:bg-[#eceef2] dark:hover:bg-[#333640] disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}

export function FiltroDeSituacaoFinanceira({
  data,
  filtro,
  onSelectFiltro,
  onClearMemberFilter,
}: Pick<
  FiltroCompetenciaESituacaoProps,
  'data' | 'filtro' | 'onSelectFiltro' | 'onClearMemberFilter'
>) {
  return (
    <div className="grid gap-2.5">
      {data.membroFiltroId && (
        <Card padding="sm" className="flex items-center justify-between gap-2">
          <span className="text-xs text-[#5c6270] dark:text-[#bfc2cb]">
            Filtrando membro:{' '}
            <strong className="text-[#111318] dark:text-[#f6f7f9]">
              {data.membroFiltroNome ?? data.membroFiltroId}
            </strong>
          </span>
          <Button type="button" variant="ghost" size="sm" onClick={onClearMemberFilter}>
            Ver todos
          </Button>
        </Card>
      )}

      <GrupoDeFiltros
        ariaLabel="Situação das mensalidades"
        variante="tabs"
        selecionado={filtro}
        onSelect={onSelectFiltro}
        opcoes={[
          { id: 'all', nome: 'Todos' },
          { id: 'paid', nome: 'Em dia' },
          { id: 'soon', nome: 'A vencer' },
          { id: 'late', nome: 'Em atraso' },
        ]}
      />
    </div>
  );
}
