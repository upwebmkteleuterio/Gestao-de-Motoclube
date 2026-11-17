import { GrupoDeFiltros, SeletorDePeriodoDosEventos } from '../../../components';
import { formatarDataBr } from '../../../services';
import type { EventosAbaTipo, EventosQueryResult } from '../../../types';

export interface FiltrosEPeriodoEventosProps {
  data: EventosQueryResult;
  aba: EventosAbaTipo;
  onSelectAba: (aba: string) => void;
  onOpenPeriodoModal: () => void;
  onResetDefaultPeriod: () => void;
}

export function FiltrosEPeriodoEventos({
  data,
  aba,
  onSelectAba,
  onOpenPeriodoModal,
  onResetDefaultPeriod,
}: FiltrosEPeriodoEventosProps) {
  return (
    <div className="grid gap-2.5">
      <GrupoDeFiltros
        variante="tabs"
        ariaLabel="Filtrar eventos por situação"
        selecionado={aba}
        onSelect={onSelectAba}
        opcoes={[
          {
            id: 'upcoming',
            nome: 'Próximos',
            contagem: data.contagensPorAba.upcoming,
          },
          {
            id: 'past',
            nome: 'Realizados',
            contagem: data.contagensPorAba.past,
          },
        ]}
      />

      <SeletorDePeriodoDosEventos rotulo={data.periodoRotulo} onOpen={onOpenPeriodoModal} />

      <div className="flex flex-wrap items-center justify-between gap-2 px-1 text-xs text-[#5c6270] dark:text-[#bfc2cb]">
        <span>
          Recorte: {formatarDataBr(data.periodoInicio)} a {formatarDataBr(data.periodoFim)}
        </span>
        {!data.periodoPadrao && (
          <button
            type="button"
            onClick={onResetDefaultPeriod}
            className="font-semibold text-[#ff273a] hover:underline"
          >
            Restaurar padrão (3 meses)
          </button>
        )}
      </div>
    </div>
  );
}
