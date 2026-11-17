import { eventosMock } from '../mocks';
import type {
  CriarEventoContextoDTO,
  CriarEventoInput,
  CriarEventoResult,
  DetalheEventoDTO,
  Evento,
  EventoListaItemDTO,
  EventosQueryParams,
  EventosQueryResult,
  FrequenciaMembroDTO,
  FrequenciaMembroParams,
  ParticipacaoEventoItemDTO,
} from '../types';
import {
  buildClubeCabecalho,
  formatarDataCurtaDiaMesAno,
  formatarDataEvento,
  formatarIngresso,
  getHojeLocalCampoGrande,
  resolvePeriodoEventosDatas,
  resolvePeriodoFrequenciaDatas,
  toLocalDateCampoGrande,
} from './calculos';
import { identidadeMotoclubeService } from './identidadeMotoclube';
import { justificativasService } from './justificativas';
import { ServiceValidationError, membrosService } from './membros';
import { motoclubesService } from './motoclubes';
import { niveisService } from './niveis';
import { participacoesService } from './participacoes';
import { createSimulatedRepository } from './repository';
import { usuariosService } from './usuarios';

export const eventosService = createSimulatedRepository<Evento>('eventos', eventosMock);

export const TIPOS_EVENTO_CLUBE = ['Passeio', 'Reunião', 'Encontro', 'Viagem', 'Outro'];

export async function queryEventosClube({
  motoclubeId,
  aba,
  de,
  ate,
  page = 1,
  pageSize = 6,
}: EventosQueryParams): Promise<EventosQueryResult> {
  const [clubs, identities, users, members, eventos, participacoes] = await Promise.all([
    motoclubesService.getAll(),
    identidadeMotoclubeService.getAll(),
    usuariosService.getAll(),
    membrosService.getAll(),
    eventosService.getAll(),
    participacoesService.getAll(),
  ]);

  const clube = buildClubeCabecalho(motoclubeId, clubs, identities, users);
  const hojeLocal = getHojeLocalCampoGrande();
  const periodoAtivo = resolvePeriodoEventosDatas({ aba, de, ate }, hojeLocal);

  const periodoUpcoming = periodoAtivo.periodoPadrao
    ? resolvePeriodoEventosDatas({ aba: 'upcoming' }, hojeLocal)
    : periodoAtivo;
  const periodoPast = periodoAtivo.periodoPadrao
    ? resolvePeriodoEventosDatas({ aba: 'past' }, hojeLocal)
    : periodoAtivo;

  const eventosDoClube = eventos.filter((e) => e.motoclube_id === clube.motoclubeId);

  const upcomingFiltrados = eventosDoClube
    .filter((e) => {
      if (e.estado !== 'publicado') return false;
      const d = toLocalDateCampoGrande(e.inicio_em);
      return d >= periodoUpcoming.inicio && d < periodoUpcoming.fimExclusivo;
    })
    .sort((a, b) => new Date(a.inicio_em).getTime() - new Date(b.inicio_em).getTime());

  const pastFiltrados = eventosDoClube
    .filter((e) => {
      if (e.estado !== 'encerrado') return false;
      const d = toLocalDateCampoGrande(e.inicio_em);
      return d >= periodoPast.inicio && d < periodoPast.fimExclusivo;
    })
    .sort((a, b) => new Date(b.inicio_em).getTime() - new Date(a.inicio_em).getTime());

  const selecionados = aba === 'past' ? pastFiltrados : upcomingFiltrados;
  const membroPorId = new Map(
    members.filter((m) => m.motoclube_id === clube.motoclubeId).map((m) => [m.id, m]),
  );

  const todosItens: EventoListaItemDTO[] = selecionados.map((evento) => {
    const confirmados = participacoes.filter(
      (p) =>
        p.motoclube_id === clube.motoclubeId &&
        p.evento_id === evento.id &&
        p.confirmacao === 'confirmada',
    );
    const avatares = confirmados.slice(0, 3).map((p) => {
      const m = membroPorId.get(p.membro_id);
      return {
        nome: m?.nome ?? 'Membro',
        fotoUrl: m?.foto_url ?? null,
      };
    });

    return {
      id: evento.id,
      titulo: evento.titulo,
      categoria: evento.tipo,
      fotoUrl: evento.foto_url,
      dataLocal: toLocalDateCampoGrande(evento.inicio_em),
      dataTexto: formatarDataEvento(evento.inicio_em),
      local: evento.local,
      estado: evento.estado,
      confirmadosTotal: confirmados.length,
      confirmadosAvatares: avatares,
    };
  });

  const totalFiltrado = todosItens.length;
  const safePageSize = Math.max(1, pageSize);
  const totalPages = Math.max(1, Math.ceil(totalFiltrado / safePageSize));
  const safePage = Math.max(1, Math.min(page, totalPages));
  const start = (safePage - 1) * safePageSize;
  const itens = todosItens.slice(start, start + safePageSize);

  return {
    clube,
    aba,
    periodoPadrao: periodoAtivo.periodoPadrao,
    periodoInicio: periodoAtivo.inicio,
    periodoFim: periodoAtivo.fim,
    periodoRotulo: periodoAtivo.rotulo,
    contagensPorAba: {
      upcoming: upcomingFiltrados.length,
      past: pastFiltrados.length,
    },
    itens,
    totalFiltrado,
    page: safePage,
    pageSize: safePageSize,
    totalPages,
  };
}

