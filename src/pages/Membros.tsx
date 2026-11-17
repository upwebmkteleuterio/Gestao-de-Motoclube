import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Users } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  BotaoPrincipal,
  BuscaDeMembros,
  Button,
  EmptyState,
  ErrorState,
  FiltrosDeNivel,
  LinhaDeMembro,
  ListaMembrosSkeleton,
} from '../components';
import { useMembrosQuery, useNiveisDoClube } from '../hooks';
import { useAppStore } from '../store';

const PAGE_SIZE = 5;

export function Membros() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeClubId = useAppStore((s) => s.activeClubId);

  const buscaParam = searchParams.get('busca') ?? '';
  const nivelParam = searchParams.get('nivel') ?? '';
  const pageParam = Math.max(1, Number(searchParams.get('pagina') ?? '1') || 1);

  const [buscaInput, setBuscaInput] = useState(buscaParam);

  useEffect(() => {
    setBuscaInput(buscaParam);
  }, [buscaParam]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (buscaInput === buscaParam) return;
      const next = new URLSearchParams(searchParams);
      if (buscaInput.trim()) {
        next.set('busca', buscaInput);
      } else {
        next.delete('busca');
      }
      next.delete('pagina');
      setSearchParams(next, { replace: true });
    }, 220);
    return () => window.clearTimeout(timer);
  }, [buscaInput, buscaParam, searchParams, setSearchParams]);

  const {
    data,
    isLoading,
    isFetching,
    isError,
    refetch,
  } = useMembrosQuery({
    motoclubeId: activeClubId,
    busca: buscaParam,
    nivelId: nivelParam,
    page: pageParam,
    pageSize: PAGE_SIZE,
  });

  const niveisQuery = useNiveisDoClube(activeClubId);

  const handleNivelSelect = (nivelId: string) => {
    const next = new URLSearchParams(searchParams);
    if (nivelId) {
      next.set('nivel', nivelId);
    } else {
      next.delete('nivel');
    }
    next.delete('pagina');
    setSearchParams(next, { replace: true });
  };

  const handlePageChange = (nextPage: number) => {
    const next = new URLSearchParams(searchParams);
    if (nextPage > 1) {
      next.set('pagina', String(nextPage));
    } else {
      next.delete('pagina');
    }
    setSearchParams(next, { replace: true });
  };

  const handleLimparFiltros = () => {
    setBuscaInput('');
    setSearchParams({}, { replace: true });
  };

  if (isLoading || niveisQuery.isLoading) {
    return <ListaMembrosSkeleton />;
  }

  if (isError || niveisQuery.isError || !data) {
    return (
      <div className="mx-auto max-w-[640px] py-4">
        <ErrorState
          titulo="Erro ao carregar membros"
          mensagem="Não foi possível consultar a lista de integrantes do clube."
          onRetry={() => {
            refetch();
            niveisQuery.refetch();
          }}
        />
      </div>
    );
  }

  const opcoesNiveis = [
    { id: '', nome: 'Todos', contagem: data.totalGeral },
    ...(niveisQuery.data ?? []).map((n) => ({
      id: n.id,
      nome: n.nome,
      contagem: data.contagensPorNivel[n.id] ?? 0,
    })),
  ];

  const temFiltroAtivo = Boolean(buscaParam.trim() || nivelParam);

  return (
    <div className="mx-auto max-w-[640px]">
      <div className="grid gap-4 px-3 pb-4">
        <div className="space-y-1">
          <h1 className="text-[28px] font-bold leading-tight text-[#111318] dark:text-[#f6f7f9]">
            Membros
          </h1>
          <p className="text-sm text-[#5c6270] dark:text-[#bfc2cb]">
            {data.totalGeral} {data.totalGeral === 1 ? 'integrante' : 'integrantes'}. Uma só irmandade.
          </p>
        </div>

        <BotaoPrincipal
          texto="Adicionar membro"
          icon={<Plus className="h-4 w-4" />}
          onClick={() => navigate('/membros/novo')}
        />

        <BuscaDeMembros value={buscaInput} onChange={setBuscaInput} />

        <FiltrosDeNivel
          niveis={opcoesNiveis}
          selecionado={nivelParam}
          onSelect={handleNivelSelect}
        />

        <div className="flex items-center justify-between gap-2">
          <h2 className="text-[15px] font-bold text-[#111318] dark:text-[#f6f7f9]">
            {temFiltroAtivo ? 'Resultado da busca' : 'Todos os membros'}
          </h2>
          <div className="flex items-center gap-2">
            {isFetching && (
              <span className="text-xs text-[#5c6270] dark:text-[#bfc2cb]">Atualizando...</span>
            )}
            <span
              aria-live="polite"
              className="text-sm font-bold text-[#ff273a] tabular-nums"
            >
              {data.totalFiltrado}
            </span>
          </div>
        </div>

        {data.itens.length === 0 ? (
          <EmptyState
            titulo="Nenhum membro encontrado"
            descricao={
              temFiltroAtivo
                ? 'Nenhum integrante corresponde à busca ou ao nível selecionado.'
                : 'Este motoclube ainda não possui membros cadastrados.'
            }
            icone={<Users className="h-5 w-5" />}
            acao={
              temFiltroAtivo ? (
                <Button variant="secondary" size="sm" onClick={handleLimparFiltros}>
                  Limpar filtros
                </Button>
              ) : (
                <Button size="sm" onClick={() => navigate('/membros/novo')}>
                  Adicionar membro
                </Button>
              )
            }
          />
        ) : (
          <>
            <ul className="grid gap-2">
              {data.itens.map((membro) => (
                <li key={membro.id}>
                  <LinhaDeMembro
                    id={membro.id}
                    nome={membro.nome}
                    apelido={membro.apelido}
                    avatarUrl={membro.fotoUrl}
                    nivel={membro.nivelNome}
                    ingressoTexto={membro.ingressoTexto}
                    frequenciaPercentual={membro.frequenciaPercentual}
                    situacaoFinanceira={membro.situacaoFinanceira}
                    onOpen={(id) => navigate(`/membros/${id}`)}
                  />
                </li>
              ))}
            </ul>

            {data.totalPages > 1 && (
              <nav
                aria-label="Paginação de membros"
                className="flex items-center justify-between gap-2 pt-1"
              >
                <Button
                  variant="secondary"
                  size="sm"
                  disabled={data.page <= 1 || isFetching}
                  onClick={() => handlePageChange(data.page - 1)}
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
                  onClick={() => handlePageChange(data.page + 1)}
                >
                  Próxima
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </nav>
            )}
          </>
        )}
      </div>
    </div>
  );
}
