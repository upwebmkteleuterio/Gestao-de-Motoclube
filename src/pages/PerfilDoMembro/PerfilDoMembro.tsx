import { Info, Pencil, UserX } from 'lucide-react';
import {
  Badge,
  Button,
  CabecalhoDeDetalhe,
  Card,
  EmptyState,
  ErrorState,
  IdentidadeDoMembro,
  PerfilMembroSkeleton,
  ResumoDeIndicadores,
} from '../../components';
import { AtalhosDoPerfilMembro } from './components/AtalhosDoPerfilMembro';
import { PainelContatoMembro } from './components/PainelContatoMembro';
import { usePerfilMembroPage } from './hooks/usePerfilMembroPage';

export function PerfilDoMembro() {
  const {
    data,
    isLoading,
    isError,
    refetch,
    detailsOpen,
    openDetails,
    closeDetails,
    goToMembers,
    goToEdit,
    goToLevelHistory,
  } = usePerfilMembroPage();

  if (isLoading) {
    return <PerfilMembroSkeleton />;
  }

  if (isError) {
    return (
      <div className="mx-auto max-w-[640px] py-4">
        <ErrorState
          titulo="Erro ao carregar perfil"
          mensagem="Não foi possível consultar os dados do integrante."
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
        <CabecalhoDeDetalhe
          titulo="Perfil do membro"
          voltarPara="/membros"
          acao={
            <div className="flex items-center gap-1">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="px-2 sm:px-3"
                aria-label="Dados de contato e acesso"
                onClick={openDetails}
                icon={<Info className="h-4 w-4" />}
              >
                <span className="hidden min-[400px]:inline">Dados</span>
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="px-2 sm:px-3"
                aria-label="Editar membro"
                onClick={() => goToEdit(data.id)}
                icon={<Pencil className="h-4 w-4" />}
              >
                <span className="hidden sm:inline">Editar</span>
              </Button>
            </div>
          }
        />

        {data.status !== 'ativo' && (
          <Card padding="sm" className="flex items-center justify-between gap-2">
            <span className="text-xs text-[#5c6270] dark:text-[#bfc2cb]">
              Cadastro com acesso restrito no clube
            </span>
            <Badge tone={data.status === 'inativo' ? 'warning' : 'danger'}>
              {data.status === 'inativo' ? 'Inativo' : 'Suspenso'}
            </Badge>
          </Card>
        )}

        <IdentidadeDoMembro
          nome={data.nome}
          apelido={data.apelido}
          nivel={data.nivelNome}
          fotoUrl={data.fotoUrl}
          entradaTexto={`No clube ${data.ingressoTexto.toLowerCase()}`}
          variante="perfil"
        />

        <ResumoDeIndicadores
          frequenciaPercentual={data.frequenciaPercentual}
          mensalidadeStatus={data.mensalidadeStatusTexto}
          ocorrenciasTotal={data.ocorrenciasTotal}
          exibirResumoEventos={false}
        />

        <AtalhosDoPerfilMembro membro={data} />
      </div>

      <PainelContatoMembro
        open={detailsOpen}
        membro={data}
        onClose={closeDetails}
        onEdit={() => goToEdit(data.id)}
        onLevelHistory={() => goToLevelHistory(data.id)}
      />
    </div>
  );
}
