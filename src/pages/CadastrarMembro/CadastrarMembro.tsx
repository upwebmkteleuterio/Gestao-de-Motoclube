import { Layers } from 'lucide-react';
import {
  Button,
  CabecalhoDeDetalhe,
  EmptyState,
  ErrorState,
  FormularioSkeleton,
} from '../../components';
import { FormularioNovoMembro } from './components/FormularioNovoMembro';
import { useCadastrarMembroForm } from './hooks/useCadastrarMembroForm';

export function CadastrarMembro() {
  const {
    todayIso,
    form,
    fieldErrors,
    formError,
    restoredFromDraft,
    isLoading,
    isError,
    isPending,
    clube,
    niveis,
    refetchAll,
    goToCreateLevel,
    updateField,
    resetDraft,
    handleCancel,
    handleSubmit,
  } = useCadastrarMembroForm();

  if (isLoading) {
    return <FormularioSkeleton />;
  }

  if (isError || !clube) {
    return (
      <div className="mx-auto max-w-[640px] py-4">
        <ErrorState
          titulo="Erro ao preparar cadastro"
          mensagem="Não foi possível carregar os níveis e dados do clube."
          onRetry={refetchAll}
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[640px]">
      <div className="grid gap-4 px-3 pb-6">
        <CabecalhoDeDetalhe titulo="Cadastrar membro" voltarPara="/membros" />

        {niveis.length === 0 ? (
          <EmptyState
            titulo="Nenhum nível cadastrado"
            descricao="Cadastre ao menos um nível na hierarquia do clube antes de incluir membros."
            icone={<Layers className="h-5 w-5" />}
            acao={
              <Button size="sm" onClick={goToCreateLevel}>
                Cadastrar nível
              </Button>
            }
          />
        ) : (
          <FormularioNovoMembro
            form={form}
            todayIso={todayIso}
            niveis={niveis}
            fieldErrors={fieldErrors}
            formError={formError}
            restoredFromDraft={restoredFromDraft}
            isPending={isPending}
            onFieldChange={updateField}
            onResetDraft={resetDraft}
            onCancel={handleCancel}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
}
