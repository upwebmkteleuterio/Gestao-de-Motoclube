import { comunicadoPublicoMock } from '../mocks';
import type { ComunicadoPublico } from '../types';
import { createSimulatedRepository } from './repository';

export const comunicadoPublicoService = createSimulatedRepository<ComunicadoPublico>(
  'comunicado_publico',
  comunicadoPublicoMock,
);