export async function getContextoCriarEvento(motoclubeId: string): Promise<CriarEventoContextoDTO> {
  const [clubs, identities, users, niveis, members] = await Promise.all([
    motoclubesService.getAll(),
    identidadeMotoclubeService.getAll(),
    usuariosService.getAll(),
    niveisService.getAll(),
    membrosService.getAll(),
  ]);

  const clube = buildClubeCabecalho(motoclubeId, clubs, identities, users);
  const hojeLocal = getHojeLocalCampoGrande();

  const ativosDoClube = members.filter(
    (m) => m.motoclube_id === clube.motoclubeId && m.status === 'ativo',
  );
  const contagemPorNivel = new Map<string, number>();
  for (const m of ativosDoClube) {
    contagemPorNivel.set(m.nivel_id, (contagemPorNivel.get(m.nivel_id) ?? 0) + 1);
  }

  const niveisClube = niveis
    .filter((n) => n.motoclube_id === clube.motoclubeId)
    .sort((a, b) => a.ordem - b.ordem)
    .map((n) => ({
      id: n.id,
      nome: n.nome,
      ordem: n.ordem,
      totalMembrosAtivos: contagemPorNivel.get(n.id) ?? 0,
    }));

  return {
    clube,
    hojeLocal,
    niveis: niveisClube,
    totalMembrosAtivos: ativosDoClube.length,
    tiposDisponiveis: TIPOS_EVENTO_CLUBE,
  };
}

export async function criarEventoComParticipacoes(
  input: CriarEventoInput,
): Promise<CriarEventoResult> {
  const titulo = input.titulo.trim();
  const tipo = input.tipo.trim();
  const data = input.data.trim();
  const horario = input.horario.trim();
  const local = input.local.trim();
  const descricao = input.descricao.trim();

  const fieldErrors: Record<string, string> = {};

  if (titulo.length < 3) {
    fieldErrors.titulo = 'Informe o título do evento (mínimo 3 caracteres).';
  }
  if (!tipo) {
    fieldErrors.tipo = 'Selecione a categoria do evento.';
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data)) {
    fieldErrors.data = 'Informe uma data válida.';
  }
  if (!/^\d{2}:\d{2}$/.test(horario)) {
    fieldErrors.horario = 'Informe um horário válido.';
  }
  if (local.length < 2) {
    fieldErrors.local = 'Informe o local ou ponto de saída.';
  }
  if (descricao.length < 5) {
    fieldErrors.descricao = 'Informe uma breve descrição para os membros.';
  }

  const inicioEm = `${data}T${horario}:00-04:00`;
  if (!fieldErrors.data && !fieldErrors.horario && Number.isNaN(new Date(inicioEm).getTime())) {
    fieldErrors.data = 'Data ou horário inválidos.';
  }

  const [clubs, niveis, members] = await Promise.all([
    motoclubesService.getAll(),
    niveisService.getAll(),
    membrosService.getAll(),
  ]);

  const club = clubs.find((c) => c.id === input.motoclubeId && !c.excluido_em);
  if (!club) {
    throw new ServiceValidationError('Motoclube não encontrado.');
  }

  const niveisValidosIds = new Set(
    niveis.filter((n) => n.motoclube_id === club.id).map((n) => n.id),
  );
  const nivelIdsFiltrados = (input.nivelIds ?? []).filter((id) => niveisValidosIds.has(id));

  if (!input.todosNiveis && nivelIdsFiltrados.length === 0) {
    fieldErrors.publico = 'Selecione ao menos um nível para eventos restritos.';
  }

  if (Object.keys(fieldErrors).length > 0) {
    throw new ServiceValidationError('Verifique os campos destacados.', fieldErrors);
  }

  const publico: Evento['publico'] = input.todosNiveis
    ? { todos: true }
    : { todos: false, nivel_ids: nivelIdsFiltrados };

  const novoEvento = await eventosService.create({
    motoclube_id: club.id,
    titulo,
    descricao,
    foto_url: input.fotoUrl ?? null,
    tipo,
    inicio_em: inicioEm,
    local,
    estado: 'publicado',
    publico,
    chamada_finalizada_em: null,
  });

  const nivelSet = new Set(nivelIdsFiltrados);
  const elegiveis = members.filter(
    (m) =>
      m.motoclube_id === club.id &&
      m.status === 'ativo' &&
      (input.todosNiveis || nivelSet.has(m.nivel_id)),
  );

  await Promise.all(
    elegiveis.map((m) =>
      participacoesService.create({
        motoclube_id: club.id,
        evento_id: novoEvento.id,
        membro_id: m.id,
        esperado: true,
        confirmacao: 'pendente',
        confirmacao_em: null,
        presenca: null,
        registrado_por: null,
        registrado_em: null,
      }),
    ),
  );

  return {
    eventoId: novoEvento.id,
    titulo: novoEvento.titulo,
    inicioEm: novoEvento.inicio_em,
    participacoesCriadas: elegiveis.length,
  };
}

