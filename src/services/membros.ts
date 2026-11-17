import { membrosMock } from '../mocks';
import type {
  AlterarNivelInput,
  AlterarNivelResult,
  AtualizarMembroInput,
  AtualizarMembroResult,
  CadastrarMembroInput,
  CadastrarMembroResult,
  EditarMembroDetalheDTO,
  Membro,
  MembroListaItemDTO,
  MembrosQueryParams,
  MembrosQueryResult,
  NivelEHistoricoDTO,
  PerfilMembroDTO,
  PeriodoFiltroInput,
} from '../types';
import {
  buildClubeCabecalho,
  calcularFinanceiroMembro,
  calcularFrequenciaMembro,
  calcularResumoNivelPeriodo,
  formatarDataTimeline,
  formatarIngresso,
  getHojeLocalCampoGrande,
  mapPagamentosPorMensalidade,
  normalizeText,
  resolvePeriodoDatas,
} from './calculos';
import { eventosService } from './eventos';
import { historicoNiveisService } from './historicoNiveis';
import { identidadeMotoclubeService } from './identidadeMotoclube';
import { justificativasService } from './justificativas';
import { mensalidadesService } from './mensalidades';
import { motoclubesService } from './motoclubes';
import { niveisService } from './niveis';
import { ocorrenciasService } from './ocorrencias';
import { participacoesService } from './participacoes';
import { recebimentosService } from './recebimentos';
import { createSimulatedRepository } from './repository';
import { usuariosService } from './usuarios';
import { vinculosService } from './vinculos';

export const membrosService = createSimulatedRepository<Membro>('membros', membrosMock);

export class ServiceValidationError extends Error {
  fieldErrors: Record<string, string>;

  constructor(message: string, fieldErrors: Record<string, string> = {}) {
    super(message);
    this.name = 'ServiceValidationError';
    this.fieldErrors = fieldErrors;
  }
}

export class ServiceConcurrencyError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ServiceConcurrencyError';
  }
}

