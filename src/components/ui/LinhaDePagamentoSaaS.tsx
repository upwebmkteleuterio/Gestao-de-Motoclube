import { Check, FileText } from 'lucide-react';
import { formatBrlFromCents } from './ResumoDaCompetencia';

export interface LinhaDePagamentoSaaSProps {
  titulo: string;
  subtitulo: string;
  valorCentavos: number;
  statusLabel: string;
}

export function LinhaDePagamentoSaaS({
  titulo,
  subtitulo,
  valorCentavos,
  statusLabel,
}: LinhaDePagamentoSaaSProps) {
  return (
    <div className="grid min-h-[64px] grid-cols-[36px_minmax(0,1fr)_auto] items-center gap-2 rounded-[10px] border border-[#d7dbe3] dark:border-[#4e5158] bg-white dark:bg-gradient-to-r dark:from-[#191b1e] dark:to-[#16181b] px-3 py-2.5 tabular-nums">
      <FileText className="h-6 w-6 text-[#ff283e]" />
      <div className="grid border-l border-[#d7dbe3] dark:border-[#a5a7ac] pl-3">
        <strong className="text-sm font-bold leading-tight">{titulo}</strong>
        <small className="mt-0.5 text-xs text-[#5c6270] dark:text-[#bfc2cb]">{subtitulo}</small>
      </div>
      <div className="grid justify-items-end border-l border-[#d7dbe3] dark:border-[#a5a7ac] pl-3">
        <strong className="text-sm font-bold">{formatBrlFromCents(valorCentavos)}</strong>
        <span className="mt-1 inline-flex items-center gap-1 rounded-full border border-[#169e50] bg-[#136132] px-2.5 py-0.5 text-[11px] font-bold text-white">
          <Check className="h-3 w-3" strokeWidth={3} />
          {statusLabel}
        </span>
      </div>
    </div>
  );
}
