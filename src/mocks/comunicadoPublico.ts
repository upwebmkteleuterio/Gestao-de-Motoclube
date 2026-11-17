import type { ComunicadoPublico } from '../types';

export const comunicadoPublicoMock: ComunicadoPublico[] = [
  { id: 'CP01', comunicado_id: 'COM01', todos: true, nivel_id: null },
  { id: 'CP02', comunicado_id: 'COM02', todos: false, nivel_id: 'N02' },
];
