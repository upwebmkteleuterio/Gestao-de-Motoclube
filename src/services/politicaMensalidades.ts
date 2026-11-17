import { politicaMensalidadesMock } from '../mocks';
import type { PoliticaMensalidade } from '../types';
import { createSimulatedRepository } from './repository';

export const politicaMensalidadesService = createSimulatedRepository<PoliticaMensalidade>(
  'politica_mensalidades',
  politicaMensalidadesMock,
);
