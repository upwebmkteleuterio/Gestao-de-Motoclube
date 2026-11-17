export type StatusAcesso = 'ativo' | 'suspenso';
export type PapelVinculo = 'gestor' | 'membro' | 'superadmin';
export type StatusVinculo = 'ativo' | 'inativo' | 'pendente';
export type StatusMembro = 'ativo' | 'inativo' | 'suspenso';
export type EstadoEvento = 'rascunho' | 'publicado' | 'encerrado' | 'cancelado';
export type StatusConfirmacao = 'pendente' | 'confirmada' | 'cancelada';
export type PresencaStatus = 'presente' | 'faltou';
export type JustificativaStatus = 'pendente' | 'aceita' | 'nao_aceita';
export type JustificativaOrigem = 'membro' | 'gestor';
export type OcorrenciaStatus = 'em_analise' | 'concluida';
export type ComunicadoEstado = 'rascunho' | 'publicado' | 'arquivado';
export type FormaRecebimento = 'dinheiro' | 'pix' | 'transferencia' | 'cartao' | 'outro';
export type AssinaturaStatus = 'ativa' | 'em_atraso' | 'pendente' | 'cancelada';
export type FaturaStatus = 'pago' | 'em_aberto' | 'vencida' | 'cancelada';
export type PagamentoSaasStatus = 'confirmado' | 'pendente' | 'falhou' | 'estornado';

export interface Motoclube {
  id: string;
  nome: string;
  gestor_usuario_id: string;
  telefone: string;
  cidade: string;
  uf: string;
  status_acesso: StatusAcesso;
  excluido_em: string | null;
}

export interface Usuario {
  id: string;
  nome: string;
  email: string;
  foto_url: string | null;
}

export interface Vinculo {
  id: string;
  usuario_id: string;
  motoclube_id: string;
  membro_id: string | null;
  papel: PapelVinculo;
  status: StatusVinculo;
}

export interface IdentidadeMotoclube {
  id: string;
  motoclube_id: string;
  logo_url: string | null;
  paleta_id: 'vermelho' | 'azul' | 'laranja';
  cor_destaque_hex: string | null;
  atualizado_em: string;
}

export interface Membro {
  id: string;
  motoclube_id: string;
  usuario_id: string;
  nome: string;
  apelido: string | null;
  foto_url: string | null;
  entrada_em: string;
  nivel_id: string;
  status: StatusMembro;
  telefone: string;
  cadastrado_em: string;
}

export interface Nivel {
  id: string;
  motoclube_id: string;
  nome: string;
  ordem: number;
}

export interface HistoricoNivel {
  id: string;
  motoclube_id: string;
  membro_id: string;
  nivel_anterior: string | null;
  nivel_novo: string;
  alterado_em: string;
  gestor_id: string;
}

export interface PublicoEvento {
  todos: boolean;
  nivel_ids?: string[];
}

export interface Evento {
  id: string;
  motoclube_id: string;
  titulo: string;
  descricao: string;
  foto_url: string | null;
  tipo: string;
  inicio_em: string;
  local: string;
  estado: EstadoEvento;
  publico: PublicoEvento;
  chamada_finalizada_em: string | null;
}

export interface Participacao {
  id: string;
  motoclube_id: string;
  evento_id: string;
  membro_id: string;
  esperado: boolean;
  confirmacao: StatusConfirmacao;
  confirmacao_em: string | null;
  presenca: PresencaStatus | null;
  registrado_por: string | null;
  registrado_em: string | null;
}

export interface Justificativa {
  id: string;
  participacao_id: string;
  descricao: string;
  enviada_em: string;
  status: JustificativaStatus;
  analisada_por: string | null;
  analisada_em: string | null;
  observacao_decisao: string | null;
  origem: JustificativaOrigem;
  criada_por: string;
}

export interface Ocorrencia {
  id: string;
  motoclube_id: string;
  membro_id: string;
  evento_id: string | null;
  data: string;
  categoria: string;
  descricao: string;
  visivel_membro: boolean;
  observacao_interna: string | null;
  status: OcorrenciaStatus;
  decisao: string | null;
  gestor_id: string;
}

export interface Comunicado {
  id: string;
  motoclube_id: string;
  titulo: string;
  conteudo: string;
  capa_url: string | null;
  autor_id: string;
  estado: ComunicadoEstado;
  fixado: boolean;
  publicado_em: string | null;
  atualizado_em: string;
}

export interface ComunicadoPublico {
  id: string;
  comunicado_id: string;
  todos: boolean;
  nivel_id: string | null;
}

export interface Mensalidade {
  id: string;
  motoclube_id: string;
  membro_id: string;
  competencia: string;
  valor_centavos: number;
  vencimento: string;
  cancelada_em: string | null;
}

export interface Recebimento {
  id: string;
  motoclube_id: string;
  mensalidade_id: string;
  valor_centavos: number;
  recebido_em: string;
  forma: FormaRecebimento;
  observacao: string | null;
  gestor_id: string;
  estornado_em: string | null;
}

export interface PoliticaMensalidade {
  id: string;
  motoclube_id: string;
  valor_centavos: number;
  dia_vencimento: number;
  inicio_competencia: string;
}

export interface PlanoSaas {
  id: string;
  nome: string;
  preco_mensal_centavos: number;
  limite_afiliados: number;
  disponivel: boolean;
  versao: number;
}

export interface AssinaturaSaas {
  id: string;
  motoclube_id: string;
  plano_id: string;
  versao_preco: number;
  valor_contratado_centavos: number;
  limite_contratado: number;
  periodicidade: 'mensal' | 'anual';
  status: AssinaturaStatus;
  periodo_inicio: string;
  periodo_fim: string;
  proxima_cobranca: string | null;
  gateway_id: string;
}

export interface FaturaSaas {
  id: string;
  assinatura_id: string;
  competencia: string;
  valor_centavos: number;
  moeda: string;
  vencimento: string;
  status: FaturaStatus;
  gateway_id: string;
}

export interface PagamentoSaas {
  id: string;
  fatura_id: string;
  valor_centavos: number;
  status: PagamentoSaasStatus;
  pago_em: string | null;
  meio: string;
  gateway_id: string;
}

export interface EventoGateway {
  id: string;
  external_id: string;
  tipo: string;
  recebido_em: string;
  processado_em: string | null;
  resultado: string;
}

export interface Auditoria {
  id: string;
  motoclube_id: string;
  entidade: string;
  registro_id: string;
  antes: Record<string, unknown> | null;
  depois: Record<string, unknown> | null;
  autor_id: string;
  criado_em: string;
  motivo: string | null;
}

export interface AuditoriaAcesso {
  id: string;
  motoclube_id: string;
  ator_id: string;
  motivo: string;
  antes: Record<string, unknown>;
  depois: Record<string, unknown>;
  criado_em: string;
}
