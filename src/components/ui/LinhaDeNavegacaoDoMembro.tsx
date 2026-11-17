import type { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface LinhaDeNavegacaoDoMembroProps {
  icone: ReactNode;
  titulo: string;
  descricao: string;
  destino: string;
  tomIcone?: 'good' | 'danger' | 'neutral';
}

export function LinhaDeNavegacaoDoMembro({
  icone,
  titulo,
  descricao,
  destino,
  tomIcone = 'neutral',
}: LinhaDeNavegacaoDoMembroProps) {
  const iconToneClass =
    tomIcone === 'good'
      ? 'text-[#15803d] dark:text-[#86de9b]'
      : tomIcone === 'danger'
        ? 'text-[#ff273b]'
        : 'text-[#111318] dark:text-[#f6f7f9]';

  return (
    <Link
      to={destino}
      className="grid grid-cols-[36px_minmax(0,1fr)_16px] items-center gap-2 rounded-[12px] border border-[#d7dbe3] dark:border-[#54565d] bg-white dark:bg-[#17191d] px-2.5 py-2.5 text-[#111318] dark:text-[#f6f7f9] no-underline transition-colors hover:bg-[#f5f6f8] dark:hover:bg-[#282d35] hover:border-[#9aa1b0] dark:hover:border-[#a0a4ad]"
    >
      <span className={`grid place-items-center ${iconToneClass}`}>{icone}</span>
      <span className="block min-w-0 border-l border-[#9ca3af] dark:border-[#a4a6ac] pl-2.5">
        <strong className="block text-sm font-bold leading-tight">{titulo}</strong>
        <small className="mt-0.5 block text-xs text-[#5c6270] dark:text-[#e0e1e6]">
          {descricao}
        </small>
      </span>
      <ChevronRight className="h-4 w-4 text-[#5c6270] dark:text-[#bfc2cb]" aria-hidden="true" />
    </Link>
  );
}
