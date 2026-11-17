import type { Ocorrencia } from '../types';

export const ocorrenciasMock: Ocorrencia[] = [
  {
    id: 'OC01',
    motoclube_id: 'C01',
    membro_id: 'M02',
    evento_id: 'E03',
    data: '2026-10-18',
    categoria: 'Conduta em deslocamento',
    descricao: 'Ultrapassagem fora da formação durante o comboio para Aquidauana.',
    visivel_membro: true,
    observacao_interna: 'Aguardar conversa com o capitão de estrada.',
    status: 'em_analise',
    decisao: null,
    gestor_id: 'U01',
  },
];
