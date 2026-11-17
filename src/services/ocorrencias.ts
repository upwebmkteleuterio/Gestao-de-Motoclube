import { ocorrenciasMock } from '../mocks';
import type { Ocorrencia } from '../types';
import { createSimulatedRepository } from './repository';

export const ocorrenciasService = createSimulatedRepository<Ocorrencia>('ocorrencias', ocorrenciasMock);
