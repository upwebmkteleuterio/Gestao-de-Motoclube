import { UserX } from 'lucide-react';
import {
  Button,
  EmptyState,
  ErrorState,
  ModalDeMudancaDeNivel,
  NivelHistoricoSkeleton,
} from '../../components';
import { CabecalhoNivelMembro } from './components/CabecalhoNivelMembro';
import { ResumoEHistoricoNivel } from './components/ResumoEHistoricoNivel';
import { useNivelEHistoricoPage } from './hooks/useNivelEHistoricoPage';

export function NivelEHistorico() {
  const {
    data,
    isLoading,
    isFetching,
    isError,
    refetch,
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
    isPendingMutation,
    modalErro,
    concorrenciaDetectada,
    feedbackMsg,
    goToMembers,
  } = useNivelEHistoricoPage();

  if (isLoading) {
    return <NivelHistoricoSkeleton />;
  }

  if (isError) {
    return (
      <div className="mx-auto max-w-[640px] py-4">
        <ErrorState
          titulo="Erro ao carregar nível e histórico"
          mensagem="Não foi possível consultar o resumo e o histórico de níveis deste membro."
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
      <div className="grid gap-3.5 px-3 pb-5">
        <CabecalhoNivelMembro
          data={data}
          feedbackMsg={feedbackMsg}
          onOpenModal={openModal}
        />

        <ResumoEHistoricoNivel
          data={data}
          periodo={selectorPeriodo}
          deInicial={selectorDe}
          ateInicial={selectorAte}
          isFetching={isFetching}
          onDraftChange={onPeriodDraftChange}
          onApplyPeriodo={aplicarPeriodo}
        />
      </div>

      <ModalDeMudancaDeNivel
        open={modalOpen}
        membroNome={data.membroNome}
        membroFotoUrl={data.membroFotoUrl}
        nivelAtual={data.nivelAtualNome}
        opcoes={data.niveisDisponiveis}
        isPending={isPendingMutation}
        erro={modalErro}
        concorrenciaDetectada={concorrenciaDetectada}
        onReload={reloadMemberLevel}
        onConfirm={confirmarMudanca}
        onCancel={closeModal}
      />
    </div>
  );
}
