import { recebimentosMock } from '../mocks';
import type {
  FormaRecebimento,
  MensalidadePendenteOptionDTO,
  Recebimento,
  RegistrarRecebimentoContextoDTO,
  RegistrarRecebimentoInput,
  RegistrarRecebimentoResult,
} from '../types';
import {
  buildClubeCabecalho,
  formatarMesAnoPtBr,
  formatarVencimentoMensalidade,
  getHojeLocalCampoGrande,
  mapPagamentosPorMensalidade,
  toLocalDateCampoGrande,
} from './calculos';
import { identidadeMotoclubeService } from './identidadeMotoclube';
import { ServiceValidationError, membrosService } from './membros';
import { mensalidadesService } from './mensalidades';
import { motoclubesService } from './motoclubes';
import { createSimulatedRepository } from './repository';
import { usuariosService } from './usuarios';

export const recebimentosService = createSimulatedRepository<Recebimento>(
  'recebimentos',
  recebimentosMock,
);

const FORMAS_VALIDAS: FormaRecebimento[] = ['pix', 'dinheiro', 'transferencia', 'cartao', 'outro'];

export async function getContextoRegistrarRecebimento(params: {
  motoclubeId: string;
  mensalidadeId?: string;
  membroId?: string;
  competencia?: string;
}): Promise<RegistrarRecebimentoContextoDTO> {
  const [clubs, identities, users, members, mensalidades, recebimentos] = await Promise.all([
    motoclubesService.getAll(),
    identidadeMotoclubeService.getAll(),
    usuariosService.getAll(),
    membrosService.getAll(),
    mensalidadesService.getAll(),
    recebimentosService.getAll(),
  ]);

  const clube = buildClubeCabecalho(params.motoclubeId, clubs, identities, users);
  const hojeLocal = getHojeLocalCampoGrande();
  const pagosPorMensalidade = mapPagamentosPorMensalidade(clube.motoclubeId, recebimentos);
  const membroPorId = new Map(
    members.filter((m) => m.motoclube_id === clube.motoclubeId).map((m) => [m.id, m]),
  );

  const mensalidadesClube = mensalidades.filter(
    (m) => m.motoclube_id === clube.motoclubeId && m.cancelada_em === null,
  );

  const opcoesPendentes: MensalidadePendenteOptionDTO[] = [];

  for (const m of mensalidadesClube) {
    const pagoBruto = pagosPorMensalidade.get(m.id) ?? 0;
    const pagoEfetivo = Math.min(m.valor_centavos, pagoBruto);
    const saldo = Math.max(0, m.valor_centavos - pagoBruto);
    if (saldo <= 0) continue;

    const membro = membroPorId.get(m.membro_id);
    const situacao: 'em_atraso' | 'a_vencer' = m.vencimento < hojeLocal ? 'em_atraso' : 'a_vencer';
    const compYm = m.competencia.slice(0, 7);

    opcoesPendentes.push({
      id: m.id,
      membroId: m.membro_id,
      membroNome: membro?.nome ?? 'Membro',
      membroApelido: membro?.apelido ?? null,
      membroFotoUrl: membro?.foto_url ?? null,
      competencia: compYm,
      competenciaRotulo: formatarMesAnoPtBr(compYm),
      vencimento: m.vencimento,
      vencimentoTexto: formatarVencimentoMensalidade(m.vencimento, situacao),
      valorCentavos: m.valor_centavos,
      pagoCentavos: pagoEfetivo,
      saldoCentavos: saldo,
      situacao,
    });
  }

  opcoesPendentes.sort((a, b) => {
    if (params.competencia) {
      const aMatch = a.competencia === params.competencia ? 0 : 1;
      const bMatch = b.competencia === params.competencia ? 0 : 1;
      if (aMatch !== bMatch) return aMatch - bMatch;
    }
    if (a.situacao !== b.situacao) {
      return a.situacao === 'em_atraso' ? -1 : 1;
    }
    const compDiff = b.competencia.localeCompare(a.competencia);
    if (compDiff !== 0) return compDiff;
    return a.membroNome.localeCompare(b.membroNome, 'pt-BR');
  });

  let mensalidadeInformadaQuitada: RegistrarRecebimentoContextoDTO['mensalidadeInformadaQuitada'] =
    null;
  let selecionada: MensalidadePendenteOptionDTO | null = null;

  if (params.mensalidadeId) {
    const matchPendente = opcoesPendentes.find((o) => o.id === params.mensalidadeId);
    if (matchPendente) {
      selecionada = matchPendente;
    } else {
      const quitada = mensalidadesClube.find((m) => m.id === params.mensalidadeId);
      if (quitada) {
        const membro = membroPorId.get(quitada.membro_id);
        mensalidadeInformadaQuitada = {
          membroNome: membro?.nome ?? 'Membro',
          competenciaRotulo: formatarMesAnoPtBr(quitada.competencia.slice(0, 7)),
        };
      }
    }
  }

  if (!selecionada && params.membroId) {
    selecionada =
      (params.competencia
        ? opcoesPendentes.find(
            (o) => o.membroId === params.membroId && o.competencia === params.competencia,
          )
        : undefined) ??
      opcoesPendentes.find((o) => o.membroId === params.membroId) ??
      null;
  }

  if (!selecionada && params.competencia) {
    selecionada = opcoesPendentes.find((o) => o.competencia === params.competencia) ?? null;
  }

  if (!selecionada) {
    selecionada = opcoesPendentes[0] ?? null;
  }

  return {
    clube,
    hojeLocal,
    selecionada,
    opcoesPendentes,
    mensalidadeInformadaQuitada,
  };
}

