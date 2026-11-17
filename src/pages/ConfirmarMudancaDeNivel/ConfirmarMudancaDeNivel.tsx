import { UserX } from 'lucide-react';
import {
  Badge,
  Button,
  CabecalhoDeDetalhe,
  Card,
  EmptyState,
  ErrorState,
  IdentidadeDoMembro,
  ModalDeMudancaDeNivel,
  NivelHistoricoSkeleton,
} from '../../components';
import { useConfirmarMudancaDeNivelPage } from './hooks/useConfirmarMudancaDeNivelPage';

export function ConfirmarMudancaDeNivel() {
  const {
    data,
    isLoading,
    isError,
    refetch,
    erro,
    concorrenciaDetectada,
    isPendingMutation,
    confirmarMudanca,
    reloadMemberLevel,
    cancelar,
    goToMembers,
  } = useConfirmarMudancaDeNivelPage();

  if (isLoading) {
    return <NivelHistoricoSkeleton />;
  }

  if (isError) {
    return (
      <div className="mx-auto max-w-[640px] py-4">
        <ErrorState
          titulo="Erro ao carregar dados do membro"
          mensagem="Não foi possível carregar o nível atual para confirmação."
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
        <CabecalhoDeDetalhe
          titulo="Confirmar mudança de nível"
          voltarPara={`/membros/${data.membroId}/nivel`}
        />

        {data.membroStatus !== 'ativo' && (
          <Card padding="sm" className="flex items-center justify-between gap-2">
            <span className="text-xs text-[#5c6270] dark:text-[#bfc2cb]">
              Cadastro com acesso restrito no clube
            </span>
            <Badge tone={data.membroStatus === 'inativo' ? 'warning' : 'danger'}>
              {data.membroStatus === 'inativo' ? 'Inativo' : 'Suspenso'}
            </Badge>
          </Card>
        )}

        <IdentidadeDoMembro
          nome={data.membroNome}
          apelido={data.membroApelido}
          nivel={data.nivelAtualNome}
          fotoUrl={data.membroFotoUrl}
          variante="nivel"
        />
      </div>

      <ModalDeMudancaDeNivel
        open
        membroNome={data.membroNome}
        membroFotoUrl={data.membroFotoUrl}
        nivelAtual={data.nivelAtualNome}
        opcoes={data.niveisDisponiveis}
        isPending={isPendingMutation}
        erro={erro}
        concorrenciaDetectada={concorrenciaDetectada}
        onReload={reloadMemberLevel}
        onConfirm={confirmarMudanca}
        onCancel={cancelar}
      />
    </div>
  );
}
