import type {
  AssinaturaStatus,
  ComunicadoEstado,
  EstadoEvento,
  FaturaStatus,
  FormaRecebimento,
  OcorrenciaStatus,
  PresencaStatus,
  StatusAcesso,
} from './database';

export interface Pagina<T> {
  itens: T[];
  proximoCursor?: string;
  total?: number;
}

export interface NivelResumo {
  id: string;
  nome: string;
  ordem: number;
  totalMembros: number;
}

export interface OcorrenciaResumo {
  id: string;
  membroId: string;
  membroNome: string;
  membroApelido?: string | null;
  membroFotoUrl?: string | null;
  eventoTitulo?: string | null;
  data: string;
  categoria: string;
  status: OcorrenciaStatus;
  visivelMembro: boolean;
}

export interface ComunicadoResumo {
  id: string;
  titulo: string;
  resumo: string;
  capaUrl?: string | null;
  autorNome: string;
  publicadoEm: string | null;
  estado: ComunicadoEstado;
  fixado: boolean;
  publico: { todos: true } | { todos: false; nivelIds: string[]; rotulo: string };
}

export interface ComunicadoDetalhe extends ComunicadoResumo {
  conteudo: string;
  atualizadoEm: string;
}

export interface IdentidadeDoClube {
  motoclubeId: string;
  nome: string;
  cidade: string;
  uf: string;
  logoUrl: string | null;
  paletaId: 'vermelho' | 'azul' | 'laranja';
  corDestaqueHex: string | null;
  atualizadoEm: string;
}

export interface ResumoFrequencia {
  previstos: number;
  presencas: number;
  taxaPercentual: number | null;
}

export interface MotoclubeAdminResumo {
  id: string;
  nome: string;
  cidade: string;
  uf: string;
  gestorNome: string;
  gestorEmail: string;
  gestorTelefone: string;
  planoId: string;
  planoNome: string;
  valorContratadoCentavos: number;
  afiliadosAtivos: number;
  limiteContratado: number;
  assinaturaStatus: AssinaturaStatus;
  statusAcesso: StatusAcesso;
  proximaCobranca: string | null;
  faturaAtualId?: string;
}

export interface MotoclubeAdminDetalhe extends MotoclubeAdminResumo {
  faturaAtual?: {
    id: string;
    competencia: string;
    valorCentavos: number;
    vencimento: string;
    status: FaturaStatus;
  };
}

export interface IndicadoresAdmin {
  totalMotoclubes: number;
  recebidoPeriodoCentavos: number;
  faturasEmAbertoCentavos: number;
}

export interface PlanoAdminResumo {
  id: string;
  nome: string;
  precoMensalCentavos: number;
  limiteAfiliados: number;
  disponivel: boolean;
  versao: number;
  assinaturasVinculadas: number;
}

export interface CobrancaAdminResumo {
  id: string;
  motoclubeId: string;
  motoclubeNome: string;
  planoNome: string;
  competencia: string;
  valorCentavos: number;
  vencimento: string;
  status: FaturaStatus;
  gatewayId: string;
}

export interface CobrancaAdminDetalhe extends CobrancaAdminResumo {
  pagoEm?: string | null;
  meio?: string | null;
  referenciaPagamento?: string | null;
}

export interface ParticipacaoResumo {
  id: string;
  eventoId: string;
  eventoTitulo: string;
  eventoFotoUrl?: string | null;
  inicioEm: string;
  local: string;
  presenca: PresencaStatus | null;
  justificativaStatus?: 'pendente' | 'aceita' | 'nao_aceita' | null;
}

export interface ClubeCabecalhoResumo {
  motoclubeId: string;
  nome: string;
  local: string;
  logoUrl: string | null;
  gestorId: string;
  gestorNome: string;
  gestorPrimeiroNome: string;
  gestorFotoUrl: string | null;
}

