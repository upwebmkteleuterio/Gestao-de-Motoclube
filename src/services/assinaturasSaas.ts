import { assinaturasSaasMock } from '../mocks';
import type { AssinaturaSaas } from '../types';
import { createSimulatedRepository } from './repository';

export const assinaturasSaasService = createSimulatedRepository<AssinaturaSaas>(
  'assinaturas_saas',
  assinaturasSaasMock,
);
