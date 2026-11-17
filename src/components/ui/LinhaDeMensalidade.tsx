import { CheckCircle2, ChevronRight, Clock } from 'lucide-react';
import { Avatar } from '../primitives';
import { formatBrlFromCents } from './ResumoDaCompetencia';

export interface LinhaDeMensalidadeProps {
  membroNome: string;
  apelido?: string | null;
  fotoUrl?: string | null;
  vencimentoTexto: string;
  saldoCentavos: number;
  valorTotalCentavos?: number;
  situacao: 'em_dia' | 'em_atraso' | 'a_vencer';
  onOpen?: () => void;
}

export function LinhaDeMensalidade({
  membroNome,
  apelido,
  fotoUrl,
  vencimentoTexto,
  saldoCentavos,
  valorTotalCentavos,
  situacao,
  onOpen,
}: LinhaDeMensalidadeProps) {
  const canPay = saldoCentavos > 0 && Boolean(onOpen);
  const displayAmount = saldoCentavos > 0 ? saldoCentavos : (valorTotalCentavos ?? saldoCentavos);
  const statusColor =
    situacao === 'em_dia'
      ? 'text-[#15803d] dark:text-[#86de9b]'
      : 'text-[#b45309] dark:text-[#ffb35c]';
  const statusLabel =
    situacao === 'em_dia' ? 'Em dia' : situacao === 'a_vencer' ? 'A vencer' : 'Em atraso';

  return (
    <button
      type="button"
      disabled={!canPay}
      aria-disabled={!canPay ? 'true' : undefined}
      onClick={onOpen}
      className="grid w-full grid-cols-[48px_minmax(0,1fr)_auto_12px] items-center gap-2 rounded-[12px] border border-[#d7dbe3] dark:border-[#42454e] bg-white dark:bg-[#191b20] p-2.5 text-left transition-colors enabled:hover:bg-[#f5f6f8] dark:enabled:hover:bg-[#282c34] disabled:opacity-95 disabled:cursor-default tabular-nums"
    >
      <Avatar name={membroNome} src={fotoUrl} className="h-[49px] w-[48px] rounded-[8px]" />
      <span className="min-w-0">
        <strong className="block truncate text-sm font-bold">{membroNome}</strong>
        {apelido && (
          <small className="block truncate text-[11px] text-[#5c6270] dark:text-[#bfc2cb]">
            “{apelido}”
          </small>
        )}
        <small className="block truncate text-[11px] text-[#5c6270] dark:text-[#bfc2cb]">
          {vencimentoTexto}
        </small>
      </span>
      <span className="border-l border-[#d7dbe3] dark:border-[#757781] pl-2 text-right text-xs">
        <strong className="block font-bold">{formatBrlFromCents(displayAmount)}</strong>
        <span className={`inline-flex items-center gap-1 text-[11px] ${statusColor}`}>
          {situacao === 'em_dia' ? (
            <CheckCircle2 className="h-3 w-3" />
          ) : (
            <Clock className="h-3 w-3" />
          )}
          {statusLabel}
        </span>
      </span>
      <ChevronRight
        className={`h-3.5 w-3.5 text-[#5c6270] dark:text-[#bfc2cb] ${canPay ? '' : 'opacity-30'}`}
        aria-hidden="true"
      />
    </button>
  );
}
