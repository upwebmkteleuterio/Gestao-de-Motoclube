import type { PainelGestorDTO } from '../types';
import {
  buildClubeCabecalho,
  calcularFrequenciaGeralClube,
  formatarDataEvento,
  mapPagamentosPorMensalidade,
} from './calculos';
import { eventosService } from './eventos';
import { identidadeMotoclubeService } from './identidadeMotoclube';
import { membrosService } from './membros';
import { mensalidadesService } from './mensalidades';
import { motoclubesService } from './motoclubes';
import { participacoesService } from './participacoes';
import { recebimentosService } from './recebimentos';
import { usuariosService } from './usuarios';

export async function getPainelGestor(motoclubeId: string): Promise<PainelGestorDTO> {
  const [clubs, identities, users, members, mensalidades, recebimentos, eventos, participacoes] =
    await Promise.all([
      motoclubesService.getAll(),
      identidadeMotoclubeService.getAll(),
      usuariosService.getAll(),
      membrosService.getAll(),
      mensalidadesService.getAll(),
      recebimentosService.getAll(),
      eventosService.getAll(),
      participacoesService.getAll(),
    ]);

  const clube = buildClubeCabecalho(motoclubeId, clubs, identities, users);

  const membrosDoClube = members.filter((m) => m.motoclube_id === clube.motoclubeId);
  const membrosAtivos = membrosDoClube.filter((m) => m.status === 'ativo').length;

  const pagosPorMensalidade = mapPagamentosPorMensalidade(clube.motoclubeId, recebimentos);
  const mensalidadesPendentes = mensalidades.filter((m) => {
    if (m.motoclube_id !== clube.motoclubeId || m.cancelada_em !== null) return false;
    const pago = pagosPorMensalidade.get(m.id) ?? 0;
    return Math.max(0, m.valor_centavos - pago) > 0;
  }).length;

  const frequenciaGeralPercentual = calcularFrequenciaGeralClube(
    clube.motoclubeId,
    eventos,
    participacoes,
  );

  const publicados = eventos
    .filter((e) => e.motoclube_id === clube.motoclubeId && e.estado === 'publicado')
    .sort((a, b) => new Date(a.inicio_em).getTime() - new Date(b.inicio_em).getTime());

  const agoraMs = Date.now();
  const proximo =
    publicados.find((e) => new Date(e.inicio_em).getTime() >= agoraMs) ?? publicados[0] ?? null;

  let proximoEvento: PainelGestorDTO['proximoEvento'] = null;
  if (proximo) {
    const confirmados = participacoes.filter(
      (p) =>
        p.motoclube_id === clube.motoclubeId &&
        p.evento_id === proximo.id &&
        p.confirmacao === 'confirmada',
    );
    const avatares = confirmados.slice(0, 3).map((p) => {
      const membro = membrosDoClube.find((m) => m.id === p.membro_id);
      return {
        nome: membro?.nome ?? 'Membro',
        fotoUrl: membro?.foto_url ?? null,
      };
    });

    proximoEvento = {
      id: proximo.id,
      titulo: proximo.titulo,
      categoria: proximo.tipo,
      fotoUrl: proximo.foto_url,
      dataTexto: formatarDataEvento(proximo.inicio_em),
      local: proximo.local,
      confirmadosTotal: confirmados.length,
      confirmadosAvatares: avatares,
    };
  }

  return {
    clube,
    membrosAtivos,
    mensalidadesPendentes,
    frequenciaGeralPercentual,
    proximoEvento,
  };
}
