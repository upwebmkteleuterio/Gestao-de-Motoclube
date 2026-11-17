import { CheckCircle2, ChevronLeft, ChevronRight, Clock, Coins } from 'lucide-react';
import { formatBrlFromCents } from './ResumoDaCompetencia';

export interface CompetenciaMembroItem {
  key: string;
  label: string;
  mesNome: string;
  vencimentoTexto: string;
  valorCentavos: number;
  pagoCentavos: number;
  futura?: boolean;
}

export interface CompetenciaESaldoDoMembroProps {
  competencias: CompetenciaMembroItem[];
  indiceAtual: number;
  onStep: (novoIndice: number) => void;
}

export function CompetenciaESaldoDoMembro({
  competencias,
  indiceAtual,
  onStep,
}: CompetenciaESaldoDoMembroProps) {
  const atual = competencias[indiceAtual] ?? competencias[0];
  if (!atual) return null;

  const saldo = Math.max(0, atual.valorCentavos - atual.pagoCentavos);
  const statusLabel = saldo === 0 ? 'Pago' : atual.futura ? 'A vencer' : 'Em atraso';
  const statusColor =
    saldo === 0 ? 'text-[#15803d] dark:text-[#86de9b]' : 'text-[#b45309] dark:text-[#ffb35c]';
  const StatusIcon = saldo === 0 ? CheckCircle2 : Clock;

  return (
    <div className="grid gap-2.5 tabular-nums">
      <div className="grid grid-cols-[44px_1fr_44px] items-center rounded-[12px] border border-[#d7dbe3] dark:border-[#54565d] bg-white dark:bg-[#17191d] text-center">
        <button
          type="button"
          aria-label="Mês anterior"
          disabled={indiceAtual <= 0}
          onClick={() => onStep(indiceAtual - 1)}
          className="grid min-h-[42px] place-items-center rounded-l-[11px] hover:bg-[#eceef2] dark:hover:bg-[#282d35] disabled:opacity-40"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <strong role="status" className="text-[17px] font-bold">
          {atual.label}
        </strong>
        <button
          type="button"
          aria-label="Próximo mês"
          disabled={indiceAtual >= competencias.length - 1}
          onClick={() => onStep(indiceAtual + 1)}
          className="grid min-h-[42px] place-items-center rounded-r-[11px] hover:bg-[#eceef2] dark:hover:bg-[#282d35] disabled:opacity-40"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <section
        aria-label="Saldo da competência"
        className="grid gap-1.5 rounded-[12px] border border-[#d7dbe3] dark:border-[#54565d] bg-white dark:bg-[#17191d] px-3.5 py-3"
      >
        <h2 className="text-base font-bold">Pendente no mês</h2>
        <strong className="text-3xl font-extrabold leading-none">{formatBrlFromCents(saldo)}</strong>
        <div>
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border border-current px-2.5 py-0.5 text-xs font-bold ${statusColor}`}
          >
            <StatusIcon className="h-3.5 w-3.5" />
            {statusLabel}
          </span>
        </div>
      </section>

      <div className="grid grid-cols-[36px_minmax(0,1fr)_auto] items-center gap-2 rounded-[12px] border border-[#d7dbe3] dark:border-[#54565d] bg-white dark:bg-[#17191d] px-3 py-2.5">
        <Coins className="h-5 w-5" />
        <span className="border-l border-[#9ca3af] dark:border-[#a4a6ac] pl-2.5">
          <strong className="block text-sm font-bold">Mensalidade de {atual.mesNome}</strong>
          <small className="block text-xs text-[#5c6270] dark:text-[#e0e1e6]">
            Vencimento: {atual.vencimentoTexto}
          </small>
        </span>
        <span className="grid justify-items-end gap-0.5 text-right">
          <strong className="text-sm font-bold">
            {formatBrlFromCents(saldo || atual.valorCentavos)}
          </strong>
          <span className={`inline-flex items-center gap-1 text-xs font-bold ${statusColor}`}>
            <StatusIcon className="h-3.5 w-3.5" />
            {statusLabel}
          </span>
        </span>
      </div>
    </div>
  );
}