export async function queryMembros({
  motoclubeId,
  busca = '',
  nivelId = '',
  page = 1,
  pageSize = 5,
}: MembrosQueryParams): Promise<MembrosQueryResult> {
  const [
    clubs,
    identities,
    users,
    members,
    niveis,
    eventos,
    participacoes,
    mensalidades,
    recebimentos,
  ] = await Promise.all([
    motoclubesService.getAll(),
    identidadeMotoclubeService.getAll(),
    usuariosService.getAll(),
    membrosService.getAll(),
    niveisService.getAll(),
    eventosService.getAll(),
    participacoesService.getAll(),
    mensalidadesService.getAll(),
    recebimentosService.getAll(),
  ]);

  const clube = buildClubeCabecalho(motoclubeId, clubs, identities, users);
  const niveisDoClube = niveis.filter((n) => n.motoclube_id === clube.motoclubeId);
  const nivelNomePorId = new Map(niveisDoClube.map((n) => [n.id, n.nome]));

  const membrosDoClube = members.filter((m) => m.motoclube_id === clube.motoclubeId);
  const totalGeral = membrosDoClube.length;

  // Contagens sempre sobre o conjunto completo do clube (antes de filtrar/paginar)
  const contagensPorNivel: Record<string, number> = {};
  for (const n of niveisDoClube) {
    contagensPorNivel[n.id] = 0;
  }
  for (const m of membrosDoClube) {
    contagensPorNivel[m.nivel_id] = (contagensPorNivel[m.nivel_id] ?? 0) + 1;
  }

  const termo = normalizeText(busca);
  const nivelFiltro = nivelId.trim();

  const filtrados = membrosDoClube
    .filter((m) => {
      if (nivelFiltro && m.nivel_id !== nivelFiltro) return false;
      if (termo) {
        const alvo = normalizeText(`${m.nome} ${m.apelido ?? ''}`);
        if (!alvo.includes(termo)) return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (a.status !== b.status) {
        if (a.status === 'ativo') return -1;
        if (b.status === 'ativo') return 1;
      }
      return a.nome.localeCompare(b.nome, 'pt-BR');
    });

  const totalFiltrado = filtrados.length;
  const safePageSize = Math.max(1, pageSize);
  const totalPages = Math.max(1, Math.ceil(totalFiltrado / safePageSize));
  const safePage = Math.max(1, Math.min(page, totalPages));
  const start = (safePage - 1) * safePageSize;
  const paginados = filtrados.slice(start, start + safePageSize);

  const hojeLocal = getHojeLocalCampoGrande();
  const pagosPorMensalidade = mapPagamentosPorMensalidade(clube.motoclubeId, recebimentos);

  const itens: MembroListaItemDTO[] = paginados.map((m) => {
    const freq = calcularFrequenciaMembro(m.id, clube.motoclubeId, eventos, participacoes);
    const fin = calcularFinanceiroMembro(
      m.id,
      clube.motoclubeId,
      mensalidades,
      pagosPorMensalidade,
      hojeLocal,
    );
    return {
      id: m.id,
      nome: m.nome,
      apelido: m.apelido,
      fotoUrl: m.foto_url,
      nivelId: m.nivel_id,
      nivelNome: nivelNomePorId.get(m.nivel_id) ?? 'Sem nível',
      entradaEm: m.entrada_em,
      ingressoTexto: formatarIngresso(m.entrada_em),
      status: m.status,
      frequenciaPercentual: freq.taxaPercentual,
      situacaoFinanceira: fin.situacao,
    };
  });

  return {
    clube,
    itens,
    totalFiltrado,
    totalGeral,
    page: safePage,
    pageSize: safePageSize,
    totalPages,
    contagensPorNivel,
  };
}

export async function getPerfilMembro(
  motoclubeId: string,
  membroId: string,
): Promise<PerfilMembroDTO | null> {
  const [
    clubs,
    identities,
    users,
    members,
    niveis,
    vinculos,
    eventos,
    participacoes,
    mensalidades,
    recebimentos,
    ocorrencias,
  ] = await Promise.all([
    motoclubesService.getAll(),
    identidadeMotoclubeService.getAll(),
    usuariosService.getAll(),
    membrosService.getAll(),
    niveisService.getAll(),
    vinculosService.getAll(),
    eventosService.getAll(),
    participacoesService.getAll(),
    mensalidadesService.getAll(),
    recebimentosService.getAll(),
    ocorrenciasService.getAll(),
  ]);

  const clube = buildClubeCabecalho(motoclubeId, clubs, identities, users);
  const membro = members.find(
    (m) => m.id === membroId && m.motoclube_id === clube.motoclubeId,
  );
  if (!membro) return null;

  const nivel = niveis.find(
    (n) => n.id === membro.nivel_id && n.motoclube_id === clube.motoclubeId,
  );
  const usuario = users.find((u) => u.id === membro.usuario_id);
  const vinculo = vinculos.find(
    (v) => v.motoclube_id === clube.motoclubeId && v.membro_id === membro.id,
  );

  const freq = calcularFrequenciaMembro(membro.id, clube.motoclubeId, eventos, participacoes);
  const hojeLocal = getHojeLocalCampoGrande();
  const pagosPorMensalidade = mapPagamentosPorMensalidade(clube.motoclubeId, recebimentos);
  const fin = calcularFinanceiroMembro(
    membro.id,
    clube.motoclubeId,
    mensalidades,
    pagosPorMensalidade,
    hojeLocal,
  );

  const ocorrenciasDoMembro = ocorrencias.filter(
    (o) => o.motoclube_id === clube.motoclubeId && o.membro_id === membro.id,
  );

  return {
    clube,
    id: membro.id,
    usuarioId: membro.usuario_id,
    nome: membro.nome,
    apelido: membro.apelido,
    email: usuario?.email ?? '—',
    telefone: membro.telefone,
    fotoUrl: membro.foto_url,
    nivelId: membro.nivel_id,
    nivelNome: nivel?.nome ?? 'Sem nível',
    entradaEm: membro.entrada_em,
    ingressoTexto: formatarIngresso(membro.entrada_em),
    status: membro.status,
    vinculoStatus: vinculo?.status ?? 'ativo',
    frequenciaPercentual: freq.taxaPercentual,
    eventosElegiveis: freq.previstos,
    presencasTotal: freq.presencas,
    situacaoFinanceira: fin.situacao,
    mensalidadeStatusTexto: fin.situacao === 'em_atraso' ? 'Em atraso' : 'Em dia',
    mensalidadesEmAtraso: fin.emAtrasoCount,
    ocorrenciasTotal: ocorrenciasDoMembro.length,
    ocorrenciasEmAnalise: ocorrenciasDoMembro.filter((o) => o.status === 'em_analise').length,
  };
}

export async function cadastrarMembroCompleto(
  input: CadastrarMembroInput,
): Promise<CadastrarMembroResult> {
  const nome = input.nome.trim();
  const apelido = input.apelido?.trim() ? input.apelido.trim() : null;
  const email = input.email.trim().toLowerCase();
  const telefone = input.telefone.trim();
  const entradaEm = input.entradaEm.trim();
  const nivelId = input.nivelId.trim();

  const fieldErrors: Record<string, string> = {};
  if (nome.length < 3) {
    fieldErrors.nome = 'Informe o nome completo com pelo menos 3 caracteres.';
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fieldErrors.email = 'Informe um e-mail de acesso válido.';
  }
  if (telefone.replace(/\D/g, '').length < 10) {
    fieldErrors.telefone = 'Informe um telefone válido com DDD.';
  }
  const hojeLocal = getHojeLocalCampoGrande();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(entradaEm)) {
    fieldErrors.entradaEm = 'Informe a data real de entrada no clube.';
  } else if (entradaEm > hojeLocal) {
    fieldErrors.entradaEm = 'A data de entrada no clube não pode ser futura.';
  }
  if (!nivelId) {
    fieldErrors.nivelId = 'Selecione o nível inicial do membro.';
  }

  if (Object.keys(fieldErrors).length > 0) {
    throw new ServiceValidationError('Verifique os campos destacados.', fieldErrors);
  }

  const [niveis, usuarios, vinculos] = await Promise.all([
    niveisService.getAll(),
    usuariosService.getAll(),
    vinculosService.getAll(),
  ]);

  const nivelValido = niveis.find(
    (n) => n.id === nivelId && n.motoclube_id === input.motoclubeId,
  );
  if (!nivelValido) {
    throw new ServiceValidationError('Nível inválido para este motoclube.', {
      nivelId: 'O nível selecionado não pertence ao clube.',
    });
  }

  const usuarioExistente = usuarios.find((u) => u.email.trim().toLowerCase() === email);
  if (usuarioExistente) {
    const vinculoExistente = vinculos.find(
      (v) =>
        v.usuario_id === usuarioExistente.id &&
        v.motoclube_id === input.motoclubeId &&
        v.status !== 'inativo',
    );
    if (vinculoExistente) {
      throw new ServiceValidationError(
        'Já existe um vínculo ativo para este e-mail neste clube.',
        {
          email: 'Este e-mail já possui acesso vinculado a este motoclube.',
        },
      );
    }
  }

  const usuario = usuarioExistente
    ? usuarioExistente
    : await usuariosService.create({
        nome,
        email,
        foto_url: input.fotoUrl ?? null,
      });

  const nowIso = new Date().toISOString();
  const alteradoEmIso = entradaEm === hojeLocal ? nowIso : `${entradaEm}T12:00:00Z`;

  const membro = await membrosService.create({
    motoclube_id: input.motoclubeId,
    usuario_id: usuario.id,
    nome,
    apelido,
    foto_url: input.fotoUrl ?? null,
    entrada_em: entradaEm,
    nivel_id: nivelId,
    status: input.status,
    telefone,
    cadastrado_em: nowIso,
  });

  const vinculo = await vinculosService.create({
    usuario_id: usuario.id,
    motoclube_id: input.motoclubeId,
    membro_id: membro.id,
    papel: 'membro',
    status: input.status === 'ativo' ? 'ativo' : 'inativo',
  });

  const historico = await historicoNiveisService.create({
    motoclube_id: input.motoclubeId,
    membro_id: membro.id,
    nivel_anterior: null,
    nivel_novo: nivelId,
    alterado_em: alteradoEmIso,
    gestor_id: input.gestorId,
  });

  return {
    membroId: membro.id,
    usuarioId: usuario.id,
    vinculoId: vinculo.id,
    historicoNivelId: historico.id,
  };
}

