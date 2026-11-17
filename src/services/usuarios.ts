import { usuariosMock } from '../mocks';
import type { Usuario } from '../types';
import { createSimulatedRepository } from './repository';

export const usuariosService = createSimulatedRepository<Usuario>('usuarios', usuariosMock);
