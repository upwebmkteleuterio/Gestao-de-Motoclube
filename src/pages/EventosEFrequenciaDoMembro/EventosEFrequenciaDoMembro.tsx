import { UserX } from 'lucide-react';
import {
  Button,
  CabecalhoDeDetalhe,
  EmptyState,
  ErrorState,
  FrequenciaMembroSkeleton,
  IdentidadeDoMembro,
} from '../../components';
import { FiltrosEFrequenciaPeriodo } from './components/FiltrosEFrequenciaPeriodo';
import { ListaPresencasMembro } from './components/ListaPresencasMembro';
import { useEventosEFrequenciaPage } from './hooks/useEventosEFrequenciaPage';

export function EventosEFrequenciaDoMembro() {
  const {
    data,
    isLoading,
    isFetching,
    isError,
    refetch,
    membroIdParam,
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
    goToMembers,
  } = useEventosEFrequenciaPage();

  if (isLoading) {
    return <FrequenciaMembroSkeleton />;
  }

  if (isError) {
    return (
      <div className="mx-auto max-w-[640px] py-4">
        <ErrorState
          titulo="Erro ao carregar eventos e frequência"
          mensagem="Não foi possível consultar o histórico de participações deste membro."
          onRetry={() => refetch()}
        />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="mx-auto max-w-[640px] py-4">
        <EmptyState
          titulo="Membro não encontrado"
          descricao="O integrante solicitado não existe ou não pertence a este motoclube."
          icone={<UserX className="h-5 w-5" />}
          acao={
            <Button variant="secondary" size="sm" onClick={goToMembers}>
              Voltar para membros
            </Button>
          }
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[640px]">
      <div className="grid gap-3.5 px-3 pb-4">
        <CabecalhoDeDetalhe
          titulo="Eventos e frequência"
          voltarPara={`/membros/${membroIdParam ?? data.membroId}`}
        />

        <IdentidadeDoMembro
          nome={data.membroNome}
          apelido={data.membroApelido}
          nivel={data.nivelNome}
          fotoUrl={data.membroFotoUrl}
          entradaTexto={data.ingressoTexto}
          variante="perfil"
          frequenciaPercentual={data.taxaPercentual}
          exibirFrequencia
          emCard
        />

        <FiltrosEFrequenciaPeriodo
          data={data}
          periodo={selectorPeriodo}
          deInicial={selectorDe}
          ateInicial={selectorAte}
          presencaFiltro={presencaFiltro}
          isFetching={isFetching}
          onDraftChange={onPeriodDraftChange}
          onApplyPeriodo={aplicarPeriodo}
          onSelectPresenca={selectPresencaFiltro}
        />

        <ListaPresencasMembro
          data={data}
          presencaFiltro={presencaFiltro}
          expanded={expanded}
          isFetching={isFetching}
          onOpenEvento={openEvento}
          onToggleExpanded={toggleExpanded}
          onShowAllPresencas={() => selectPresencaFiltro('all')}
        />
      </div>
    </div>
  );
}
