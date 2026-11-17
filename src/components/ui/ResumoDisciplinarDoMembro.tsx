import { Calendar, CheckCircle2, Clock, MapPin, Shield } from 'lucide-react';

export interface ResumoDisciplinarDoMembroProps {
  categoria: string;
  dataTexto: string;
  eventoTitulo?: string | null;
  status: 'em_analise' | 'concluida';
}

export function ResumoDisciplinarDoMembro({
  categoria,
  dataTexto,
  eventoTitulo,
  status,
}: ResumoDisciplinarDoMembroProps) {
  const done = status === 'concluida';

  return (
    <section className="rounded-[10px] border border-[#d7dbe3] dark:border-[#54565d] bg-white dark:bg-[#17191d] px-3.5 pt-3.5 pb-1">
      <div className="mb-3 grid grid-cols-[43px_minmax(0,1fr)] items-center gap-2.5">
        <Shield className="h-9 w-9 text-[#ff273b]" />
        <div className="grid justify-items-start gap-1 border-l border-[#9ca3af] dark:border-[#86888d] pl-3">
          <h2 className="text-base font-extrabold">{categoria}</h2>
          <span
            className={[
              'inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-bold',
              done
                ? 'border-[#43804b] bg-[#1d3825] text-[#a1edaa]'
                : 'border-[#704606] bg-[#412b0c] text-[#ffb35c]',
            ].join(' ')}
          >
            {done ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Clock className="h-3.5 w-3.5" />}
            {done ? 'Concluída' : 'Em análise'}
          </span>
        </div>
      </div>

      <dl className="m-0">
        <div className="flex items-center justify-between gap-3 border-t border-[#d7dbe3] dark:border-[#53545a] py-2">
          <dt className="flex items-center gap-3 text-sm font-bold">
            <Calendar className="h-5 w-5" />
            <span>Data</span>
          </dt>
          <dd className="text-[13px] text-[#5c6270] dark:text-[#e4e5e9]">{dataTexto}</dd>
        </div>
        {eventoTitulo && (
          <div className="flex items-center justify-between gap-3 border-t border-[#d7dbe3] dark:border-[#53545a] py-2">
            <dt className="flex items-center gap-3 text-sm font-bold">
              <MapPin className="h-5 w-5" />
              <span>Evento</span>
            </dt>
            <dd className="text-[13px] text-[#5c6270] dark:text-[#e4e5e9]">{eventoTitulo}</dd>
          </div>
        )}
      </dl>
    </section>
  );
}
