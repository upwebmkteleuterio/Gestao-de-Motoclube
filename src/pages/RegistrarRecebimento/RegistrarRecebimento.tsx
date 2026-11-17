import { CheckCircle2 } from 'lucide-react';
import {
  Button,
  CabecalhoDeDetalhe,
  EmptyState,
  ErrorState,
  RecebimentoSkeleton,
} from '../../components';
import { FormularioRecebimento } from './components/FormularioRecebimento';
import { useRegistrarRecebimentoForm } from './hooks/useRegistrarRecebimentoForm';

export function RegistrarRecebimento() {
  const {
    contexto,
    isLoading,
    isError,
    refetch,
    isPending,
    voltarPara,
    selecionada,
    form,
    restoredFromDraft,
    simulacaoSaldo,
    fieldErrors,
    formError,
    updateField,
    handleSelectMensalidade,
    preencherSaldoTotal,
    resetDraft,
    handleCancel,
    handleSubmit,
  } = useRegistrarRecebimentoForm();

  if (isLoading) {
    return <RecebimentoSkeleton />;
  }

  if (isError || !contexto) {
    return (
      <div className="mx-auto max-w-[640px] py-4">
        <ErrorState
          titulo="Erro ao preparar recebimento"
          mensagem="Não foi possível carregar as mensalidades em aberto do motoclube."
          onRetry={() => refetch()}
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[640px]">
      <div className="grid gap-4 px-3 pb-6">
        <CabecalhoDeDetalhe titulo="Registrar recebimento" voltarPara={voltarPara} />

        {!selecionada || contexto.opcoesPendentes.length === 0 ? (
          <EmptyState
            titulo="Nenhuma mensalidade em aberto"
            descricao="Todas as mensalidades ativas deste clube já foram integralmente quitadas."
            icone={<CheckCircle2 className="h-5 w-5" />}
            acao={
              <Button variant="secondary" size="sm" onClick={handleCancel}>
                Voltar ao financeiro
              </Button>
            }
          />
        ) : (
          <FormularioRecebimento
            contexto={contexto}
            selecionada={selecionada}
            form={form}
            restoredFromDraft={restoredFromDraft}
            simulacaoSaldo={simulacaoSaldo}
            fieldErrors={fieldErrors}
            formError={formError}
            isPending={isPending}
            onSelectMensalidade={handleSelectMensalidade}
            onFieldChange={updateField}
            onPreencherSaldoTotal={preencherSaldoTotal}
            onResetDraft={resetDraft}
            onCancel={handleCancel}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
}
