import { justificativasMock } from '../mocks';
import type { Justificativa } from '../types';
import { createSimulatedRepository } from './repository';

export const justificativasService = createSimulatedRepository<Justificativa>('justificativas', justificativasMock);
