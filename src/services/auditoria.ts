import { auditoriaMock } from '../mocks';
import type { Auditoria } from '../types';
import { createSimulatedRepository } from './repository';

export const auditoriaService = createSimulatedRepository<Auditoria>('auditoria', auditoriaMock);
