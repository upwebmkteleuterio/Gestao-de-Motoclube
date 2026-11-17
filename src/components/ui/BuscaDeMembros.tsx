import { Search } from 'lucide-react';

export interface BuscaDeMembrosProps {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export function BuscaDeMembros({
  value,
  placeholder = 'Buscar por nome ou apelido',
  onChange,
}: BuscaDeMembrosProps) {
  return (
    <label className="flex min-h-[44px] w-full items-center gap-2.5 rounded-[10px] border border-[#d7dbe3] dark:border-[#42454e] bg-white dark:bg-[#191b20] px-3 py-2 text-sm text-[#111318] dark:text-[#f6f7f9] focus-within:border-[#9aa1b0] dark:focus-within:border-[#a7aebb]">
      <Search className="h-4 w-4 shrink-0 text-[#5c6270] dark:text-[#bfc2cb]" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-[#5c6270] dark:placeholder:text-[#bfc2cb]"
      />
    </label>
  );
}
