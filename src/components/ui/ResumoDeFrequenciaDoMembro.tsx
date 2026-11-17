import { BarChart3, Calendar, CheckCircle2 } from 'lucide-react';
import { KpiCornerDot } from './KpiCornerDot';

export interface ResumoDeFrequenciaDoMembroProps {
  previstos: number;
  presencas: number;
  taxaPercentual: number | null;
}

export function ResumoDeFrequenciaDoMembro({
  previstos,
  presencas,
  taxaPercentual,
}: ResumoDeFrequenciaDoMembroProps) {
  return (
    <dl
      aria-label="Frequência no período"
      className="relative overflow-hidden grid grid-cols-3 rounded-[9px] border border-[#d7dbe3] dark:border-[#54565d] bg-white dark:bg-[#17191d] py-2 tabular-nums"
    >
      <KpiCornerDot tone="accent" />
      <div className="flex min-w-0 flex-col items-center gap-1 px-1.5 text-center sm:flex-row sm:items-start sm:justify-center sm:gap-2 sm:px-2 sm:text-left">
        <Calendar className="mt-0.5 h-4 w-4 shrink-0" />
        <div className="min-w-0">
          <dd className="text-base font-extrabold leading-none sm:text-lg">{previstos}</dd>
          <dt className="mt-0.5 text-[10px] leading-tight text-[#5c6270] dark:text-[#dddfe3] sm:text-[11px]">
            Eventos previstos
          </dt>
        </div>
      </div>
      <div className="flex min-w-0 flex-col items-center gap-1 border-l border-[#d7dbe3] dark:border-[#62646a] px-1.5 text-center sm:flex-row sm:items-start sm:justify-center sm:gap-2 sm:px-2 sm:text-left">
        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#15803d] dark:text-[#65d83c]" />
        <div className="min-w-0">
          <dd className="text-base font-extrabold leading-none sm:text-lg">{presencas}</dd>
          <dt className="mt-0.5 text-[10px] leading-tight text-[#5c6270] dark:text-[#dddfe3] sm:text-[11px]">
            Presenças
          </dt>
        </div>
      </div>
      <div className="flex min-w-0 flex-col items-center gap-1 border-l border-[#d7dbe3] dark:border-[#62646a] px-1.5 text-center sm:flex-row sm:items-start sm:justify-center sm:gap-2 sm:px-2 sm:text-left">
        <BarChart3 className="mt-0.5 h-4 w-4 shrink-0 text-[#ff273b]" />
        <div className="min-w-0">
          <dd className="text-base font-extrabold leading-none sm:text-lg">
            {taxaPercentual === null ? '—' : `${taxaPercentual}%`}
          </dd>
          <dt className="mt-0.5 text-[10px] leading-tight text-[#5c6270] dark:text-[#dddfe3] sm:text-[11px]">
            Frequência
          </dt>
        </div>
      </div>
    </dl>
  );
}
