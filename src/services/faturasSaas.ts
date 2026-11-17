import { faturasSaasMock } from '../mocks';
import type { FaturaSaas } from '../types';
import { createSimulatedRepository } from './repository';

export const faturasSaasService = createSimulatedRepository<FaturaSaas>('faturas_saas', faturasSaasMock);