export async function queryEventosEFrequenciaMembro({
  motoclubeId,
  membroId,
  periodo,
  de,
  ate,
  presencaFiltro = 'all',
  limit,
}: FrequenciaMembroParams): Promise<FrequenciaMembroDTO | null> {
  const [clubs, identities, users, members, niveis, eventos, participacoes, justificativas] =
    await Promise.all([
      motoclubesService.getAll(),
      identidadeMotoclubeService.getAll(),
      usuariosService.getAll(),
      membrosService.getAll(),
      niveisService.getAll(),
      eventosService.getAll(),
      participacoesService.getAll(),
      justificativasService.getAll(),
    ]);

  const clube = buildClubeCabecalho(motoclubeId, clubs, identities, users);
  const membro = members.find(
    (m) => m.id === membroId && m.motoclube_id === clube.motoclubeId,
  );
  if (!membro) return null;

  const nivel = niveis.find(
    (n) => n.id === membro.nivel_id && n.motoclube_id === clube.motoclubeId,
  );

  const hojeLocal = getHojeLocalCampoGrande();
  const { inicio, fim, fimExclusivo, rotulo } = resolvePeriodoFrequenciaDatas(
    { periodo, de, ate },
    hojeLocal,
  );

  // Eventos elegíveis encerrados com chamada finalizada no intervalo [inicio, fimExclusivo)
  const eventoPorId = new Map<string, Evento>();
  for (const e of eventos) {
    if (e.motoclube_id !== clube.motoclubeId) continue;
    if (e.estado !== 'encerrado' || e.chamada_finalizada_em === null) continue;
    const dataInicio = toLocalDateCampoGrande(e.inicio_em);
    if (dataInicio >= inicio && dataInicio < fimExclusivo) {
      eventoPorId.set(e.id, e);
    }
  }

  const justificativaPorParticipacao = new Map(
    justificativas.map((j) => [j.participacao_id, j]),
  );

  const participacoesPeriodo = participacoes
    .filter(
      (p) =>
        p.motoclube_id === clube.motoclubeId &&
        p.membro_id === membro.id &&
        p.esperado === true &&
        eventoPorId.has(p.evento_id),
    )
    .sort((a, b) => {
      const evA = eventoPorId.get(a.evento_id);
      const evB = eventoPorId.get(b.evento_id);
      return (evB?.inicio_em ?? '').localeCompare(evA?.inicio_em ?? '');
    });

  // Indicadores sempre calculados sobre o período inteiro (independente do filtro por presença)
  const previstos = participacoesPeriodo.length;
  const presencas = participacoesPeriodo.filter((p) => p.presenca === 'presente').length;
  const faltasCount = participacoesPeriodo.filter((p) => p.presenca === 'faltou').length;
  const taxaPercentual = previstos === 0 ? null : Math.round((presencas / previstos) * 100);

  const todosItens: ParticipacaoEventoItemDTO[] = participacoesPeriodo.map((p) => {
    const evento = eventoPorId.get(p.evento_id)!;
    const presenca: 'presente' | 'faltou' = p.presenca === 'presente' ? 'presente' : 'faltou';
    const just = presenca === 'faltou' ? justificativaPorParticipacao.get(p.id) : undefined;
    return {
      id: p.id,
      eventoId: evento.id,
      eventoTitulo: evento.titulo,
      eventoFotoUrl: evento.foto_url,
      dataLocal: toLocalDateCampoGrande(evento.inicio_em),
      dataTexto: formatarDataCurtaDiaMesAno(evento.inicio_em),
      local: evento.local,
      presenca,
      justificativaStatus: just?.status ?? null,
    };
  });

  const filtrados = todosItens.filter((item) => {
    if (presencaFiltro === 'present') return item.presenca === 'presente';
    if (presencaFiltro === 'absent') return item.presenca === 'faltou';
    return true;
  });

  const totalFiltrado = filtrados.length;
  const itens =
    typeof limit === 'number' && limit > 0 ? filtrados.slice(0, limit) : filtrados;

  return {
    clube,
    membroId: membro.id,
    membroNome: membro.nome,
    membroApelido: membro.apelido,
    membroFotoUrl: membro.foto_url,
    nivelNome: nivel?.nome ?? 'Sem nível',
    ingressoTexto: `No clube ${formatarIngresso(membro.entrada_em).toLowerCase()}`,
    periodoInicio: inicio,
    periodoFim: fim,
    periodoRotulo: rotulo,
    previstos,
    presencas,
    taxaPercentual,
    contagensPorPresenca: {
      all: previstos,
      present: presencas,
      absent: faltasCount,
    },
    itens,
    totalFiltrado,
  };
}

