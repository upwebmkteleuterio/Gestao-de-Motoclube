import { vinculosMock } from '../mocks';
import type { Vinculo } from '../types';
import { createSimulatedRepository } from './repository';

export const vinculosService = createSimulatedRepository<Vinculo>('vinculos', vinculosMock);
