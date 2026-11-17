import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  comunicadoPublicoService,
  comunicadosService,
  eventosService,
  faturasSaasService,
  identidadeMotoclubeService,
  justificativasService,
  membrosService,
  mensalidadesService,
  ocorrenciasService,
  pagamentosSaasService,
  participacoesService,
  planosSaasService,
  recebimentosService,
  assinaturasSaasService,
  motoclubesService,
  usuariosService,
} from '../services';
import type {
  CobrancaAdminResumo,
  ComunicadoResumo,
  IndicadoresAdmin,
  Membro,
  MotoclubeAdminResumo,
  OcorrenciaResumo,
  OcorrenciaStatus,
  PlanoAdminResumo,
} from '../types';

export function useMembros() {
  return useQuery({
    queryKey: ['membros'],
    queryFn: () => membrosService.getAll(),
  });
}

export function useCriarMembro() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: Omit<Membro, 'id'>) => membrosService.create(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['membros'] }),
  });
}

export function useEventos() {
  return useQuery({
    queryKey: ['eventos'],
    queryFn: () => eventosService.getAll(),
  });
}

export function useParticipacoes() {
  return useQuery({
    queryKey: ['participacoes'],
    queryFn: () => participacoesService.getAll(),
  });
}

export function useJustificativas() {
  return useQuery({
    queryKey: ['justificativas'],
    queryFn: () => justificativasService.getAll(),
  });
}

export function useMensalidades() {
  return useQuery({
    queryKey: ['mensalidades'],
    queryFn: () => mensalidadesService.getAll(),
  });
}

export function useRecebimentos() {
  return useQuery({
    queryKey: ['recebimentos'],
    queryFn: () => recebimentosService.getAll(),
  });
}

export function useOcorrencias(filtros?: { busca?: string; status?: OcorrenciaStatus }) {
  return useQuery<{
    registros: OcorrenciaResumo[];
    totais: { emAnalise: number; concluidas: number };
  }>({
    queryKey: ['ocorrencias', filtros],
    queryFn: async () => {
      const [ocorrencias, membros, eventos] = await Promise.all([
        ocorrenciasService.getAll(),
        membrosService.getAll(),
        eventosService.getAll(),
      ]);
      const allMapped: OcorrenciaResumo[] = ocorrencias.map((oc) => {
        const membro = membros.find((m) => m.id === oc.membro_id);
        const evento = eventos.find((e) => e.id === oc.evento_id);
        return {
          id: oc.id,
          membroId: oc.membro_id,
          membroNome: membro?.nome ?? 'Membro',
          membroApelido: membro?.apelido,
          membroFotoUrl: membro?.foto_url,
          eventoTitulo: evento?.titulo ?? null,
          data: oc.data,
          categoria: oc.categoria,
          status: oc.status,
          visivelMembro: oc.visivel_membro,
        };
      });
      const emAnalise = allMapped.filter((r) => r.status === 'em_analise').length;
      const concluidas = allMapped.filter((r) => r.status === 'concluida').length;
      const registros = allMapped.filter((r) => {
        if (filtros?.status && r.status !== filtros.status) return false;
        if (filtros?.busca && !r.membroNome.toLowerCase().includes(filtros.busca.toLowerCase())) {
          return false;
        }
        return true;
      });
      return { registros, totais: { emAnalise, concluidas } };
    },
  });
}

export function useComunicados() {
  return useQuery<ComunicadoResumo[]>({
    queryKey: ['comunicados'],
    queryFn: async () => {
      const [comunicados, publicos, usuarios] = await Promise.all([
        comunicadosService.getAll(),
        comunicadoPublicoService.getAll(),
        usuariosService.getAll(),
      ]);
      return comunicados.map((c) => {
        const autor = usuarios.find((u) => u.id === c.autor_id);
        const pub = publicos.filter((p) => p.comunicado_id === c.id);
        const isTodos = pub.some((p) => p.todos);
        return {
          id: c.id,
          titulo: c.titulo,
          resumo: c.conteudo.slice(0, 90),
          capaUrl: c.capa_url,
          autorNome: autor?.nome ?? 'Gestão',
          publicadoEm: c.publicado_em,
          estado: c.estado,
          fixado: c.fixado,
          publico: isTodos
            ? { todos: true }
            : {
                todos: false,
                nivelIds: pub.map((p) => p.nivel_id).filter((v): v is string => Boolean(v)),
                rotulo: 'Níveis selecionados',
              },
        };
      });
    },
  });
}

