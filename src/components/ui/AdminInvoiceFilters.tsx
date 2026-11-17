import { Search } from 'lucide-react';

export interface AdminInvoiceFiltersProps {
  query: string;
  onQueryChange: (value: string) => void;
  period: string;
  onPeriodChange: (value: string) => void;
  status: string;
  onStatusChange: (value: string) => void;
  periods?: { value: string; label: string }[];
}

const DEFAULT_PERIODS = [
  { value: '2026-11', label: 'Período: Novembro de 2026' },
  { value: '2026-10', label: 'Período: Outubro de 2026' },
  { value: 'todos', label: 'Período: Todos' },
];

export function AdminInvoiceFilters({
  query,
  onQueryChange,
  period,
  onPeriodChange,
  status,
  onStatusChange,
  periods = DEFAULT_PERIODS,
}: AdminInvoiceFiltersProps) {
  return (
    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-[1.85fr_1.07fr_1fr]">
      <label className="flex h-9 items-center gap-2 rounded-[5px] border border-[#d7dbe3] dark:border-[#424348] bg-white dark:bg-[#1c1d20] px-2.5 focus-within:border-[#96989f]">
        <Search className="h-4 w-4 shrink-0 text-[#5c6270] dark:text-[#c1c2c6]" />
        <span className="sr-only">Buscar motoclube ou cobrança</span>
        <input
          type="search"
          placeholder="Buscar motoclube ou cobrança"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          className="w-full min-w-0 bg-transparent text-xs text-[#111318] dark:text-[#f7f7f8] placeholder:text-[#7c8290] dark:placeholder:text-[#c1c2c6] focus:outline-none"
        />
      </label>

      <select
        aria-label="Período por vencimento"
        value={period}
        onChange={(e) => onPeriodChange(e.target.value)}
        className="h-9 rounded-[5px] border border-[#d7dbe3] dark:border-[#424348] bg-white dark:bg-[#1c1d20] px-2.5 text-xs text-[#111318] dark:text-[#f7f7f8] focus:outline-none"
      >
        {periods.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      <select
        aria-label="Status da cobrança"
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        className="h-9 rounded-[5px] border border-[#d7dbe3] dark:border-[#424348] bg-white dark:bg-[#1c1d20] px-2.5 text-xs text-[#111318] dark:text-[#f7f7f8] focus:outline-none"
      >
        <option value="todos">Status: Todos</option>
        <option value="pago">Status: Paga</option>
        <option value="em_aberto">Status: Em aberto</option>
      </select>
    </div>
  );
}
