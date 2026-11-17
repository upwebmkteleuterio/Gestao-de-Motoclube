import { historicoNiveisMock } from '../mocks';
import type { HistoricoNivel } from '../types';
import { createSimulatedRepository } from './repository';

export const historicoNiveisService = createSimulatedRepository<HistoricoNivel>(
  'historico_niveis',
  historicoNiveisMock,
);
