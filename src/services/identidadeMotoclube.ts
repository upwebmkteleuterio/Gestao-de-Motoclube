import { identidadeMotoclubeMock } from '../mocks';
import type { IdentidadeMotoclube } from '../types';
import { createSimulatedRepository } from './repository';

export const identidadeMotoclubeService = createSimulatedRepository<IdentidadeMotoclube>(
  'identidade_motoclube',
  identidadeMotoclubeMock,
);
