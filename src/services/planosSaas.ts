import { planosSaasMock } from '../mocks';
import type { PlanoSaas } from '../types';
import { createSimulatedRepository } from './repository';

export const planosSaasService = createSimulatedRepository<PlanoSaas>('planos_saas', planosSaasMock);
