import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  alterarNivelMembro,
  atualizarMembroCompleto,
  cadastrarMembroCompleto,
  criarEventoComParticipacoes,
  getContextoCriarEvento,
  getContextoRegistrarRecebimento,
  getDetalheEvento,
  getMembroParaEdicao,
  getNivelEHistoricoMembro,
  getPainelGestor,
  getPerfilMembro,
  queryEventosClube,
  queryEventosEFrequenciaMembro,
  queryFinanceiroCompetencia,
  queryMembros,
  registrarRecebimentoManual,
} from '../services';
import type {
  AlterarNivelInput,
  AtualizarMembroInput,
  CadastrarMembroInput,
  CriarEventoInput,
  EventosQueryParams,
  FinanceiroQueryParams,
  FrequenciaMembroParams,
  MembrosQueryParams,
  PeriodoFiltroInput,
  RegistrarRecebimentoInput,
} from '../types';

export function usePainelGestor(motoclubeId = 'C01') {
  return useQuery({
    queryKey: ['painel-gestor', motoclubeId],
    queryFn: () => getPainelGestor(motoclubeId),
  });
}

export function useMembrosQuery(params: MembrosQueryParams) {
  return useQuery({
    queryKey: ['membros', 'lista', params],
    queryFn: () => queryMembros(params),
    placeholderData: keepPreviousData,
  });
}

export function usePerfilMembro(motoclubeId: string, membroId: string | undefined) {
  return useQuery({
    queryKey: ['membros', 'perfil', motoclubeId, membroId],
    queryFn: () => getPerfilMembro(motoclubeId, membroId ?? ''),
    enabled: Boolean(membroId),
  });
}

export function useMembroParaEdicao(motoclubeId: string, membroId: string | undefined) {
  return useQuery({
    queryKey: ['membros', 'edicao', motoclubeId, membroId],
    queryFn: () => getMembroParaEdicao(motoclubeId, membroId ?? ''),
    enabled: Boolean(membroId),
  });
}

export function useCadastrarMembro() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (input: CadastrarMembroInput) => cadastrarMembroCompleto(input),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['membros'] });
      qc.invalidateQueries({ queryKey: ['painel-gestor'] });
      qc.invalidateQueries({ queryKey: ['niveis'] });
      qc.invalidateQueries({ queryKey: ['vinculos'] });
    },
  });
}

export function useAtualizarMembro() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (input: AtualizarMembroInput) => atualizarMembroCompleto(input),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['membros'] });
      qc.invalidateQueries({ queryKey: ['painel-gestor'] });
      qc.invalidateQueries({ queryKey: ['usuarios'] });
      qc.invalidateQueries({ queryKey: ['vinculos'] });
      qc.invalidateQueries({ queryKey: ['financeiro'] });
    },
  });
}

export function useNivelEHistorico(
  motoclubeId: string,
  membroId: string | undefined,
  filtro: PeriodoFiltroInput,
) {
  return useQuery({
    queryKey: ['membros', 'nivel-historico', motoclubeId, membroId, filtro],
    queryFn: () => getNivelEHistoricoMembro(motoclubeId, membroId ?? '', filtro),
    enabled: Boolean(membroId),
    placeholderData: keepPreviousData,
  });
}

export function useAlterarNivelMembro() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (input: AlterarNivelInput) => alterarNivelMembro(input),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['membros'] });
      qc.invalidateQueries({ queryKey: ['niveis'] });
      qc.invalidateQueries({ queryKey: ['historico_niveis'] });
      qc.invalidateQueries({ queryKey: ['painel-gestor'] });
    },
  });
}

export function useFinanceiroCompetencia(params: FinanceiroQueryParams) {
  return useQuery({
    queryKey: ['financeiro', 'competencia', params],
    queryFn: () => queryFinanceiroCompetencia(params),
    placeholderData: keepPreviousData,
  });
}

export function useContextoRegistrarRecebimento(params: {
  motoclubeId: string;
  mensalidadeId?: string;
  membroId?: string;
  competencia?: string;
}) {
  return useQuery({
    queryKey: ['financeiro', 'recebimento-contexto', params],
    queryFn: () => getContextoRegistrarRecebimento(params),
  });
}

export function useRegistrarRecebimento() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (input: RegistrarRecebimentoInput) => registrarRecebimentoManual(input),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['financeiro'] });
      qc.invalidateQueries({ queryKey: ['recebimentos'] });
      qc.invalidateQueries({ queryKey: ['painel-gestor'] });
      qc.invalidateQueries({ queryKey: ['membros'] });
    },
  });
}

export function useEventosEFrequenciaMembro(params: FrequenciaMembroParams) {
  return useQuery({
    queryKey: ['membros', 'frequencia-eventos', params],
    queryFn: () => queryEventosEFrequenciaMembro(params),
    enabled: Boolean(params.membroId),
    placeholderData: keepPreviousData,
  });
}

export function useEventosClube(params: EventosQueryParams) {
  return useQuery({
    queryKey: ['eventos', 'clube', params],
    queryFn: () => queryEventosClube(params),
    placeholderData: keepPreviousData,
  });
}

export function useContextoCriarEvento(motoclubeId = 'C01') {
  return useQuery({
    queryKey: ['eventos', 'criar-contexto', motoclubeId],
    queryFn: () => getContextoCriarEvento(motoclubeId),
  });
}

export function useDetalheEvento(motoclubeId: string, eventoId: string | undefined) {
  return useQuery({
    queryKey: ['eventos', 'detalhe', motoclubeId, eventoId],
    queryFn: () => getDetalheEvento(motoclubeId, eventoId ?? ''),
    enabled: Boolean(eventoId),
  });
}

export function useCriarEvento() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (input: CriarEventoInput) => criarEventoComParticipacoes(input),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['eventos'] });
      qc.invalidateQueries({ queryKey: ['painel-gestor'] });
      qc.invalidateQueries({ queryKey: ['membros'] });
      qc.invalidateQueries({ queryKey: ['participacoes'] });
    },
  });
}

