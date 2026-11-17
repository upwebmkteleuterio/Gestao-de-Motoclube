import type { Auditoria } from '../types';

export const auditoriaMock: Auditoria[] = [
  {
    id: 'AUD01',
    motoclube_id: 'C01',
    entidade: 'membros',
    registro_id: 'M01',
    antes: { nivel_id: 'N01' },
    depois: { nivel_id: 'N02' },
    autor_id: 'U01',
    criado_em: '2026-08-01T15:00:00Z',
    motivo: 'Progressão hierárquica',
  },
];