export async function getNivelEHistoricoMembro(
  motoclubeId: string,
  membroId: string,
  filtro: PeriodoFiltroInput,
): Promise<NivelEHistoricoDTO | null> {
  const [
    clubs,
    identities,
    users,
    members,
    niveis,
    historicoNiveis,
    eventos,
    participacoes,
    justificativas,
    mensalidades,
    recebimentos,
  ] = await Promise.all([
    motoclubesService.getAll(),
    identidadeMotoclubeService.getAll(),
    usuariosService.getAll(),
    membrosService.getAll(),
    niveisService.getAll(),
    historicoNiveisService.getAll(),
    eventosService.getAll(),
    participacoesService.getAll(),
    justificativasService.getAll(),
    mensalidadesService.getAll(),
    recebimentosService.getAll(),
  ]);

  const clube = buildClubeCabecalho(motoclubeId, clubs, identities, users);
  const membro = members.find(
    (m) => m.id === membroId && m.motoclube_id === clube.motoclubeId,
  );
  if (!membro) return null;

  const niveisDoClube = niveis
    .filter((n) => n.motoclube_id === clube.motoclubeId)
    .sort((a, b) => a.ordem - b.ordem);
  const nivelPorId = new Map(niveisDoClube.map((n) => [n.id, n]));
  const nivelAtual = nivelPorId.get(membro.nivel_id);

  const usuarioPorId = new Map(users.map((u) => [u.id, u]));

  const hojeLocal = getHojeLocalCampoGrande();
  const { inicio, fim, fimExclusivo, rotulo } = resolvePeriodoDatas(filtro, hojeLocal);

  const { eventosPeriodo, mensalidadesPeriodo } = calcularResumoNivelPeriodo({
    membroId: membro.id,
    motoclubeId: clube.motoclubeId,
    inicio,
    fimExclusivo,
    hojeLocal,
    eventos,
    participacoes,
    justificativas,
    mensalidades,
    recebimentos,
  });

  // Histórico completo sem corte do filtro de período
  const historico = historicoNiveis
    .filter((h) => h.motoclube_id === clube.motoclubeId && h.membro_id === membro.id)
    .sort((a, b) => b.alterado_em.localeCompare(a.alterado_em))
    .map((h) => {
      const novoNome = nivelPorId.get(h.nivel_novo)?.nome ?? 'Nível removido';
      if (h.nivel_anterior === null) {
        return {
          id: h.id,
          dataTexto: formatarDataTimeline(h.alterado_em),
          descricao: `Nível inicial: ${novoNome}`,
        };
      }
      const anteriorNome = nivelPorId.get(h.nivel_anterior)?.nome ?? 'Nível anterior';
      const gestorNome = usuarioPorId.get(h.gestor_id)?.nome ?? 'Gestor';
      const gestorPrimeiroNome = gestorNome.trim().split(/\s+/)[0] || 'Gestor';
      return {
        id: h.id,
        dataTexto: formatarDataTimeline(h.alterado_em),
        descricao: `${anteriorNome} → ${novoNome}`,
        responsavel: gestorPrimeiroNome,
      };
    });

  const niveisDisponiveis = niveisDoClube
    .filter((n) => n.id !== membro.nivel_id)
    .map((n) => ({
      id: n.id,
      nome: n.nome,
      ordem: n.ordem,
    }));

  return {
    clube,
    membroId: membro.id,
    membroNome: membro.nome,
    membroApelido: membro.apelido,
    membroFotoUrl: membro.foto_url,
    membroStatus: membro.status,
    nivelAtualId: membro.nivel_id,
    nivelAtualNome: nivelAtual?.nome ?? 'Sem nível',
    periodoRotulo: rotulo,
    periodoInicio: inicio,
    periodoFim: fim,
    eventosPeriodo,
    mensalidadesPeriodo,
    historico,
    niveisDisponiveis,
  };
}

