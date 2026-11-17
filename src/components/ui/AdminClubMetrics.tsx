import { Bike, Coins, FileText } from 'lucide-react';
import { KpiCornerDot } from './KpiCornerDot';
import { formatBrlFromCents } from './ResumoDaCompetencia';

export interface AdminClubMetricsProps {
  totalMotoclubes: number;
  recebidoCentavos: number;
  abertoCentavos: number;
  competencia: string;
  competencias?: { value: string; label: string }[];
  onCompetenciaChange?: (value: string) => void;
}

const DEFAULT_COMPETENCIAS = [
  { value: '2026-11', label: 'Novembro de 2026' },
  { value: '2026-10', label: 'Outubro de 2026' },
  { value: '2026-09', label: 'Setembro de 2026' },
];

export function AdminClubMetrics({
  totalMotoclubes,
  recebidoCentavos,
  abertoCentavos,
  competencia,
  competencias = DEFAULT_COMPETENCIAS,
  onCompetenciaChange,
}: AdminClubMetricsProps) {
  return (
    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-[1.07fr_1fr_1.06fr_0.76fr] items-center tabular-nums">
      <div className="relative overflow-hidden grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-[8px] border border-[#d7dbe3] dark:border-[#3e3f43] bg-white dark:bg-[#17181b] px-3.5 py-2.5 min-h-[66px]">
        <KpiCornerDot tone="accent" />
        <span className="relative z-10 grid h-10 w-10 place-items-center rounded-[7px] bg-[#eceef2] dark:bg-[#28292c] text-[#111318] dark:text-[#f4f4f6]">
          <Bike className="h-4 w-4" />
        </span>
        <div className="grid gap-0.5 border-l border-[#d7dbe3] dark:border-[#48494f] pl-3">
          <span className="text-[11px] text-[#5c6270] dark:text-[#bfc0c5]">Motoclubes cadastrados</span>
          <strong className="text-xl font-bold leading-none">{totalMotoclubes}</strong>
          <small className="text-[10px] text-[#6d7380] dark:text-[#bfc0c5]">Base atual</small>
        </div>
      </div>

      <div className="relative overflow-hidden grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-[8px] border border-[#d7dbe3] dark:border-[#3e3f43] bg-white dark:bg-[#17181b] px-3.5 py-2.5 min-h-[66px]">
        <KpiCornerDot tone="positive" />
        <span className="relative z-10 grid h-10 w-10 place-items-center rounded-[7px] bg-[#eceef2] dark:bg-[#28292c] text-[#111318] dark:text-[#f4f4f6]">
          <Coins className="h-4 w-4" />
        </span>
        <div className="grid gap-0.5 border-l border-[#d7dbe3] dark:border-[#48494f] pl-3">
          <span className="text-[11px] text-[#5c6270] dark:text-[#bfc0c5]">Recebido no período</span>
          <strong className="text-xl font-bold leading-none">{formatBrlFromCents(recebidoCentavos)}</strong>
        </div>
      </div>

      <div className="relative overflow-hidden grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-[8px] border border-[#d7dbe3] dark:border-[#3e3f43] bg-white dark:bg-[#17181b] px-3.5 py-2.5 min-h-[66px]">
        <KpiCornerDot tone={abertoCentavos > 0 ? 'warning' : 'positive'} />
        <span className="relative z-10 grid h-10 w-10 place-items-center rounded-[7px] bg-[#eceef2] dark:bg-[#28292c] text-[#111318] dark:text-[#f4f4f6]">
          <FileText className="h-4 w-4" />
        </span>
        <div className="grid gap-0.5 border-l border-[#d7dbe3] dark:border-[#48494f] pl-3">
          <span className="text-[11px] text-[#5c6270] dark:text-[#bfc0c5]">Faturas em aberto</span>
          <strong className="text-xl font-bold leading-none">{formatBrlFromCents(abertoCentavos)}</strong>
        </div>
      </div>

      <select
        aria-label="Competência financeira"
        value={competencia}
        onChange={(e) => onCompetenciaChange?.(e.target.value)}
        className="h-9 w-full rounded-[6px] border border-[#d7dbe3] dark:border-[#47484e] bg-white dark:bg-[#1b1c1f] px-2.5 text-xs text-[#111318] dark:text-[#f0f0f3] focus:outline-none focus:border-[#a8abb6]"
      >
        {competencias.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}
