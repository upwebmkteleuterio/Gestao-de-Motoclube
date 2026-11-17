import { pagamentosSaasMock } from '../mocks';
import type { PagamentoSaas } from '../types';
import { createSimulatedRepository } from './repository';

export const pagamentosSaasService = createSimulatedRepository<PagamentoSaas>(
  'pagamentos_saas',
  pagamentosSaasMock,
);
