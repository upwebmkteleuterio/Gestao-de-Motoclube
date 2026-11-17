import type { ReactNode } from 'react';
import { ChevronRight, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface AtalhoDoPerfilProps {
  titulo: string;
  descricao: string;
  destino: string;
  icone?: ReactNode;
}

export function AtalhoDoPerfil({
  titulo,
  descricao,
  destino,
  icone = <Layers className="h-4 w-4" />,
}: AtalhoDoPerfilProps) {
  return (
    <Link
      to={destino}
      className="grid min-h-[54px] grid-cols-[27px_minmax(0,1fr)_16px] items-center gap-2.5 rounded-[12px] border border-[#d7dbe3] dark:border-[#66696f] bg-white dark:bg-gradient-to-br dark:from-[#1b1d20] dark:to-[#141517] px-3 py-2.5 text-[#111318] dark:text-[#f6f7f9] no-underline transition-colors hover:bg-[#f5f6f8] dark:hover:bg-[#2a2d32] hover:border-[#9aa1b0] dark:hover:border-[#a7aebb]"
    >
      <span className="grid place-items-center text-[#111318] dark:text-[#f6f7f9]">{icone}</span>
      <span className="min-w-0">
        <strong className="block text-sm font-bold leading-tight">{titulo}</strong>
        <small className="block text-xs text-[#5c6270] dark:text-[#bfc2cb]">{descricao}</small>
      </span>
      <ChevronRight className="h-4 w-4 text-[#5c6270] dark:text-[#bfc2cb]" aria-hidden="true" />
    </Link>
  );
}
