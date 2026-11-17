import { CheckCircle2, ChevronRight, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface LinhaDeRegistroDisciplinarDoMembroProps {
  id: string;
  categoria: string;
  dataTexto: string;
  eventoTitulo?: string | null;
  status: 'em_analise' | 'concluida';
}

export function LinhaDeRegistroDisciplinarDoMembro({
  id,
  categoria,
  dataTexto,
  eventoTitulo,
  status,
}: LinhaDeRegistroDisciplinarDoMembroProps) {
  const done = status === 'concluida';

  return (
    <Link
      to={`/membro/disciplina/${id}`}
      className="grid grid-cols-[45px_minmax(0,1fr)_16px] items-center gap-2 rounded-[12px] border border-[#d7dbe3] dark:border-[#54565d] bg-white dark:bg-[#17191d] px-3 py-2 text-[#111318] dark:text-[#f6f7f9] no-underline transition-colors hover:bg-[#f5f6f8] dark:hover:bg-[#282d35]"
    >
      <span className="grid place-items-center text-[#ff273b]">
        <Shield className="h-7 w-7" />
      </span>
      <span className="min-w-0 border-l border-[#9ca3af] dark:border-[#a4a6ac] pl-3">
        <strong className="block text-sm font-bold">{categoria}</strong>
        <small className="mt-0.5 grid gap-1 text-xs text-[#5c6270] dark:text-[#c4c5ca]">
          <span>
            {dataTexto}
            {eventoTitulo ? ` • ${eventoTitulo}` : ''}
          </span>
          <span
            className={`inline-flex items-center gap-1 font-bold ${
              done
                ? 'text-[#15803d] dark:text-[#86de9b]'
                : 'text-[#b45309] dark:text-[#ffb35c]'
            }`}
          >
            {done ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Clock className="h-3.5 w-3.5" />}
            {done ? 'Concluída' : 'Em análise'}
          </span>
        </small>
      </span>
      <ChevronRight className="h-4 w-4 text-[#5c6270] dark:text-[#bfc2cb]" aria-hidden="true" />
    </Link>
  );
}
