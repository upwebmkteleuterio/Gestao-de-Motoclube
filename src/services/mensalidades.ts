import { mensalidadesMock } from '../mocks';
import type {
  FinanceiroCompetenciaDTO,
  FinanceiroQueryParams,
  Mensalidade,
  MensalidadeCompetenciaItemDTO,
} from '../types';
import {
  addMonthsCompetencia,
  buildClubeCabecalho,
  formatarMesAnoPtBr,
  formatarVencimentoMensalidade,
  getHojeLocalCampoGrande,
  mapPagamentosPorMensalidade,
} from './calculos';
import { identidadeMotoclubeService } from './identidadeMotoclube';
import { membrosService } from './membros';
import { motoclubesService } from './motoclubes';
import { recebimentosService } from './recebimentos';
import { createSimulatedRepository } from './repository';
import { usuariosService } from './usuarios';

export const mensalidadesService = createSimulatedRepository<Mensalidade>('mensalidades', mensalidadesMock);

const SITUACAO_ORDEM: Record<'em_atraso' | 'a_vencer' | 'em_dia', number> = {
  em_atraso: 0,
  a_vencer: 1,
  em_dia: 2,
};

export async function queryFinanceiroCompetencia({
  motoclubeId,
  competencia,
  filtro = 'late',
  membroId = '',
  page = 1,
  pageSize = 6,
}: FinanceiroQueryParams): Promise<FinanceiroCompetenciaDTO> {
  const [clubs, identities, users, members, mensalidades, recebimentos] = await Promise.all([
    motoclubesService.getAll(),
    identidadeMotoclubeService.getAll(),
    usuariosService.getAll(),
    membrosService.getAll(),
    mensalidadesService.getAll(),
    recebimentosService.getAll(),
  ]);

  const clube = buildClubeCabecalho(motoclubeId, clubs, identities, users);
  const hojeLocal = getHojeLocalCampoGrande();
  const competenciaAtual = hojeLocal.slice(0, 7);

  const mensalidadesDoClube = mensalidades.filter(
    (m) => m.motoclube_id === clube.motoclubeId && m.cancelada_em === null,
  );

  const mesesSet = new Set<string>();
  for (const m of mensalidadesDoClube) {
    mesesSet.add(m.competencia.slice(0, 7));
  }
  mesesSet.add(competenciaAtual);
  mesesSet.add(addMonthsCompetencia(competenciaAtual, 1));
  const competenciasDisponiveis = Array.from(mesesSet).sort();

  const competenciaSelecionada =
    competencia && competenciasDisponiveis.includes(competencia)
      ? competencia
      : competenciaAtual;

  const idxCompetencia = competenciasDisponiveis.indexOf(competenciaSelecionada);
  const canPrev = idxCompetencia > 0;
  const canNext = idxCompetencia >= 0 && idxCompetencia < competenciasDisponiveis.length - 1;
  const prevCompetencia = canPrev ? competenciasDisponiveis[idxCompetencia - 1] : null;
  const nextCompetencia = canNext ? competenciasDisponiveis[idxCompetencia + 1] : null;

  const membroPorId = new Map(
    members.filter((m) => m.motoclube_id === clube.motoclubeId).map((m) => [m.id, m]),
  );
  const pagosPorMensalidade = mapPagamentosPorMensalidade(clube.motoclubeId, recebimentos);

  const daCompetencia = mensalidadesDoClube.filter(
    (m) => m.competencia.slice(0, 7) === competenciaSelecionada,
  );

  // Indicadores sempre calculados sobre a competência completa
  let previstoCentavos = 0;
  let recebidoCentavos = 0;
  let pendenteCentavos = 0;
  let emDiaCount = 0;
  let pendentesCount = 0;

  const todosItens: MensalidadeCompetenciaItemDTO[] = [];

  for (const m of daCompetencia) {
    const membro = membroPorId.get(m.membro_id);
    const pagoBruto = pagosPorMensalidade.get(m.id) ?? 0;
    const pagoEfetivo = Math.min(m.valor_centavos, pagoBruto);
    const saldo = Math.max(0, m.valor_centavos - pagoBruto);

    previstoCentavos += m.valor_centavos;
    recebidoCentavos += pagoEfetivo;
    pendenteCentavos += saldo;

    let situacao: 'em_dia' | 'em_atraso' | 'a_vencer';
    if (saldo === 0) {
      situacao = 'em_dia';
      emDiaCount += 1;
    } else {
      pendentesCount += 1;
      situacao = m.vencimento < hojeLocal ? 'em_atraso' : 'a_vencer';
    }

    todosItens.push({
      id: m.id,
      membroId: m.membro_id,
      membroNome: membro?.nome ?? 'Membro',
      membroApelido: membro?.apelido ?? null,
      membroFotoUrl: membro?.foto_url ?? null,
      competencia: m.competencia,
      vencimento: m.vencimento,
      vencimentoTexto: formatarVencimentoMensalidade(m.vencimento, situacao),
      valorCentavos: m.valor_centavos,
      pagoCentavos: pagoEfetivo,
      saldoCentavos: saldo,
      situacao,
    });
  }

  const membroFiltroIdClean = membroId.trim();
  const membroFiltro = membroFiltroIdClean ? membroPorId.get(membroFiltroIdClean) : undefined;
  const baseMembro = membroFiltroIdClean
    ? todosItens.filter((item) => item.membroId === membroFiltroIdClean)
    : todosItens;

  const contagensPorSituacao = {
    all: baseMembro.length,
    paid: baseMembro.filter((i) => i.situacao === 'em_dia').length,
    soon: baseMembro.filter((i) => i.situacao === 'a_vencer').length,
    late: baseMembro.filter((i) => i.situacao === 'em_atraso').length,
  };

  const filtrados = baseMembro
    .filter((item) => {
      if (filtro === 'paid') return item.situacao === 'em_dia';
      if (filtro === 'soon') return item.situacao === 'a_vencer';
      if (filtro === 'late') return item.situacao === 'em_atraso';
      return true;
    })
    .sort((a, b) => {
      const ordDiff = SITUACAO_ORDEM[a.situacao] - SITUACAO_ORDEM[b.situacao];
      if (ordDiff !== 0) return ordDiff;
      return a.membroNome.localeCompare(b.membroNome, 'pt-BR');
    });

  const totalFiltrado = filtrados.length;
  const safePageSize = Math.max(1, pageSize);
  const totalPages = Math.max(1, Math.ceil(totalFiltrado / safePageSize));
  const safePage = Math.max(1, Math.min(page, totalPages));
  const start = (safePage - 1) * safePageSize;
  const itens = filtrados.slice(start, start + safePageSize);

  return {
    clube,
    competencia: competenciaSelecionada,
    competenciaRotulo: formatarMesAnoPtBr(competenciaSelecionada),
    competenciasDisponiveis,
    canPrev,
    canNext,
    prevCompetencia,
    nextCompetencia,
    membroFiltroId: membroFiltroIdClean || null,
    membroFiltroNome: membroFiltro?.nome ?? null,
    previstoCentavos,
    recebidoCentavos,
    pendenteCentavos,
    emDiaCount,
    pendentesCount,
    contagensPorSituacao,
    itens,
    totalFiltrado,
    page: safePage,
    pageSize: safePageSize,
    totalPages,
  };
}
