import {
  CabecalhoDeDetalhe,
  ErrorState,
  FormularioSkeleton,
} from '../../components';
import { FormularioCriarEvento } from './components/FormularioCriarEvento';
import { useCriarEventoForm } from './hooks/useCriarEventoForm';

export function CriarEvento() {
  const {
    contexto,
    isLoading,
    isError,
    refetch,
    isPending,
    form,
    fieldErrors,
    formError,
    restoredFromDraft,
    expectedCount,
    updateField,
    toggleNivelId,
    setTodosNiveis,
    resetDraft,
    handleCancel,
    handleSubmit,
  } = useCriarEventoForm();

  if (isLoading) {
    return <FormularioSkeleton />;
  }

  if (isError || !contexto) {
    return (
      <div className="mx-auto max-w-[640px] py-4">
        <ErrorState
          titulo="Erro ao preparar novo evento"
          mensagem="Não foi possível carregar os níveis e dados do clube."
          onRetry={() => refetch()}
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[640px]">
      <div className="grid gap-4 px-3 pb-6">
        <CabecalhoDeDetalhe titulo="Criar evento" voltarPara="/eventos" />

        <FormularioCriarEvento
          contexto={contexto}
          form={form}
          fieldErrors={fieldErrors}
          formError={formError}
          restoredFromDraft={restoredFromDraft}
          expectedCount={expectedCount}
          isPending={isPending}
          onFieldChange={updateField}
          onChangeTodos={setTodosNiveis}
          onToggleNivel={toggleNivelId}
          onResetDraft={resetDraft}
          onCancel={handleCancel}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