export function useMotoclubesAdmin() {
  return useQuery<MotoclubeAdminResumo[]>({
    queryKey: ['admin', 'motoclubes'],
    queryFn: async () => {
      const [clubs, users, subs, plans, invoices, members] = await Promise.all([
        motoclubesService.getAll(),
        usuariosService.getAll(),
        assinaturasSaasService.getAll(),
        planosSaasService.getAll(),
        faturasSaasService.getAll(),
        membrosService.getAll(),
      ]);
      return clubs
        .filter((c) => !c.excluido_em)
        .map((c) => {
          const gestor = users.find((u) => u.id === c.gestor_usuario_id);
          const sub = subs.find((s) => s.motoclube_id === c.id);
          const plan = plans.find((p) => p.id === sub?.plano_id);
          const fatura = invoices.find((f) => f.assinatura_id === sub?.id);
          const count = members.filter((m) => m.motoclube_id === c.id && m.status === 'ativo').length;
          return {
            id: c.id,
            nome: c.nome,
            cidade: c.cidade,
            uf: c.uf,
            gestorNome: gestor?.nome ?? '',
            gestorEmail: gestor?.email ?? '',
            gestorTelefone: c.telefone,
            planoId: plan?.id ?? '',
            planoNome: plan?.nome ?? '',
            valorContratadoCentavos: sub?.valor_contratado_centavos ?? 0,
            afiliadosAtivos: count,
            limiteContratado: sub?.limite_contratado ?? 0,
            assinaturaStatus: sub?.status ?? 'pendente',
            statusAcesso: c.status_acesso,
            proximaCobranca: sub?.proxima_cobranca ?? null,
            faturaAtualId: fatura?.id,
          };
        });
    },
  });
}

export function useIndicadoresAdmin(competencia = '2026-11') {
  return useQuery<IndicadoresAdmin>({
    queryKey: ['admin', 'indicadores', competencia],
    queryFn: async () => {
      const [clubs, invoices, payments] = await Promise.all([
        motoclubesService.getAll(),
        faturasSaasService.getAll(),
        pagamentosSaasService.getAll(),
      ]);
      const totalMotoclubes = clubs.filter((c) => !c.excluido_em).length;
      const recebidoPeriodoCentavos = payments
        .filter((p) => p.status === 'confirmado' && p.pago_em?.startsWith(competencia))
        .reduce((acc, p) => acc + p.valor_centavos, 0);
      const faturasEmAbertoCentavos = invoices
        .filter((f) => f.status !== 'pago' && f.status !== 'cancelada' && f.vencimento.startsWith(competencia))
        .reduce((acc, f) => acc + f.valor_centavos, 0);
      return { totalMotoclubes, recebidoPeriodoCentavos, faturasEmAbertoCentavos };
    },
  });
}

export function usePlanosAdmin() {
  return useQuery<PlanoAdminResumo[]>({
    queryKey: ['admin', 'planos'],
    queryFn: async () => {
      const [plans, subs] = await Promise.all([
        planosSaasService.getAll(),
        assinaturasSaasService.getAll(),
      ]);
      return plans.map((p) => ({
        id: p.id,
        nome: p.nome,
        precoMensalCentavos: p.preco_mensal_centavos,
        limiteAfiliados: p.limite_afiliados,
        disponivel: p.disponivel,
        versao: p.versao,
        assinaturasVinculadas: subs.filter((s) => s.plano_id === p.id && s.status !== 'cancelada').length,
      }));
    },
  });
}

export function useCobrancasAdmin() {
  return useQuery<CobrancaAdminResumo[]>({
    queryKey: ['admin', 'cobrancas'],
    queryFn: async () => {
      const [invoices, subs, clubs, plans] = await Promise.all([
        faturasSaasService.getAll(),
        assinaturasSaasService.getAll(),
        motoclubesService.getAll(),
        planosSaasService.getAll(),
      ]);
      return invoices.map((inv) => {
        const sub = subs.find((s) => s.id === inv.assinatura_id);
        const club = clubs.find((c) => c.id === sub?.motoclube_id);
        const plan = plans.find((p) => p.id === sub?.plano_id);
        return {
          id: inv.id,
          motoclubeId: club?.id ?? '',
          motoclubeNome: club?.nome ?? '',
          planoNome: plan?.nome ?? '',
          competencia: inv.competencia,
          valorCentavos: inv.valor_centavos,
          vencimento: inv.vencimento,
          status: inv.status,
          gatewayId: inv.gateway_id,
        };
      });
    },
  });
}

export function useJustificativasEParticipacoes() {
  return useQuery({
    queryKey: ['participacoes_com_justificativas'],
    queryFn: async () => {
      const [participacoes, justificativas] = await Promise.all([
        participacoesService.getAll(),
        justificativasService.getAll(),
      ]);
      return { participacoes, justificativas };
    },
  });
}

export function useIdentidadeAtiva(motoclubeId: string) {
  return useQuery({
    queryKey: ['identidade_motoclube', 'ativa', motoclubeId],
    queryFn: async () => {
      const items = await identidadeMotoclubeService.getAll();
      return items.find((item) => item.motoclube_id === motoclubeId) ?? items[0] ?? null;
    },
  });
}

