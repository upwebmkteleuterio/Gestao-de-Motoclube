import type { EventoGateway } from '../types';

export const eventosGatewayMock: EventoGateway[] = [
  {
    id: 'EG01',
    external_id: 'evt_gw_1101',
    tipo: 'invoice.paid',
    recebido_em: '2026-11-03T13:10:05Z',
    processado_em: '2026-11-03T13:10:06Z',
    resultado: 'processed',
  },
];
