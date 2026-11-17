import { Coins, Plus } from 'lucide-react';
import {
  BotaoPrincipal,
  Card,
  ErrorState,
  FinanceiroSkeleton,
  ResumoDaCompetencia,
} from '../../components';
import {
  FiltroDeSituacaoFinanceira,
  SeletorDeCompetencia,
} from './components/FiltroCompetenciaESituacao';
import { ListaMensalidadesCompetencia } from './components/ListaMensalidadesCompetencia';
import { useFinanceiroPage } from './hooks/useFinanceiroPage';

export function Financeiro() {
  const {
    data,
    isLoading,
    isFetching,
    isError,
    refetch,
    filtro,
    handleSelectCompetencia,
    handleSelectFiltro,
    handlePageChange,
    handleClearMemberFilter,
    openRecebimento,
  } = useFinanceiroPage();

  if (isLoading) {
    return <FinanceiroSkeleton />;
  }

  if (isError || !data) {
    return (
      <div className="mx-auto max-w-[640px] py-4">
        <ErrorState
          titulo="Erro ao carregar financeiro"
          mensagem="Não foi possível consultar as mensalidades desta competência."
          onRetry={() => refetch()}
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[640px]">
      <div className="grid gap-4 px-3 pb-4">
        <div className="space-y-1">
          <h1 className="text-[28px] font-bold leading-tight text-[#111318] dark:text-[#f6f7f9]">
            Financeiro
          </h1>
          <p className="text-sm text-[#5c6270] dark:text-[#bfc2cb]">Mensalidades sob controle.</p>
        </div>

        <SeletorDeCompetencia
          data={data}
          isFetching={isFetching}
          onSelectCompetencia={handleSelectCompetencia}
        />

        <ResumoDaCompetencia
          previstoCentavos={data.previstoCentavos}
          recebidoCentavos={data.recebidoCentavos}
          pendenteCentavos={data.pendenteCentavos}
          emDiaCount={data.emDiaCount}
          pendentesCount={data.pendentesCount}
        />

        <FiltroDeSituacaoFinanceira
          data={data}
          filtro={filtro}
          onSelectFiltro={handleSelectFiltro}
          onClearMemberFilter={handleClearMemberFilter}
        />

        <ListaMensalidadesCompetencia
          data={data}
          filtro={filtro}
          isFetching={isFetching}
          onPageChange={handlePageChange}
          onOpenRecebimento={(membroId, mensalidadeId) => openRecebimento(membroId, mensalidadeId)}
          onShowAll={() => handleSelectFiltro('all')}
        />

        <BotaoPrincipal
          texto="Registrar recebimento"
          icon={<Plus className="h-4 w-4" />}
          onClick={() => openRecebimento(data.membroFiltroId ?? undefined)}
        />

        <Card padding="md" className="flex items-center gap-3">
          <Coins className="h-5 w-5 shrink-0 text-[#5c6270] dark:text-[#bfc2cb]" />
          <div className="space-y-0.5">
            <h2 className="text-base font-bold leading-tight">Controle de recebimentos</h2>
            <p className="text-xs text-[#5c6270] dark:text-[#bfc2cb]">
              Pagamentos feitos diretamente ao clube. Registre Pix, dinheiro ou transferência.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