export async function alterarNivelMembro(
  input: AlterarNivelInput,
): Promise<AlterarNivelResult> {
  const novoNivelId = input.novoNivelId.trim();
  if (!novoNivelId) {
    throw new ServiceValidationError('Selecione o novo nível.', {
      novoNivelId: 'Escolha um nível de destino válido.',
    });
  }

  const [membro, niveis, historicoAtual] = await Promise.all([
    membrosService.getById(input.membroId),
    niveisService.getAll(),
    historicoNiveisService.getAll(),
  ]);

  if (!membro || membro.motoclube_id !== input.motoclubeId) {
    throw new ServiceValidationError('Membro não encontrado neste motoclube.');
  }

  // Proteção contra alteração concorrente
  if (membro.nivel_id !== input.nivelAtualEsperadoId) {
    throw new ServiceConcurrencyError(
      'O nível atual deste membro foi alterado recentemente. Recarregue os dados antes de confirmar.',
    );
  }

  const nivelDestino = niveis.find(
    (n) => n.id === novoNivelId && n.motoclube_id === input.motoclubeId,
  );
  if (!nivelDestino) {
    throw new ServiceValidationError('O nível selecionado não pertence a este motoclube.', {
      novoNivelId: 'Selecione um nível válido do clube.',
    });
  }

  if (nivelDestino.id === membro.nivel_id) {
    throw new ServiceValidationError('O membro já se encontra neste nível.', {
      novoNivelId: 'Escolha um nível diferente do atual.',
    });
  }

  // Evita gravação duplicada caso já exista transição idêntica nos últimos segundos
  const agoraMs = Date.now();
  const duplicadoRecente = historicoAtual.some(
    (h) =>
      h.motoclube_id === input.motoclubeId &&
      h.membro_id === membro.id &&
      h.nivel_anterior === membro.nivel_id &&
      h.nivel_novo === nivelDestino.id &&
      Math.abs(agoraMs - new Date(h.alterado_em).getTime()) < 5000,
  );
  if (duplicadoRecente) {
    throw new ServiceConcurrencyError(
      'Esta mudança de nível acabou de ser registrada. Os dados serão atualizados.',
    );
  }

  const nivelAnteriorId = membro.nivel_id;

  await membrosService.update(membro.id, {
    nivel_id: nivelDestino.id,
  });

  const historico = await historicoNiveisService.create({
    motoclube_id: input.motoclubeId,
    membro_id: membro.id,
    nivel_anterior: nivelAnteriorId,
    nivel_novo: nivelDestino.id,
    alterado_em: new Date().toISOString(),
    gestor_id: input.gestorId,
  });

  return {
    membroId: membro.id,
    nivelAnteriorId,
    novoNivelId: nivelDestino.id,
    novoNivelNome: nivelDestino.nome,
    historicoId: historico.id,
  };
}

