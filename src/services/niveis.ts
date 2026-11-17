import { niveisMock } from '../mocks';
import type { Nivel } from '../types';
import { createSimulatedRepository } from './repository';

export const niveisService = createSimulatedRepository<Nivel>('niveis', niveisMock);
