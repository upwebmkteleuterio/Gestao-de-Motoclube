import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  identidadeMotoclubeService,
  motoclubesService,
  niveisService,
  membrosService,
} from '../services';
import type { IdentidadeDoClube, NivelResumo } from '../types';

export function useMotoclubes() {
  return useQuery({
    queryKey: ['motoclubes'],
    queryFn: () => motoclubesService.getAll(),
  });
}

export function useIdentidadeMotoclube(motoclubeId = 'C01') {
  return useQuery<IdentidadeDoClube>({
    queryKey: ['identidade_motoclube', motoclubeId],
    queryFn: async () => {
      const [clubs, identities] = await Promise.all([
        motoclubesService.getAll(),
        identidadeMotoclubeService.getAll(),
      ]);
      const club = clubs.find((c) => c.id === motoclubeId) ?? clubs[0];
      const identity = identities.find((i) => i.motoclube_id === club.id) ?? identities[0];
      return {
        motoclubeId: club.id,
        nome: club.nome,
        cidade: club.cidade,
        uf: club.uf,
        logoUrl: identity?.logo_url ?? null,
        paletaId: identity?.paleta_id ?? 'vermelho',
        corDestaqueHex: identity?.cor_destaque_hex ?? '#ED343B',
        atualizadoEm: identity?.atualizado_em ?? new Date().toISOString(),
      };
    },
  });
}

export function useSalvarIdentidade(motoclubeId = 'C01') {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (input: {
      nome: string;
      logoUrl?: string | null;
      paletaId: 'vermelho' | 'azul' | 'laranja';
      corDestaqueHex?: string;
    }) => {
      await motoclubesService.update(motoclubeId, { nome: input.nome });
      const identities = await identidadeMotoclubeService.getAll();
      const existing = identities.find((i) => i.motoclube_id === motoclubeId);
      const now = new Date().toISOString();
      if (existing) {
        await identidadeMotoclubeService.update(existing.id, {
          logo_url: input.logoUrl === undefined ? existing.logo_url : input.logoUrl,
          paleta_id: input.paletaId,
          cor_destaque_hex: input.corDestaqueHex ?? null,
          atualizado_em: now,
        });
      }
      return queryClient.invalidateQueries({ queryKey: ['identidade_motoclube', motoclubeId] });
    },
  });
}

export function useNiveisDoClube(motoclubeId = 'C01') {
  return useQuery<NivelResumo[]>({
    queryKey: ['niveis', motoclubeId],
    queryFn: async () => {
      const [niveis, membros] = await Promise.all([
        niveisService.getAll(),
        membrosService.getAll(),
      ]);
      return niveis
        .filter((n) => n.motoclube_id === motoclubeId)
        .sort((a, b) => a.ordem - b.ordem)
        .map((n) => ({
          id: n.id,
          nome: n.nome,
          ordem: n.ordem,
          totalMembros: membros.filter((m) => m.motoclube_id === motoclubeId && m.nivel_id === n.id).length,
        }));
    },
  });
}
