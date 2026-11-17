import { ChevronLeft, ChevronRight, Coins } from 'lucide-react';
import { Button, EmptyState, LinhaDeMensalidade } from '../../../components';
import type { FinanceiroCompetenciaDTO, FinanceiroSituacaoFiltro } from '../../../types';

const LIST_TITLES: Record<FinanceiroSituacaoFiltro, string> = {
  all: 'Mensalidades',
  paid: 'Mensalidades em dia',
  soon: 'Mensalidades a vencer',
  late: 'Mensalidades em atraso',
};

export interface ListaMensalidadesCompetenciaProps {
  data: FinanceiroCompetenciaDTO;
  filtro: FinanceiroSituacaoFiltro;
  isFetching: boolean;
  onPageChange: (nextPage: number) => void;
  onOpenRecebimento: (membroId: string, mensalidadeId: string) => void;
  onShowAll?: () => void;
}

export function ListaMensalidadesCompetencia({
  data,
  filtro,
  isFetching,
  onPageChange,
  onOpenRecebimento,
  onShowAll,
}: ListaMensalidadesCompetenciaProps) {
  return (
    <div className="grid gap-3">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-[15px] font-bold text-[#111318] dark:text-[#f6f7f9]">
          {LIST_TITLES[filtro]}
        </h2>
        <div className="flex items-center gap-2">
          {isFetching && (
            <span className="text-xs text-[#5c6270] dark:text-[#bfc2cb]">Atualizando...</span>
          )}
          <strong className="text-sm font-bold text-[#ff4356] tabular-nums">
            {data.totalFiltrado}
          </strong>
        </div>
      </div>

      {data.itens.length === 0 ? (
        <EmptyState
          titulo={
            data.contagensPorSituacao.all === 0
              ? 'Nenhuma mensalidade gerada'
              : 'Nenhuma mensalidade neste filtro'
          }
          descricao={
            data.contagensPorSituacao.all === 0
              ? `Não há mensalidades lançadas para ${data.competenciaRotulo}.`
              : `Não há lançamentos para "${LIST_TITLES[filtro].toLowerCase()}" em ${data.competenciaRotulo}.`
          }
          icone={<Coins className="h-5 w-5" />}
          acao={
            data.contagensPorSituacao.all > 0 && filtro !== 'all' && onShowAll ? (
              <Button variant="secondary" size="sm" onClick={onShowAll}>
                Ver todas da competência
              </Button>
            ) : undefined
          }
        />
      ) : (
        <>
          <div className="grid gap-2">
            {data.itens.map((item) => (
              <LinhaDeMensalidade
                key={item.id}
                membroNome={item.membroNome}
                apelido={item.membroApelido}
                fotoUrl={item.membroFotoUrl}
                vencimentoTexto={item.vencimentoTexto}
                saldoCentavos={item.saldoCentavos}
                valorTotalCentavos={item.valorCentavos}
                situacao={item.situacao}
                onOpen={
                  item.saldoCentavos > 0
                    ? () => onOpenRecebimento(item.membroId, item.id)
                    : undefined
                }
              />
            ))}
          </div>

          {data.totalPages > 1 && (
            <nav
              aria-label="Paginação de mensalidades"
              className="flex items-center justify-between gap-2 pt-1"
            >
              <Button
                variant="secondary"
                size="sm"
                disabled={data.page <= 1 || isFetching}
                onClick={() => onPageChange(data.page - 1)}
                icon={<ChevronLeft className="h-4 w-4" />}
              >
                Anterior
              </Button>
              <span className="text-xs font-medium text-[#5c6270] dark:text-[#bfc2cb] tabular-nums">
                Página {data.page} de {data.totalPages}
              </span>
              <Button
                variant="secondary"
                size="sm"
                disabled={data.page >= data.totalPages || isFetching}
                onClick={() => onPageChange(data.page + 1)}
              >
                Próxima
                <ChevronRight className="h-4 w-4" />
              </Button>
            </nav>
          )}
        </>
      )}
    </div>
  );
}
