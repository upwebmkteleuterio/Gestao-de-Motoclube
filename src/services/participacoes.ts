import { participacoesMock } from '../mocks';
import type { Participacao } from '../types';
import { createSimulatedRepository } from './repository';

export const participacoesService = createSimulatedRepository<Participacao>('participacoes', participacoesMock);