export async function getMembroParaEdicao(
  motoclubeId: string,
  membroId: string,
): Promise<EditarMembroDetalheDTO | null> {
  const [clubs, identities, users, members, niveis] = await Promise.all([
    motoclubesService.getAll(),
    identidadeMotoclubeService.getAll(),
    usuariosService.getAll(),
    membrosService.getAll(),
    niveisService.getAll(),
  ]);

  const clube = buildClubeCabecalho(motoclubeId, clubs, identities, users);
  const membro = members.find(
    (m) => m.id === membroId && m.motoclube_id === clube.motoclubeId,
  );
  if (!membro) return null;

  const nivel = niveis.find(
    (n) => n.id === membro.nivel_id && n.motoclube_id === clube.motoclubeId,
  );
  const usuario = users.find((u) => u.id === membro.usuario_id);

  return {
    clube,
    id: membro.id,
    usuarioId: membro.usuario_id,
    nome: membro.nome,
    apelido: membro.apelido,
    email: usuario?.email ?? '',
    telefone: membro.telefone,
    fotoUrl: membro.foto_url,
    entradaEm: membro.entrada_em,
    nivelId: membro.nivel_id,
    nivelNome: nivel?.nome ?? 'Sem nível',
    status: membro.status,
    cadastradoEm: membro.cadastrado_em,
  };
}