export interface PainelGestorProximoEvento {
  id: string;
  titulo: string;
  categoria: string;
  fotoUrl: string | null;
  dataTexto: string;
  local: string;
  confirmadosTotal: number;
  confirmadosAvatares: Array<{ nome: string; fotoUrl?: string | null }>;
}

export interface PainelGestorDTO {
  clube: ClubeCabecalhoResumo;
  membrosAtivos: number;
  mensalidadesPendentes: number;
  frequenciaGeralPercentual: number | null;
  proximoEvento: PainelGestorProximoEvento | null;
}

export interface MembrosQueryParams {
  motoclubeId: string;
  busca?: string;
  nivelId?: string;
  page?: number;
  pageSize?: number;
}

export interface MembroListaItemDTO {
  id: string;
  nome: string;
  apelido: string | null;
  fotoUrl: string | null;
  nivelId: string;
  nivelNome: string;
  entradaEm: string;
  ingressoTexto: string;
  status: 'ativo' | 'inativo' | 'suspenso';
  frequenciaPercentual: number | null;
  situacaoFinanceira: 'em_dia' | 'em_atraso';
}

export interface MembrosQueryResult {
  clube: ClubeCabecalhoResumo;
  itens: MembroListaItemDTO[];
  totalFiltrado: number;
  totalGeral: number;
  page: number;
  pageSize: number;
  totalPages: number;
  contagensPorNivel: Record<string, number>;
}

export interface PerfilMembroDTO {
  clube: ClubeCabecalhoResumo;
  id: string;
  usuarioId: string;
  nome: string;
  apelido: string | null;
  email: string;
  telefone: string;
  fotoUrl: string | null;
  nivelId: string;
  nivelNome: string;
  entradaEm: string;
  ingressoTexto: string;
  status: 'ativo' | 'inativo' | 'suspenso';
  vinculoStatus: 'ativo' | 'inativo' | 'pendente';
  frequenciaPercentual: number | null;
  eventosElegiveis: number;
  presencasTotal: number;
  situacaoFinanceira: 'em_dia' | 'em_atraso';
  mensalidadeStatusTexto: 'Em dia' | 'Em atraso';
  mensalidadesEmAtraso: number;
  ocorrenciasTotal: number;
  ocorrenciasEmAnalise: number;
}

export interface CadastrarMembroInput {
  motoclubeId: string;
  gestorId: string;
  nome: string;
  apelido?: string;
  email: string;
  telefone: string;
  entradaEm: string;
  nivelId: string;
  status: 'ativo' | 'inativo';
  fotoUrl?: string | null;
}

export interface CadastrarMembroResult {
  membroId: string;
  usuarioId: string;
  vinculoId: string;
  historicoNivelId: string;
}

export type PeriodoResumoTipo = 'rolling' | '2026' | '2025' | 'custom';

export interface PeriodoFiltroInput {
  periodo: PeriodoResumoTipo;
  de?: string;
  ate?: string;
}

export interface ResumoEventosPeriodoDTO {
  eventosTotal: number;
  presencasTotal: number;
  faltasTotal: number;
  justificadasTotal: number;
  taxaPercentual: number | null;
}

export interface ResumoMensalidadesPeriodoDTO {
  total: number;
  pagasNoPrazo: number;
  pagasComAtraso: number;
  vencidas: number;
  aVencer: number;
}

export interface MudancaNivelTimelineDTO {
  id: string;
  dataTexto: string;
  descricao: string;
  responsavel?: string;
}

export interface NivelOpcaoDTO {
  id: string;
  nome: string;
  ordem: number;
}

export interface NivelEHistoricoDTO {
  clube: ClubeCabecalhoResumo;
  membroId: string;
  membroNome: string;
  membroApelido: string | null;
  membroFotoUrl: string | null;
  membroStatus: 'ativo' | 'inativo' | 'suspenso';
  nivelAtualId: string;
  nivelAtualNome: string;
  periodoRotulo: string;
  periodoInicio: string;
  periodoFim: string;
  eventosPeriodo: ResumoEventosPeriodoDTO;
  mensalidadesPeriodo: ResumoMensalidadesPeriodoDTO;
  historico: MudancaNivelTimelineDTO[];
  niveisDisponiveis: NivelOpcaoDTO[];
}

