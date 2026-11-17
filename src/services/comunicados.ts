import { comunicadosMock } from '../mocks';
import type { Comunicado } from '../types';
import { createSimulatedRepository } from './repository';

export const comunicadosService = createSimulatedRepository<Comunicado>('comunicados', comunicadosMock);