export async function atualizarMembroCompleto(
  input: AtualizarMembroInput,
): Promise<AtualizarMembroResult> {
  const nome = input.nome.trim();
  const apelido = input.apelido?.trim() ? input.apelido.trim() : null;
  const email = input.email.trim().toLowerCase();
  const telefone = input.telefone.trim();
  const entradaEm = input.entradaEm.trim();

  const fieldErrors: Record<string, string> = {};
  if (nome.length < 3) {
    fieldErrors.nome = 'Informe o nome completo com pelo menos 3 caracteres.';
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fieldErrors.email = 'Informe um e-mail de acesso válido.';
  }
  if (telefone.replace(/\D/g, '').length < 10) {
    fieldErrors.telefone = 'Informe um telefone válido com DDD.';
  }
  const hojeLocal = getHojeLocalCampoGrande();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(entradaEm)) {
    fieldErrors.entradaEm = 'Informe a data real de entrada no clube.';
  } else if (entradaEm > hojeLocal) {
    fieldErrors.entradaEm = 'A data de entrada no clube não pode ser futura.';
  }

  if (Object.keys(fieldErrors).length > 0) {
    throw new ServiceValidationError('Verifique os campos destacados.', fieldErrors);
  }

  const [membro, usuarios, vinculos] = await Promise.all([
    membrosService.getById(input.membroId),
    usuariosService.getAll(),
    vinculosService.getAll(),
  ]);

  if (!membro || membro.motoclube_id !== input.motoclubeId) {
    throw new ServiceValidationError('Membro não encontrado neste motoclube.');
  }

  const usuarioAtual = usuarios.find((u) => u.id === membro.usuario_id);
  if (!usuarioAtual) {
    throw new ServiceValidationError('Conta de acesso vinculada não encontrada.');
  }

  // Alteração de e-mail exige verificação segura de conflito no acesso
  const emailAtualNormalizado = usuarioAtual.email.trim().toLowerCase();
  if (email !== emailAtualNormalizado) {
    const outroUsuario = usuarios.find(
      (u) => u.id !== usuarioAtual.id && u.email.trim().toLowerCase() === email,
    );
    if (outroUsuario) {
      throw new ServiceValidationError(
        'Este e-mail já está vinculado a outro usuário de acesso.',
        {
          email: 'Já existe outro usuário cadastrado com este e-mail de acesso.',
        },
      );
    }
  }

  const fotoUrl = input.fotoUrl === undefined ? membro.foto_url : input.fotoUrl;

  await membrosService.update(membro.id, {
    nome,
    apelido,
    foto_url: fotoUrl,
    entrada_em: entradaEm,
    status: input.status,
    telefone,
  });

  await usuariosService.update(usuarioAtual.id, {
    nome,
    email,
    foto_url: fotoUrl,
  });

  const vinculo = vinculos.find(
    (v) => v.motoclube_id === input.motoclubeId && v.membro_id === membro.id,
  );
  if (vinculo) {
    await vinculosService.update(vinculo.id, {
      status: input.status === 'ativo' ? 'ativo' : 'inativo',
    });
  }

  return {
    membroId: membro.id,
    usuarioId: usuarioAtual.id,
    nome,
    email,
    status: input.status,
  };
}
