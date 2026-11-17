import { motoclubesMock } from '../mocks';
import type { Motoclube } from '../types';
import { createSimulatedRepository } from './repository';

export const motoclubesService = createSimulatedRepository<Motoclube>('motoclubes', motoclubesMock);
