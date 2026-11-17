import { KpiCornerDot } from './KpiCornerDot';

export interface ResumoDaCompetenciaProps {
  previstoCentavos: number;
  recebidoCentavos: number;
  pendenteCentavos: number;
  emDiaCount: number;
  pendentesCount: number;
}

export function formatBrlFromCents(cents: number): string {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cents / 100);
}

export function ResumoDaCompetencia({
  previstoCentavos,
  recebidoCentavos,
  pendenteCentavos,
  emDiaCount,
  pendentesCount,
}: ResumoDaCompetenciaProps) {
  return (
    <section className="relative overflow-hidden grid gap-2.5 rounded-[12px] border border-[#d7dbe3] dark:border-[#85868a] bg-white dark:bg-gradient-to-br dark:from-[#151719] dark:to-[#101112] p-3.5 tabular-nums">
      <KpiCornerDot tone="accent" />
      <div>
        <p className="text-[13px] text-[#5c6270] dark:text-[#bfc2cb]">Previsto no mês</p>
        <h2 className="text-2xl font-bold leading-tight">{formatBrlFromCents(previstoCentavos)}</h2>
      </div>
      <dl className="grid grid-cols-2">
        <div>
          <dt className="flex items-center gap-1.5 text-[13px] text-[#5c6270] dark:text-[#bfc2cb]">
            <span className="text-[#15803d] dark:text-[#86de9b]" aria-hidden="true">●</span> Recebido
          </dt>
          <dd className="text-[17px] font-bold">{formatBrlFromCents(recebidoCentavos)}</dd>
        </div>
        <div className="border-l border-[#d7dbe3] dark:border-[#777] pl-3">
          <dt className="flex items-center gap-1.5 text-[13px] text-[#5c6270] dark:text-[#bfc2cb]">
            <span className="text-[#b45309] dark:text-[#ffb35c]" aria-hidden="true">●</span> Pendente
          </dt>
          <dd className="text-[17px] font-bold">{formatBrlFromCents(pendenteCentavos)}</dd>
        </div>
      </dl>
      <footer className="border-t border-[#d7dbe3] dark:border-[#6b6e75] pt-2 text-center text-xs text-[#5c6270] dark:text-[#bfc2cb]">
        {emDiaCount} em dia • {pendentesCount} pendentes
      </footer>
    </section>
  );
}