export async function registrarRecebimentoManual(
  input: RegistrarRecebimentoInput,
): Promise<RegistrarRecebimentoResult> {
  const fieldErrors: Record<string, string> = {};
  const hojeLocal = getHojeLocalCampoGrande();

  if (!input.mensalidadeId.trim()) {
    fieldErrors.mensalidadeId = 'Selecione a mensalidade em aberto.';
  }
  if (!Number.isInteger(input.valorCentavos) || input.valorCentavos <= 0) {
    fieldErrors.valor = 'Informe um valor maior que zero.';
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(input.recebidoEm)) {
    fieldErrors.recebidoEm = 'Informe uma data válida.';
  } else if (input.recebidoEm > hojeLocal) {
    fieldErrors.recebidoEm = 'A data do recebimento não pode estar no futuro.';
  }
  if (!FORMAS_VALIDAS.includes(input.forma)) {
    fieldErrors.forma = 'Selecione uma forma de pagamento válida.';
  }

  if (Object.keys(fieldErrors).length > 0) {
    throw new ServiceValidationError('Verifique os campos destacados.', fieldErrors);
  }

  const [clubs, members, mensalidades, recebimentos] = await Promise.all([
    motoclubesService.getAll(),
    membrosService.getAll(),
    mensalidadesService.getAll(),
    recebimentosService.getAll(),
  ]);

  const club = clubs.find((c) => c.id === input.motoclubeId && !c.excluido_em);
  if (!club) {
    throw new ServiceValidationError('Motoclube não encontrado.');
  }

  const mensalidade = mensalidades.find(
    (m) =>
      m.id === input.mensalidadeId &&
      m.motoclube_id === club.id &&
      m.cancelada_em === null,
  );
  if (!mensalidade) {
    throw new ServiceValidationError('Mensalidade não encontrada ou cancelada.', {
      mensalidadeId: 'Selecione uma mensalidade válida deste clube.',
    });
  }

  const pagosPorMensalidade = mapPagamentosPorMensalidade(club.id, recebimentos);
  const pagoAtual = pagosPorMensalidade.get(mensalidade.id) ?? 0;
  const saldoAtual = Math.max(0, mensalidade.valor_centavos - pagoAtual);

  if (saldoAtual <= 0) {
    throw new ServiceValidationError('Esta mensalidade já está quitada.', {
      mensalidadeId: 'Não há saldo em aberto para esta mensalidade.',
    });
  }

  if (saldoAtual !== input.saldoEsperadoCentavos) {
    throw new ServiceValidationError(
      'O saldo desta mensalidade foi atualizado recentemente. Revise os valores antes de confirmar.',
    );
  }

  if (input.valorCentavos > saldoAtual) {
    throw new ServiceValidationError(
      'O valor informado excede o saldo em aberto desta mensalidade.',
      {
        valor: 'Informe um valor menor ou igual ao saldo em aberto.',
      },
    );
  }

  // Proteção contra duplo envio imediato
  const agoraMs = Date.now();
  const duplicadoRecente = recebimentos.some((r) => {
    if (r.motoclube_id !== club.id || r.estornado_em !== null) return false;
    if (
      r.mensalidade_id !== mensalidade.id ||
      r.valor_centavos !== input.valorCentavos ||
      r.forma !== input.forma
    ) {
      return false;
    }
    const mesmaData = toLocalDateCampoGrande(r.recebido_em) === input.recebidoEm;
    const diffMs = Math.abs(agoraMs - new Date(r.recebido_em).getTime());
    return mesmaData && diffMs < 5000;
  });

  if (duplicadoRecente) {
    throw new ServiceValidationError(
      'Este recebimento já foi registrado há poucos instantes. Aguarde antes de enviar novamente.',
    );
  }

  const recebidoEmTimestamp =
    input.recebidoEm === hojeLocal
      ? new Date().toISOString()
      : `${input.recebidoEm}T12:00:00-04:00`;

  const observacaoTrimmed = input.observacao?.trim() || null;

  const criado = await recebimentosService.create({
    motoclube_id: club.id,
    mensalidade_id: mensalidade.id,
    valor_centavos: input.valorCentavos,
    recebido_em: recebidoEmTimestamp,
    forma: input.forma,
    observacao: observacaoTrimmed,
    gestor_id: input.gestorId || club.gestor_usuario_id,
    estornado_em: null,
  });

  const membro = members.find((m) => m.id === mensalidade.membro_id);
  const saldoRestanteCentavos = Math.max(0, saldoAtual - input.valorCentavos);

  return {
    recebimentoId: criado.id,
    mensalidadeId: mensalidade.id,
    membroId: mensalidade.membro_id,
    membroNome: membro?.nome ?? 'Membro',
    valorRecebidoCentavos: input.valorCentavos,
    saldoRestanteCentavos,
    quitada: saldoRestanteCentavos === 0,
  };
}
