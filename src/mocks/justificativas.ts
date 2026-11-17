import type { Justificativa } from '../types';

export const justificativasMock: Justificativa[] = [
  {
    id: 'J01',
    participacao_id: 'P04',
    descricao: 'Tive um imprevisto familiar e não consegui participar do evento.',
    enviada_em: '2026-11-02T09:15:00Z',
    status: 'pendente',
    analisada_por: null,
    analisada_em: null,
    observacao_decisao: null,
    origem: 'membro',
    criada_por: 'U08',
  },
  {
    id: 'J02',
    participacao_id: 'P05',
    descricao: 'Viagem profissional previamente comunicada à diretoria.',
    enviada_em: '2026-09-06T12:00:00Z',
    status: 'aceita',
    analisada_por: 'U01',
    analisada_em: '2026-09-07T14:20:00Z',
    observacao_decisao: 'Comprovante verificado.',
    origem: 'membro',
    criada_por: 'U07',
  },
];