export interface AlterarNivelInput {
  motoclubeId: string;
  membroId: string;
  gestorId: string;
  nivelAtualEsperadoId: string;
  novoNivelId: string;
}

export interface AlterarNivelResult {
  membroId: string;
  nivelAnteriorId: string;
  novoNivelId: string;
  novoNivelNome: string;
  historicoId: string;
}

export interface EditarMembroDetalheDTO {
  clube: ClubeCabecalhoResumo;
  id: string;
  usuarioId: string;
  nome: string;
  apelido: string | null;
  email: string;
  telefone: string;
  fotoUrl: string | null;
  entradaEm: string;
  nivelId: string;
  nivelNome: string;
  status: 'ativo' | 'inativo' | 'suspenso';
  cadastradoEm: string;
}

export interface AtualizarMembroInput {
  motoclubeId: string;
  membroId: string;
  nome: string;
  apelido?: string;
  email: string;
  telefone: string;
  entradaEm: string;
  status: 'ativo' | 'inativo' | 'suspenso';
  fotoUrl?: string | null;
}

export interface AtualizarMembroResult {
  membroId: string;
  usuarioId: string;
  nome: string;
  email: string;
  status: 'ativo' | 'inativo' | 'suspenso';
}

export type FinanceiroSituacaoFiltro = 'all' | 'paid' | 'soon' | 'late';

export interface FinanceiroQueryParams {
  motoclubeId: string;
  competencia?: string;
  filtro?: FinanceiroSituacaoFiltro;
  membroId?: string;
  page?: number;
  pageSize?: number;
}

export interface MensalidadeCompetenciaItemDTO {
  id: string;
  membroId: string;
  membroNome: string;
  membroApelido: string | null;
  membroFotoUrl: string | null;
  competencia: string;
  vencimento: string;
  vencimentoTexto: string;
  valorCentavos: number;
  pagoCentavos: number;
  saldoCentavos: number;
  situacao: 'em_dia' | 'em_atraso' | 'a_vencer';
}

