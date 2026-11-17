import { UserX } from 'lucide-react';
import {
  Button,
  CabecalhoDeDetalhe,
  EmptyState,
  ErrorState,
  FormularioSkeleton,
} from '../../components';
import { FormularioEditarMembro } from './components/FormularioEditarMembro';
import { useEditarMembroForm } from './hooks/useEditarMembroForm';

export function EditarMembro() {
  const {
    todayIso,
    data,
    isLoading,
    isError,
    refetch,
    isPending,
    form,
    fieldErrors,
    formError,
    restoredFromDraft,
    updateField,
    discardDraft,
    handleCancel,
    handleSubmit,
    goToMembers,
  } = useEditarMembroForm();

  if (isLoading) {
    return <FormularioSkeleton />;
  }

  if (isError) {
    return (
      <div className="mx-auto max-w-[640px] py-4">
        <ErrorState
          titulo="Erro ao carregar membro"
          mensagem="Não foi possível carregar os dados cadastrais deste integrante."
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
      <div className="grid gap-4 px-3 pb-4">
        <CabecalhoDeDetalhe titulo="Editar membro" voltarPara={`/membros/${data.id}`} />

        <FormularioEditarMembro
          membro={data}
          form={form}
          todayIso={todayIso}
          fieldErrors={fieldErrors}
          formError={formError}
          restoredFromDraft={restoredFromDraft}
          isPending={isPending}
          onFieldChange={updateField}
          onDiscardDraft={discardDraft}
          onCancel={handleCancel}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
