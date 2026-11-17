import type { PagamentoSaas } from '../types';

export const pagamentosSaasMock: PagamentoSaas[] = [
  {
    id: 'PG01',
    fatura_id: '1101',
    valor_centavos: 14900,
    status: 'confirmado',
    pago_em: '2026-11-03T13:10:00Z',
    meio: 'Cartão',
    gateway_id: 'pg_1101',
  },
  {
    id: 'PG02',
    fatura_id: '1102',
    valor_centavos: 24900,
    status: 'confirmado',
    pago_em: '2026-11-04T09:40:00Z',
    meio: 'Cartão',
    gateway_id: 'pg_1102',
  },
  {
    id: 'PG03',
    fatura_id: '1103',
    valor_centavos: 9900,
    status: 'confirmado',
    pago_em: '2026-11-05T08:15:00Z',
    meio: 'PIX',
    gateway_id: 'pg_1103',
  },
  {
    id: 'PG04',
    fatura_id: '1104',
    valor_centavos: 9900,
    status: 'confirmado',
    pago_em: '2026-11-05T10:00:00Z',
    meio: 'Cartão',
    gateway_id: 'pg_1104',
  },
];
