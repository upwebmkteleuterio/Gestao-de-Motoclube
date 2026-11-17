import { Calendar, CheckCircle2, ChevronRight, Clock, MoreHorizontal } from 'lucide-react';
import { Avatar } from '../primitives';

export interface LinhaDeOcorrenciaProps {
  membroNome: string;
  apelido?: string | null;
  fotoUrl?: string | null;
  categoria: string;
  dataTexto: string;
  eventoTitulo?: string | null;
  status: 'em_analise' | 'concluida';
  onOpen?: () => void;
}

export function LinhaDeOcorrencia({
  membroNome,
  apelido,
  fotoUrl,
  categoria,
  dataTexto,
  eventoTitulo,
  status,
  onOpen,
}: LinhaDeOcorrenciaProps) {
  const done = status === 'concluida';

  return (
    <div className="grid grid-cols-[auto_minmax(0,1fr)_28px] items-center gap-2.5 rounded-[10px] border border-[#d7dbe3] dark:border-[#3d4047] bg-white dark:bg-[#191b20] py-2 pl-3 pr-2">
      <Avatar name={membroNome} src={fotoUrl} className="h-[70px] w-[73px] rounded-[9px]" />
      <div className="grid min-w-0 gap-0.5 border-l border-[#d7dbe3] dark:border-[#72747a] pl-2.5 leading-tight">
        <strong className="text-sm font-bold">{membroNome}</strong>
        {apelido && (
          <small className="text-[11px] text-[#5c6270] dark:text-[#bfc2cb]">“{apelido}”</small>
        )}
        <span className="text-[11px] font-medium">{categoria}</span>
        <small className="flex items-center gap-1 text-[11px] text-[#5c6270] dark:text-[#d0d2d7]">
          <Calendar className="h-3 w-3 shrink-0" />
          {dataTexto}
          {eventoTitulo ? ` • ${eventoTitulo}` : ''}
        </small>
        <span
          className={[
            'mt-0.5 inline-flex w-fit items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold',
            done
              ? 'border-[#86efac] dark:border-[#43804b] bg-[#dcfce7] dark:bg-[#1d3825] text-[#15803d] dark:text-[#a1edaa]'
              : 'border-[#fcd34d] dark:border-[#96601d] bg-[#fef3c7] dark:bg-[#40270f] text-[#b45309] dark:text-[#fdaa39]',
          ].join(' ')}
        >
          {done ? <CheckCircle2 className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
          {done ? 'Concluída' : 'Em análise'}
        </span>
      </div>
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Abrir ocorrência de ${membroNome}`}
        className="grid h-full content-center justify-items-center gap-2 text-[#5c6270] dark:text-[#bfc2cb] hover:text-[#111318] dark:hover:text-white"
      >
        <MoreHorizontal className="h-4 w-4" />
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
