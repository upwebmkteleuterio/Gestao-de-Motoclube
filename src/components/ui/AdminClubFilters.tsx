import { Search } from 'lucide-react';

export interface AdminClubFiltersProps {
  query: string;
  onQueryChange: (value: string) => void;
  planFilter: string;
  onPlanFilterChange: (value: string) => void;
  subscriptionFilter: string;
  onSubscriptionFilterChange: (value: string) => void;
  accessFilter: string;
  onAccessFilterChange: (value: string) => void;
  planOptions?: { value: string; label: string }[];
}

const DEFAULT_PLANS = [
  { value: 'essencial', label: 'Essencial' },
  { value: 'estrada', label: 'Estrada' },
  { value: 'irmandade', label: 'Irmandade' },
];

export function AdminClubFilters({
  query,
  onQueryChange,
  planFilter,
  onPlanFilterChange,
  subscriptionFilter,
  onSubscriptionFilterChange,
  accessFilter,
  onAccessFilterChange,
  planOptions = DEFAULT_PLANS,
}: AdminClubFiltersProps) {
  return (
    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-[2.75fr_0.94fr_1.02fr_1.04fr]">
      <label className="flex h-9 items-center gap-2 rounded-[6px] border border-[#d7dbe3] dark:border-[#47484e] bg-white dark:bg-[#1b1c1f] px-2.5 focus-within:border-[#96989f]">
        <Search className="h-4 w-4 shrink-0 text-[#5c6270] dark:text-[#bfc0c5]" />
        <input
          type="search"
          aria-label="Buscar clube, gestor ou e-mail"
          placeholder="Buscar clube, gestor ou e-mail"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          className="w-full min-w-0 bg-transparent text-xs text-[#111318] dark:text-[#f0f0f3] placeholder:text-[#7c8290] dark:placeholder:text-[#bfc0c5] focus:outline-none"
        />
      </label>

      <select
        aria-label="Plano"
        value={planFilter}
        onChange={(e) => onPlanFilterChange(e.target.value)}
        className="h-9 rounded-[6px] border border-[#d7dbe3] dark:border-[#47484e] bg-white dark:bg-[#1b1c1f] px-2.5 text-xs text-[#111318] dark:text-[#f0f0f3] focus:outline-none focus:border-[#96989f]"
      >
        <option value="">Plano: Todos</option>
        {planOptions.map((p) => (
          <option key={p.value} value={p.value}>
            {p.label}
          </option>
        ))}
      </select>

      <select
        aria-label="Assinatura"
        value={subscriptionFilter}
        onChange={(e) => onSubscriptionFilterChange(e.target.value)}
        className="h-9 rounded-[6px] border border-[#d7dbe3] dark:border-[#47484e] bg-white dark:bg-[#1b1c1f] px-2.5 text-xs text-[#111318] dark:text-[#f0f0f3] focus:outline-none focus:border-[#96989f]"
      >
        <option value="">Assinatura: Todas</option>
        <option value="ativa">Ativa</option>
        <option value="em_atraso">Em atraso</option>
        <option value="pendente">Aguardando pagamento</option>
      </select>

      <select
        aria-label="Acesso"
        value={accessFilter}
        onChange={(e) => onAccessFilterChange(e.target.value)}
        className="h-9 rounded-[6px] border border-[#d7dbe3] dark:border-[#47484e] bg-white dark:bg-[#1b1c1f] px-2.5 text-xs text-[#111318] dark:text-[#f0f0f3] focus:outline-none focus:border-[#96989f]"
      >
        <option value="">Acesso: Todos</option>
        <option value="ativo">Ativo</option>
        <option value="suspenso">Suspenso</option>
      </select>
    </div>
  );
}
