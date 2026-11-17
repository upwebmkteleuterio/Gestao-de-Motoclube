import { auditoriaAcessoMock } from '../mocks';
import type { AuditoriaAcesso } from '../types';
import { createSimulatedRepository } from './repository';

export const auditoriaAcessoService = createSimulatedRepository<AuditoriaAcesso>(
  'auditoria_acesso',
  auditoriaAcessoMock,
);
