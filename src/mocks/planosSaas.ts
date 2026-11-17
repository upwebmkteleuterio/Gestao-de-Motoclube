import type { PlanoSaas } from '../types';

export const planosSaasMock: PlanoSaas[] = [
  {
    id: 'essencial',
    nome: 'Essencial',
    preco_mensal_centavos: 9900,
    limite_afiliados: 50,
    disponivel: true,
    versao: 1,
  },
  {
    id: 'estrada',
    nome: 'Estrada',
    preco_mensal_centavos: 14900,
    limite_afiliados: 100,
    disponivel: true,
    versao: 1,
  },
  {
    id: 'irmandade',
    nome: 'Irmandade',
    preco_mensal_centavos: 24900,
    limite_afiliados: 250,
    disponivel: true,
    versao: 1,
  },
];
