import {
  Calendar,
  CalendarX2,
  CheckCircle2,
  Clock,
  FileText,
  MapPin,
  MoreHorizontal,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  AtalhoDoPerfil,
  Badge,
  Button,
  CabecalhoDeDetalhe,
  DetalheEventoSkeleton,
  EmptyState,
  ErrorState,
  KpiCard,
} from '../../components';
import { useDetalheDoEventoPage } from './hooks/useDetalheDoEventoPage';

export function DetalheDoEvento() {
  const {
    data,
    isLoading,
    isError,
    refetch,
    menuOpen,
    menuRef,
    toggleMenu,
    closeMenu,
    goToEventos,
    goToParticipantes,
  } = useDetalheDoEventoPage();

  if (isLoading) {
    return <DetalheEventoSkeleton />;
  }

  if (isError) {
    return (
      <div className="mx-auto max-w-[640px] py-4">
        <ErrorState
          titulo="Erro ao carregar evento"
          mensagem="Não foi possível consultar os detalhes e totais do evento."
          onRetry={() => refetch()}
        />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="mx-auto max-w-[640px] py-4">
        <EmptyState
          titulo="Evento não encontrado"
          descricao="O evento solicitado não existe ou não pertence a este motoclube."
          icone={<CalendarX2 className="h-5 w-5" />}
          acao={
            <Button variant="secondary" size="sm" onClick={goToEventos}>
              Voltar para eventos
            </Button>
          }
        />
      </div>
    );
  }

  const badgeTone =
    data.estado === 'cancelado'
      ? 'danger'
      : data.estado === 'publicado'
        ? 'positive'
        : 'neutral';

  const exibirResumoFaltas =
    data.estado === 'encerrado' || data.faltaramTotal > 0 || data.chamadaFinalizada;

  const justificadasTexto =
    data.justificadasAceitasTotal === 1
      ? '1 falta justificada, incluída'
      : `${data.justificadasAceitasTotal} faltas justificadas, incluídas`;
  const faltasDestinoTexto =
    data.faltaramTotal === 1 ? 'na 1 falta.' : `nas ${data.faltaramTotal} faltas.`;

  const subtituloParticipantes = data.chamadaFinalizada
    ? `Chamada concluída • ${data.totalRegistrosParticipacao} ${data.totalRegistrosParticipacao === 1 ? 'registro' : 'registros'}`
    : `${data.totalRegistrosParticipacao} ${data.totalRegistrosParticipacao === 1 ? 'participante na lista' : 'participantes na lista'}`;

  return (
    <div className="mx-auto max-w-[640px]">
      <div className="grid gap-3 px-3 pb-6">
        <CabecalhoDeDetalhe
          titulo="Detalhes do evento"
          voltarPara="/eventos"
          acao={
            <div ref={menuRef} className="relative z-20">
              <button
                type="button"
                onClick={toggleMenu}
                aria-label="Opções do evento"
                aria-expanded={menuOpen}
                aria-haspopup="menu"
                className="grid min-h-[44px] min-w-[44px] place-items-center rounded-[10px] text-[#111318] dark:text-[#f6f7f9] transition-colors hover:bg-[#eceef2] dark:hover:bg-[#292c32]"
              >
                <MoreHorizontal className="h-5 w-5" />
              </button>

              {menuOpen && (
                <div
                  role="menu"
                  className="absolute right-0 top-full mt-1 min-w-[155px] overflow-hidden rounded-[9px] border border-[#d7dbe3] dark:border-[#6b6d74] bg-white dark:bg-[#1a1c21] shadow-lg"
                >
                  <Link
                    role="menuitem"
                    to={`/eventos/${data.id}/editar`}
                    onClick={closeMenu}
                    className="block px-3.5 py-2.5 text-sm font-medium text-[#111318] dark:text-[#f6f7f9] no-underline transition-colors hover:bg-[#f5f6f8] dark:hover:bg-[#30343e]"
                  >
                    Editar evento
                  </Link>
                </div>
              )}
            </div>
          }
        />

        <div className="relative aspect-[2.45] w-full overflow-hidden rounded-[13px] border border-[#d7dbe3] dark:border-[#686b70] bg-gradient-to-br from-[#2b1a1d] via-[#1c1f26] to-[#131519]">
          {data.fotoUrl && (
            <img
              src={data.fotoUrl}
              alt={data.titulo}
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover"
            />
          )}
        </div>

        <div className="grid gap-1.5 px-1">
          <h2 className="flex flex-wrap items-center gap-2 text-xl font-bold leading-tight text-[#111318] dark:text-[#f6f7f9]">
            <span className="min-w-0 break-words">{data.titulo}</span>
            <Badge tone={badgeTone}>{data.estadoRotulo}</Badge>
          </h2>

          <div className="grid gap-1 text-sm text-[#5c6270] dark:text-[#bfc2cb]">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4 shrink-0 text-[#ff5263]" />
              <span>{data.dataTexto}</span>
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-[#ff5263]" />
              <span className="min-w-0 break-words">{data.local}</span>
            </span>
          </div>

          {data.descricao && (
            <p className="pt-0.5 text-sm leading-relaxed text-[#5c6270] dark:text-[#bfc2cb]">
              {data.descricao}
            </p>
          )}
        </div>

        <div
          aria-label="Indicadores de participação do evento"
          className="grid grid-cols-2 gap-2 tabular-nums"
        >
          <KpiCard
            layout="horizontal"
            dotTone="accent"
            icon={<Users className="h-5 w-5 text-[#111318] dark:text-[#f6f7f9]" />}
            value={data.esperadosTotal}
            label="Membros esperados"
          />

          <KpiCard
            layout="horizontal"
            dotTone="positive"
            icon={<CheckCircle2 className="h-5 w-5 text-[#15803d] dark:text-[#86de9b]" />}
            value={data.confirmadosTotal}
            label="Confirmaram"
          />

          <KpiCard
            layout="horizontal"
            dotTone="positive"
            icon={<CheckCircle2 className="h-5 w-5 text-[#15803d] dark:text-[#86de9b]" />}
            value={data.compareceramTotal}
            label="Compareceram"
          />

          <KpiCard
            layout="horizontal"
            dotTone={data.faltaramTotal > 0 ? 'warning' : 'neutral'}
            icon={<Clock className="h-5 w-5 text-[#b45309] dark:text-[#ffb35c]" />}
            value={data.faltaramTotal}
            label="Faltaram"
          />
        </div>

        {exibirResumoFaltas && (
          <p className="px-1 text-xs text-[#5c6270] dark:text-[#bfc2cb]">
            {justificadasTexto} {faltasDestinoTexto}
          </p>
        )}

        <div className="grid gap-2.5">
          <AtalhoDoPerfil
            titulo="Participantes e presença"
            descricao={subtituloParticipantes}
            destino={`/eventos/${data.id}/participantes`}
            icone={<Users className="h-4 w-4 text-[#dc2626] dark:text-[#ff6371]" />}
          />

          {data.justificativasPendentesTotal > 0 && (
            <AtalhoDoPerfil
              titulo={
                data.justificativasPendentesTotal === 1
                  ? '1 justificativa para analisar'
                  : `${data.justificativasPendentesTotal} justificativas para analisar`
              }
              descricao="A falta permanece até a decisão"
              destino={`/eventos/${data.id}/participantes?filtro=pendente`}
              icone={<FileText className="h-4 w-4 text-[#dc2626] dark:text-[#ff6371]" />}
            />
          )}
        </div>

        <Button type="button" variant="secondary" fullWidth onClick={goToParticipantes}>
          Ver lista de presença
        </Button>
      </div>
    </div>
  );
}
