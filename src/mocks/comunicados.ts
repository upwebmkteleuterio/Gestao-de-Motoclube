import type { Comunicado } from '../types';

export const comunicadosMock: Comunicado[] = [
  {
    id: 'COM01',
    motoclube_id: 'C01',
    titulo: 'Orientações para a Rota de Bonito',
    conteudo:
      'Nosso passeio será em 22 de novembro, com saída às 7h da sede em Campo Grande.\n\nRevise sua moto e chegue com antecedência.',
    capa_url: null,
    autor_id: 'U01',
    estado: 'publicado',
    fixado: true,
    publicado_em: '2026-11-05T10:00:00Z',
    atualizado_em: '2026-11-05T10:00:00Z',
  },
  {
    id: 'COM02',
    motoclube_id: 'C01',
    titulo: 'Calendário de manutenção da sede',
    conteudo: 'Confira os horários de apoio e organização da sede neste mês.',
    capa_url: null,
    autor_id: 'U01',
    estado: 'rascunho',
    fixado: false,
    publicado_em: null,
    atualizado_em: '2026-11-12T16:00:00Z',
  },
];
