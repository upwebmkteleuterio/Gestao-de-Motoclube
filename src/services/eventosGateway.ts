import { eventosGatewayMock } from '../mocks';
import type { EventoGateway } from '../types';
import { createSimulatedRepository } from './repository';

export const eventosGatewayService = createSimulatedRepository<EventoGateway>(
  'eventos_gateway',
  eventosGatewayMock,
);
