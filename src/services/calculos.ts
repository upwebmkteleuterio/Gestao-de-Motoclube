import type {
  ClubeCabecalhoResumo,
  Evento,
  IdentidadeMotoclube,
  Justificativa,
  Mensalidade,
  Motoclube,
  Participacao,
  PeriodoFiltroInput,
  PeriodoFrequenciaTipo,
  Recebimento,
  ResumoEventosPeriodoDTO,
  ResumoMensalidadesPeriodoDTO,
  Usuario,
} from '../types';

const CLUB_TIMEZONE = 'America/Campo_Grande';

export function normalizeText(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

export function getHojeLocalCampoGrande(): string {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: CLUB_TIMEZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(new Date());
  const y = parts.find((p) => p.type === 'year')?.value ?? '2026';
  const m = parts.find((p) => p.type === 'month')?.value ?? '11';
  const d = parts.find((p) => p.type === 'day')?.value ?? '16';
  return `${y}-${m}-${d}`;
}

export function toLocalDateCampoGrande(isoDateOrTimestamp: string): string {
  if (/^\d{4}-\d{2}-\d{2}$/.test(isoDateOrTimestamp)) {
    return isoDateOrTimestamp;
  }
  const date = new Date(isoDateOrTimestamp);
  if (Number.isNaN(date.getTime())) {
    return isoDateOrTimestamp.slice(0, 10);
  }
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: CLUB_TIMEZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);
  const y = parts.find((p) => p.type === 'year')?.value ?? '2026';
  const m = parts.find((p) => p.type === 'month')?.value ?? '11';
  const d = parts.find((p) => p.type === 'day')?.value ?? '16';
  return `${y}-${m}-${d}`;
}