const ESTADO_EVENTO_ROTULO: Record<Evento['estado'], string> = {
  rascunho: 'Rascunho',
  publicado: 'Próximo',
  encerrado: 'Encerrado',
  cancelado: 'Cancelado',
};

export async function getDetalheEvento(
  motoclubeId: string,
  eventoId: string,
): Promise<DetalheEventoDTO | null> {
  const [clubs, identities, users, eventos, participacoes, justificativas] = await Promise.all([
    motoclubesService.getAll(),
    identidadeMotoclubeService.getAll(),
    usuariosService.getAll(),
    eventosService.getAll(),
    participacoesService.getAll(),
    justificativasService.getAll(),
  ]);

  const clube = buildClubeCabecalho(motoclubeId, clubs, identities, users);
  const evento = eventos.find(
    (e) => e.id === eventoId && e.motoclube_id === clube.motoclubeId,
  );
  if (!evento) return null;

  const participacoesEvento = participacoes.filter(
    (p) => p.motoclube_id === clube.motoclubeId && p.evento_id === evento.id,
  );

  const justificativaPorParticipacao = new Map(
    justificativas.map((j) => [j.participacao_id, j]),
  );

  let esperadosTotal = 0;
  let confirmadosTotal = 0;
  let compareceramTotal = 0;
  let faltaramTotal = 0;
  let justificadasAceitasTotal = 0;
  let justificativasPendentesTotal = 0;

  for (const p of participacoesEvento) {
    if (p.esperado) esperadosTotal += 1;
    if (p.confirmacao === 'confirmada') confirmadosTotal += 1;
    if (p.presenca === 'presente') compareceramTotal += 1;
    if (p.presenca === 'faltou') {
      faltaramTotal += 1;
      const just = justificativaPorParticipacao.get(p.id);
      if (just?.status === 'aceita') {
        justificadasAceitasTotal += 1;
      } else if (just?.status === 'pendente') {
        justificativasPendentesTotal += 1;
      }
    } else {
      const just = justificativaPorParticipacao.get(p.id);
      if (just?.status === 'pendente') {
        justificativasPendentesTotal += 1;
      }
    }
  }

  return {
    clube,
    id: evento.id,
    titulo: evento.titulo,
    descricao: evento.descricao,
    fotoUrl: evento.foto_url,
    categoria: evento.tipo,
    estado: evento.estado,
    estadoRotulo: ESTADO_EVENTO_ROTULO[evento.estado],
    dataTexto: formatarDataEvento(evento.inicio_em),
    local: evento.local,
    chamadaFinalizada: evento.chamada_finalizada_em !== null,
    esperadosTotal,
    confirmadosTotal,
    compareceramTotal,
    faltaramTotal,
    justificadasAceitasTotal,
    justificativasPendentesTotal,
    totalRegistrosParticipacao: participacoesEvento.length,
  };
}

