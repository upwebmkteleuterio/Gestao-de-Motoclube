import { Calendar, ChevronRight } from 'lucide-react';

export interface SeletorDePeriodoDosEventosProps {
  rotulo: string;
  onOpen: () => void;
}

export function SeletorDePeriodoDosEventos({
  rotulo,
  onOpen,
}: SeletorDePeriodoDosEventosProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-haspopup="dialog"
      className="grid min-h-[38px] w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2.5 rounded-[9px] border border-[#d7dbe3] dark:border-[#53565b] bg-white dark:bg-[#171a1e] px-3 py-1.5 text-left text-sm transition-colors hover:border-[#9aa1b0] dark:hover:border-[#a1a5ab]"
    >
      <Calendar className="h-4 w-4 text-[#ff273b]" />
      <span className="truncate">{rotulo}</span>
      <ChevronRight className="h-4 w-4 text-[#5c6270] dark:text-[#bfc2cb]" />
    </button>
  );
}
