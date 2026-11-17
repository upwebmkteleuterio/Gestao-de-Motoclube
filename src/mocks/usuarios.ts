import type { Usuario } from '../types';

const FOTO_RAFAEL = 'https://saltonaweb.sh27.com.br/sistemas/motoclube/previa-rafael.jpg';
const FOTO_BRUNO = 'https://saltonaweb.sh27.com.br/sistemas/motoclube/previa-bruno.jpg';
const FOTO_JULIANA = 'https://saltonaweb.sh27.com.br/sistemas/motoclube/previa-juliana.jpg';
const FOTO_CAMILA = 'https://saltonaweb.sh27.com.br/sistemas/motoclube/previa-camila.jpg';

export const usuariosMock: Usuario[] = [
  { id: 'U00', nome: 'Superadmin Global', email: 'superadmin@motoclub.app', foto_url: null },
  { id: 'U01', nome: 'Ricardo Almeida', email: 'ricardo@example.com', foto_url: FOTO_RAFAEL },
  { id: 'U02', nome: 'Marcos Azevedo', email: 'marcos@example.com', foto_url: FOTO_BRUNO },
  { id: 'U03', nome: 'Camila Rocha', email: 'camila@example.com', foto_url: FOTO_CAMILA },
  { id: 'U04', nome: 'André Martins', email: 'andre@example.com', foto_url: FOTO_RAFAEL },
  { id: 'U05', nome: 'Paulo Costa', email: 'paulo@example.com', foto_url: FOTO_BRUNO },
  { id: 'U06', nome: 'Juliana Lima', email: 'juliana@example.com', foto_url: FOTO_JULIANA },
  { id: 'U07', nome: 'Rafael Oliveira', email: 'rafael@example.com', foto_url: FOTO_RAFAEL },
  { id: 'U08', nome: 'Bruno Souza', email: 'bruno@example.com', foto_url: FOTO_BRUNO },
  { id: 'U09', nome: 'Juliana Costa', email: 'juliana.costa@example.com', foto_url: FOTO_JULIANA },
  { id: 'U10', nome: 'Camila Mendes', email: 'camila.mendes@example.com', foto_url: FOTO_CAMILA },
  { id: 'U11', nome: 'André Ferreira', email: 'andre.ferreira@example.com', foto_url: FOTO_RAFAEL },
  { id: 'U12', nome: 'Camila Martins', email: 'camila.martins@example.com', foto_url: FOTO_CAMILA },
  { id: 'U13', nome: 'Tiago Almeida', email: 'tiago.almeida@example.com', foto_url: FOTO_BRUNO },
];
