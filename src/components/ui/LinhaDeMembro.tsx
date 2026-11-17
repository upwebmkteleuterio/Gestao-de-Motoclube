import { Check, ChevronRight, Clock } from 'lucide-react';
import { Avatar } from '../primitives';

export interface LinhaDeMembroProps {
  id: string;
  nome: string;
  apelido?: string | null;
  avatarUrl?: string | null;
  nivel: string;
  ingressoTexto: string;
  frequenciaPercentual: number | null;
  situacaoFinanceira: 'em_dia' | 'em_atraso';
  onOpen: (id: string) => void;
}

export function getFrequencyColorClass(percent: number | null): string {
  if (percent === null) return 'text-[#5c6270] dark:text-[#bfc2cb]';
  if (percent >= 70) return 'text-[#15803d] dark:text-[#86de9b]';
  if (percent >= 50) return 'text-[#b45309] dark:text-[#ffb35c]';
  return 'text-[#dc2626] dark:text-[#ff6371]';
}

export function LinhaDeMembro({
  id,
  nome,
  apelido,
  avatarUrl,
  nivel,
  ingressoTexto,
  frequenciaPercentual,
  situacaoFinanceira,
  onOpen,
}: LinhaDeMembroProps) {
  const freqColor = getFrequencyColorClass(frequenciaPercentual);
  const finColor =
    situacaoFinanceira === 'em_dia'
      ? 'text-[#15803d] dark:text-[#86de9b]'
      : 'text-[#b45309] dark:text-[#ffb35c]';

  return (
    <button
      type="button"
      onClick={() => onOpen(id)}
      className="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2.5 rounded-[12px] border border-[#d7dbe3] dark:border-[#42454e] bg-white dark:bg-[#191b20] p-2.5 text-left transition-colors hover:bg-[#f5f6f8] dark:hover:bg-[#30343e] hover:border-[#9aa1b0] dark:hover:border-[#a7aebb]"
    >
      <Avatar name={nome} src={avatarUrl} size="md" />
      <span className="min-w-0">
        <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <strong className="text-[15px] font-bold text-[#111318] dark:text-[#f6f7f9]">{nome}</strong>
          <span className="rounded-full border border-[#d7dbe3] dark:border-[#42454e] bg-[#eceef2] dark:bg-[#191b20] px-2 py-0.5 text-[11px] font-medium whitespace-nowrap">
            {nivel}
          </span>
        </span>
        <small className="block text-xs text-[#5c6270] dark:text-[#bfc2cb]">
          {apelido ? `“${apelido}” · ` : ''}
          {ingressoTexto}
        </small>
        <span className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#5c6270] dark:text-[#bfc2cb]">
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap tabular-nums">
            <span className={`attendance-bars ${freqColor}`} aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            {frequenciaPercentual === null ? 'Sem dados' : `Frequência ${frequenciaPercentual}%`}
          </span>
          <span
            className={`inline-flex items-center gap-1.5 border-l border-[#d7dbe3] dark:border-[#42454e] pl-2 whitespace-nowrap ${finColor}`}
          >
            {situacaoFinanceira === 'em_dia' ? (
              <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-[#15803d] dark:bg-[#86de9b] text-white dark:text-[#0c0d10]">
                <Check className="h-2.5 w-2.5" strokeWidth={3} />
              </span>
            ) : (
              <Clock className="h-3.5 w-3.5" />
            )}
            {situacaoFinanceira === 'em_dia' ? 'Em dia' : 'Em atraso'}
          </span>
        </span>
      </span>
      <ChevronRight className="h-4 w-4 text-[#5c6270] dark:text-[#bfc2cb]" aria-hidden="true" />
    </button>
  );
}