export interface FinanceiroCompetenciaDTO {
  clube: ClubeCabecalhoResumo;
  competencia: string;
  competenciaRotulo: string;
  competenciasDisponiveis: string[];
  canPrev: boolean;
  canNext: boolean;
  prevCompetencia: string | null;
  nextCompetencia: string | null;
  membroFiltroId: string | null;
  membroFiltroNome: string | null;
  previstoCentavos: number;
  recebidoCentavos: number;
  pendenteCentavos: number;
  emDiaCount: number;
  pendentesCount: number;
  contagensPorSituacao: {
    all: number;
    paid: number;
    soon: number;
    late: number;
  };
  itens: MensalidadeCompetenciaItemDTO[];
  totalFiltrado: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export type PeriodoFrequenciaTipo = 'quarter' | 'month' | 'custom';
export type PresencaFiltroTipo = 'all' | 'present' | 'absent';

export interface FrequenciaMembroParams {
  motoclubeId: string;
  membroId: string;
  periodo: PeriodoFrequenciaTipo;
  de?: string;
  ate?: string;
  presencaFiltro?: PresencaFiltroTipo;
  limit?: number;
}

export interface ParticipacaoEventoItemDTO {
  id: string;
  eventoId: string;
  eventoTitulo: string;
  eventoFotoUrl: string | null;
  dataLocal: string;
  dataTexto: string;
  local: string;
  presenca: 'presente' | 'faltou';
  justificativaStatus: 'pendente' | 'aceita' | 'nao_aceita' | null;
}

export interface FrequenciaMembroDTO {
  clube: ClubeCabecalhoResumo;
  membroId: string;
  membroNome: string;
  membroApelido: string | null;
  membroFotoUrl: string | null;
  nivelNome: string;
  ingressoTexto: string;
  periodoInicio: string;
  periodoFim: string;
  periodoRotulo: string;
  previstos: number;
  presencas: number;
  taxaPercentual: number | null;
  contagensPorPresenca: {
    all: number;
    present: number;
    absent: number;
  };
  itens: ParticipacaoEventoItemDTO[];
  totalFiltrado: number;
}

export type EventosAbaTipo = 'upcoming' | 'past';

export interface EventosQueryParams {
  motoclubeId: string;
  aba: EventosAbaTipo;
  de?: string;
  ate?: string;
  page?: number;
  pageSize?: number;
}

export interface EventoListaItemDTO {
  id: string;
  titulo: string;
  categoria: string;
  fotoUrl: string | null;
  dataLocal: string;
  dataTexto: string;
  local: string;
  estado: EstadoEvento;
  confirmadosTotal: number;
  confirmadosAvatares: Array<{ nome: string; fotoUrl?: string | null }>;
}

export interface EventosQueryResult {
  clube: ClubeCabecalhoResumo;
  aba: EventosAbaTipo;
  periodoPadrao: boolean;
  periodoInicio: string;
  periodoFim: string;
  periodoRotulo: string;
  contagensPorAba: {
    upcoming: number;
    past: number;
  };
  itens: EventoListaItemDTO[];
  totalFiltrado: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface CriarEventoContextoDTO {
  clube: ClubeCabecalhoResumo;
  hojeLocal: string;
  niveis: Array<NivelOpcaoDTO & { totalMembrosAtivos: number }>;
  totalMembrosAtivos: number;
  tiposDisponiveis: string[];
}

export interface CriarEventoInput {
  motoclubeId: string;
  titulo: string;
  tipo: string;
  data: string;
  horario: string;
  local: string;
  descricao: string;
  fotoUrl?: string | null;
  todosNiveis: boolean;
  nivelIds?: string[];
}

export interface CriarEventoResult {
  eventoId: string;
  titulo: string;
  inicioEm: string;
  participacoesCriadas: number;
}

export interface MensalidadePendenteOptionDTO {
  id: string;
  membroId: string;
  membroNome: string;
  membroApelido: string | null;
  membroFotoUrl: string | null;
  competencia: string;
  competenciaRotulo: string;
  vencimento: string;
  vencimentoTexto: string;
  valorCentavos: number;
  pagoCentavos: number;
  saldoCentavos: number;
  situacao: 'em_atraso' | 'a_vencer';
}

export interface RegistrarRecebimentoContextoDTO {
  clube: ClubeCabecalhoResumo;
  hojeLocal: string;
  selecionada: MensalidadePendenteOptionDTO | null;
  opcoesPendentes: MensalidadePendenteOptionDTO[];
  mensalidadeInformadaQuitada: {
    membroNome: string;
    competenciaRotulo: string;
  } | null;
}

export interface RegistrarRecebimentoInput {
  motoclubeId: string;
  gestorId: string;
  mensalidadeId: string;
  valorCentavos: number;
  saldoEsperadoCentavos: number;
  recebidoEm: string;
  forma: FormaRecebimento;
  observacao?: string;
}

export interface RegistrarRecebimentoResult {
  recebimentoId: string;
  mensalidadeId: string;
  membroId: string;
  membroNome: string;
  valorRecebidoCentavos: number;
  saldoRestanteCentavos: number;
  quitada: boolean;
}

export interface DetalheEventoDTO {
  clube: ClubeCabecalhoResumo;
  id: string;
  titulo: string;
  descricao: string;
  fotoUrl: string | null;
  categoria: string;
  estado: EstadoEvento;
  estadoRotulo: string;
  dataTexto: string;
  local: string;
  chamadaFinalizada: boolean;
  esperadosTotal: number;
  confirmadosTotal: number;
  compareceramTotal: number;
  faltaramTotal: number;
  justificadasAceitasTotal: number;
  justificativasPendentesTotal: number;
  totalRegistrosParticipacao: number;
}