export function formatarDataBr(isoDate: string): string {
  const parts = isoDate.split('-');
  if (parts.length !== 3) return isoDate;
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

export function formatarDataTimeline(isoDateOrTimestamp: string): string {
  const date = new Date(isoDateOrTimestamp);
  if (Number.isNaN(date.getTime())) return isoDateOrTimestamp;
  const day = new Intl.DateTimeFormat('pt-BR', {
    timeZone: CLUB_TIMEZONE,
    day: '2-digit',
  }).format(date);
  const monthRaw = new Intl.DateTimeFormat('pt-BR', {
    timeZone: CLUB_TIMEZONE,
    month: 'short',
  })
    .format(date)
    .replace('.', '')
    .toLowerCase();
  const year = new Intl.DateTimeFormat('pt-BR', {
    timeZone: CLUB_TIMEZONE,
    year: 'numeric',
  }).format(date);
  return `${day} ${monthRaw} ${year}`;
}

export function addDaysIso(isoDate: string, days: number): string {
  const [y, m, d] = isoDate.split('-').map(Number);
  const dt = new Date(Date.UTC(y || 2026, (m || 11) - 1, d || 16));
  dt.setUTCDate(dt.getUTCDate() + days);
  return dt.toISOString().slice(0, 10);
}

export function resolvePeriodoDatas(
  filtro: PeriodoFiltroInput,
  hojeLocal: string,
): { inicio: string; fim: string; fimExclusivo: string; rotulo: string } {
  if (filtro.periodo === '2025') {
    return {
      inicio: '2025-01-01',
      fim: '2025-12-31',
      fimExclusivo: '2026-01-01',
      rotulo: '01/01/2025 a 31/12/2025',
    };
  }
  if (filtro.periodo === '2026') {
    return {
      inicio: '2026-01-01',
      fim: '2026-12-31',
      fimExclusivo: '2027-01-01',
      rotulo: '01/01/2026 a 31/12/2026',
    };
  }
  if (filtro.periodo === 'custom' && filtro.de && filtro.ate && filtro.de <= filtro.ate) {
    return {
      inicio: filtro.de,
      fim: filtro.ate,
      fimExclusivo: addDaysIso(filtro.ate, 1),
      rotulo: `${formatarDataBr(filtro.de)} a ${formatarDataBr(filtro.ate)}`,
    };
  }
  // rolling = últimos 12 meses até hojeLocal
  const [y, m, d] = hojeLocal.split('-').map(Number);
  const ref = new Date(Date.UTC(y || 2026, (m || 11) - 1, d || 16));
  ref.setUTCFullYear(ref.getUTCFullYear() - 1);
  ref.setUTCDate(ref.getUTCDate() + 1);
  const inicio = ref.toISOString().slice(0, 10);
  return {
    inicio,
    fim: hojeLocal,
    fimExclusivo: addDaysIso(hojeLocal, 1),
    rotulo: `${formatarDataBr(inicio)} a ${formatarDataBr(hojeLocal)}`,
  };
}

export function calcularResumoNivelPeriodo(params: {
  membroId: string;
  motoclubeId: string;
  inicio: string;
  fimExclusivo: string;
  hojeLocal: string;
  eventos: Evento[];
  participacoes: Participacao[];
  justificativas: Justificativa[];
  mensalidades: Mensalidade[];
  recebimentos: Recebimento[];
}): {
  eventosPeriodo: ResumoEventosPeriodoDTO;
  mensalidadesPeriodo: ResumoMensalidadesPeriodoDTO;
} {
  const {
    membroId,
    motoclubeId,
    inicio,
    fimExclusivo,
    hojeLocal,
    eventos,
    participacoes,
    justificativas,
    mensalidades,
    recebimentos,
  } = params;

  // Eventos elegíveis no intervalo [inicio, fimExclusivo) por início, encerrados e com chamada finalizada
  const elegiveisIds = new Set(
    eventos
      .filter((e) => {
        if (e.motoclube_id !== motoclubeId) return false;
        if (e.estado !== 'encerrado' || e.chamada_finalizada_em === null) return false;
        const dataInicio = toLocalDateCampoGrande(e.inicio_em);
        return dataInicio >= inicio && dataInicio < fimExclusivo;
      })
      .map((e) => e.id),
  );

  const participacoesPeriodo = participacoes.filter(
    (p) =>
      p.motoclube_id === motoclubeId &&
      p.membro_id === membroId &&
      p.esperado === true &&
      elegiveisIds.has(p.evento_id),
  );

  const justificativaPorParticipacao = new Map(
    justificativas.map((j) => [j.participacao_id, j]),
  );

  const eventosTotal = participacoesPeriodo.length;
  const presencasTotal = participacoesPeriodo.filter((p) => p.presenca === 'presente').length;
  const faltasLista = participacoesPeriodo.filter((p) => p.presenca === 'faltou');
  const faltasTotal = faltasLista.length;
  const justificadasTotal = faltasLista.filter(
    (p) => justificativaPorParticipacao.get(p.id)?.status === 'aceita',
  ).length;
  const taxaPercentual =
    eventosTotal === 0 ? null : Math.round((presencasTotal / eventosTotal) * 100);

  // Mensalidades no intervalo [inicio, fimExclusivo) por vencimento (excluindo canceladas)
  const mensalidadesPeriodoLista = mensalidades.filter(
    (m) =>
      m.motoclube_id === motoclubeId &&
      m.membro_id === membroId &&
      m.cancelada_em === null &&
      m.vencimento >= inicio &&
      m.vencimento < fimExclusivo,
  );

  const recebimentosPorMensalidade = new Map<string, Recebimento[]>();
  for (const r of recebimentos) {
    if (r.motoclube_id !== motoclubeId || r.estornado_em !== null) continue;
    const lista = recebimentosPorMensalidade.get(r.mensalidade_id) ?? [];
    lista.push(r);
    recebimentosPorMensalidade.set(r.mensalidade_id, lista);
  }

  let pagasNoPrazo = 0;
  let pagasComAtraso = 0;
  let vencidas = 0;
  let aVencer = 0;

  for (const m of mensalidadesPeriodoLista) {
    const recs = (recebimentosPorMensalidade.get(m.id) ?? []).sort((a, b) =>
      a.recebido_em.localeCompare(b.recebido_em),
    );
    let acumulado = 0;
    let dataQuitacaoLocal: string | null = null;
    for (const r of recs) {
      acumulado += r.valor_centavos;
      if (acumulado >= m.valor_centavos && !dataQuitacaoLocal) {
        dataQuitacaoLocal = toLocalDateCampoGrande(r.recebido_em);
      }
    }

    if (dataQuitacaoLocal !== null) {
      if (dataQuitacaoLocal <= m.vencimento) {
        pagasNoPrazo += 1;
      } else {
        pagasComAtraso += 1;
      }
    } else if (m.vencimento < hojeLocal) {
      vencidas += 1;
    } else {
      aVencer += 1;
    }
  }

  return {
    eventosPeriodo: {
      eventosTotal,
      presencasTotal,
      faltasTotal,
      justificadasTotal,
      taxaPercentual,
    },
    mensalidadesPeriodo: {
      total: mensalidadesPeriodoLista.length,
      pagasNoPrazo,
      pagasComAtraso,
      vencidas,
      aVencer,
    },
  };
}

export function formatarIngresso(entradaEm: string): string {
  const [year, month] = entradaEm.split('-').map(Number);
  if (!year || !month) return `Desde ${entradaEm}`;
  const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
  const monthLabel = months[Math.max(0, Math.min(11, month - 1))];
  return `Desde ${monthLabel}/${year}`;
}

export function formatarDataEvento(inicioEm: string): string {
  const date = new Date(inicioEm);
  if (Number.isNaN(date.getTime())) return inicioEm;
  const day = new Intl.DateTimeFormat('pt-BR', {
    timeZone: CLUB_TIMEZONE,
    day: '2-digit',
  }).format(date);
  const monthRaw = new Intl.DateTimeFormat('pt-BR', {
    timeZone: CLUB_TIMEZONE,
    month: 'short',
  })
    .format(date)
    .replace('.', '')
    .toLowerCase();
  const timeParts = new Intl.DateTimeFormat('pt-BR', {
    timeZone: CLUB_TIMEZONE,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(date);
  const hour = timeParts.find((p) => p.type === 'hour')?.value ?? '00';
  const minute = timeParts.find((p) => p.type === 'minute')?.value ?? '00';
  return `${day} ${monthRaw} • ${hour}h${minute}`;
}

export function calcularFrequenciaMembro(
  membroId: string,
  motoclubeId: string,
  eventos: Evento[],
  participacoes: Participacao[],
): { previstos: number; presencas: number; taxaPercentual: number | null } {
  const elegiveisIds = new Set(
    eventos
      .filter(
        (e) =>
          e.motoclube_id === motoclubeId &&
          e.estado === 'encerrado' &&
          e.chamada_finalizada_em !== null,
      )
      .map((e) => e.id),
  );

  const doMembro = participacoes.filter(
    (p) =>
      p.motoclube_id === motoclubeId &&
      p.membro_id === membroId &&
      p.esperado === true &&
      elegiveisIds.has(p.evento_id),
  );

  const previstos = doMembro.length;
  if (previstos === 0) {
    return { previstos: 0, presencas: 0, taxaPercentual: null };
  }

  const presencas = doMembro.filter((p) => p.presenca === 'presente').length;
  return {
    previstos,
    presencas,
    taxaPercentual: Math.round((presencas / previstos) * 100),
  };
}

export function calcularFrequenciaGeralClube(
  motoclubeId: string,
  eventos: Evento[],
  participacoes: Participacao[],
): number | null {
  const elegiveisIds = new Set(
    eventos
      .filter(
        (e) =>
          e.motoclube_id === motoclubeId &&
          e.estado === 'encerrado' &&
          e.chamada_finalizada_em !== null,
      )
      .map((e) => e.id),
  );

  const elegiveis = participacoes.filter(
    (p) =>
      p.motoclube_id === motoclubeId &&
      p.esperado === true &&
      elegiveisIds.has(p.evento_id),
  );

  if (elegiveis.length === 0) return null;
  const presencas = elegiveis.filter((p) => p.presenca === 'presente').length;
  return Math.round((presencas / elegiveis.length) * 100);
}

export function mapPagamentosPorMensalidade(
  motoclubeId: string,
  recebimentos: Recebimento[],
): Map<string, number> {
  const mapa = new Map<string, number>();
  for (const r of recebimentos) {
    if (r.motoclube_id !== motoclubeId || r.estornado_em !== null) continue;
    mapa.set(r.mensalidade_id, (mapa.get(r.mensalidade_id) ?? 0) + r.valor_centavos);
  }
  return mapa;
}

export function calcularFinanceiroMembro(
  membroId: string,
  motoclubeId: string,
  mensalidades: Mensalidade[],
  pagosPorMensalidade: Map<string, number>,
  hojeLocal: string,
): { situacao: 'em_dia' | 'em_atraso'; emAtrasoCount: number; pendentesCount: number } {
  const doMembro = mensalidades.filter(
    (m) => m.motoclube_id === motoclubeId && m.membro_id === membroId && m.cancelada_em === null,
  );

  let emAtrasoCount = 0;
  let pendentesCount = 0;

  for (const m of doMembro) {
    const pago = pagosPorMensalidade.get(m.id) ?? 0;
    const saldo = Math.max(0, m.valor_centavos - pago);
    if (saldo > 0) {
      pendentesCount += 1;
      if (m.vencimento < hojeLocal) {
        emAtrasoCount += 1;
      }
    }
  }

  return {
    situacao: emAtrasoCount > 0 ? 'em_atraso' : 'em_dia',
    emAtrasoCount,
    pendentesCount,
  };
}

export function buildClubeCabecalho(
  motoclubeId: string,
  clubs: Motoclube[],
  identities: IdentidadeMotoclube[],
  users: Usuario[],
): ClubeCabecalhoResumo {
  const club = clubs.find((c) => c.id === motoclubeId && !c.excluido_em) ?? clubs[0];
  if (!club) {
    throw new Error('Motoclube não encontrado.');
  }
  const identity = identities.find((i) => i.motoclube_id === club.id);
  const gestor = users.find((u) => u.id === club.gestor_usuario_id);
  const gestorNome = gestor?.nome ?? 'Gestor';
  const gestorPrimeiroNome = gestorNome.trim().split(/\s+/)[0] || 'Gestor';

  return {
    motoclubeId: club.id,
    nome: club.nome,
    local: `${club.cidade} • ${club.uf}`,
    logoUrl: identity?.logo_url ?? null,
    gestorId: club.gestor_usuario_id,
    gestorNome,
    gestorPrimeiroNome,
    gestorFotoUrl: gestor?.foto_url ?? null,
  };
}

export function resolvePeriodoFrequenciaDatas(
  filtro: { periodo: PeriodoFrequenciaTipo; de?: string; ate?: string },
  hojeLocal: string,
): { inicio: string; fim: string; fimExclusivo: string; rotulo: string } {
  if (filtro.periodo === 'custom' && filtro.de && filtro.ate && filtro.de <= filtro.ate) {
    return {
      inicio: filtro.de,
      fim: filtro.ate,
      fimExclusivo: addDaysIso(filtro.ate, 1),
      rotulo: `${formatarDataBr(filtro.de)} a ${formatarDataBr(filtro.ate)}`,
    };
  }

  if (filtro.periodo === 'month') {
    const inicio = addDaysIso(hojeLocal, -29);
    return {
      inicio,
      fim: hojeLocal,
      fimExclusivo: addDaysIso(hojeLocal, 1),
      rotulo: `${formatarDataBr(inicio)} a ${formatarDataBr(hojeLocal)}`,
    };
  }

  // quarter = últimos 3 meses até hojeLocal
  const [y, m, d] = hojeLocal.split('-').map(Number);
  const ref = new Date(Date.UTC(y || 2026, (m || 11) - 1, d || 16));
  ref.setUTCMonth(ref.getUTCMonth() - 3);
  ref.setUTCDate(ref.getUTCDate() + 1);
  const inicio = ref.toISOString().slice(0, 10);
  return {
    inicio,
    fim: hojeLocal,
    fimExclusivo: addDaysIso(hojeLocal, 1),
    rotulo: `${formatarDataBr(inicio)} a ${formatarDataBr(hojeLocal)}`,
  };
}

export function formatarDataCurtaDiaMesAno(isoDateOrTimestamp: string): string {
  return formatarDataTimeline(isoDateOrTimestamp);
}

const MESES_FULL_PT = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const MESES_CURTO_PT = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

export function formatarMesAnoPtBr(competenciaYm: string): string {
  const [yearStr, monthStr] = competenciaYm.split('-');
  const year = Number(yearStr);
  const month = Number(monthStr);
  if (!year || !month || month < 1 || month > 12) return competenciaYm;
  return `${MESES_FULL_PT[month - 1]} ${year}`;
}

export function addMonthsCompetencia(competenciaYm: string, delta: number): string {
  const [yearStr, monthStr] = competenciaYm.split('-');
  const year = Number(yearStr) || 2026;
  const month = (Number(monthStr) || 11) - 1;
  const dt = new Date(Date.UTC(year, month + delta, 1));
  const y = dt.getUTCFullYear();
  const m = String(dt.getUTCMonth() + 1).padStart(2, '0');
  return `${y}-${m}`;
}

export function formatarVencimentoMensalidade(
  vencimentoIso: string,
  situacao: 'em_dia' | 'em_atraso' | 'a_vencer',
): string {
  const [, monthStr, dayStr] = vencimentoIso.split('-');
  const monthIdx = (Number(monthStr) || 1) - 1;
  const monthShort = MESES_CURTO_PT[Math.max(0, Math.min(11, monthIdx))];
  const day = dayStr ?? '05';
  const prefix = situacao === 'em_atraso' ? 'Venceu em' : 'Vencimento em';
  return `${prefix} ${day} ${monthShort}`;
}

export function resolvePeriodoEventosDatas(
  filtro: { aba: 'upcoming' | 'past'; de?: string; ate?: string },
  hojeLocal: string,
): {
  periodoPadrao: boolean;
  inicio: string;
  fim: string;
  fimExclusivo: string;
  rotulo: string;
} {
  if (filtro.de && filtro.ate && filtro.de <= filtro.ate) {
    return {
      periodoPadrao: false,
      inicio: filtro.de,
      fim: filtro.ate,
      fimExclusivo: addDaysIso(filtro.ate, 1),
      rotulo: `${formatarDataBr(filtro.de)} a ${formatarDataBr(filtro.ate)}`,
    };
  }

  const [y, m, d] = hojeLocal.split('-').map(Number);

  if (filtro.aba === 'past') {
    const ref = new Date(Date.UTC(y || 2026, (m || 11) - 1, d || 16));
    ref.setUTCMonth(ref.getUTCMonth() - 3);
    ref.setUTCDate(ref.getUTCDate() + 1);
    const inicio = ref.toISOString().slice(0, 10);
    return {
      periodoPadrao: true,
      inicio,
      fim: hojeLocal,
      fimExclusivo: addDaysIso(hojeLocal, 1),
      rotulo: 'Últimos 3 meses',
    };
  }

  const refEnd = new Date(Date.UTC(y || 2026, (m || 11) - 1, d || 16));
  refEnd.setUTCMonth(refEnd.getUTCMonth() + 3);
  const fim = refEnd.toISOString().slice(0, 10);
  return {
    periodoPadrao: true,
    inicio: hojeLocal,
    fim,
    fimExclusivo: addDaysIso(fim, 1),
    rotulo: 'Próximos 3 meses',
  };
}

