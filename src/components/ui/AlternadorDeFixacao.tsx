export interface AlternadorDeFixacaoProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

export function AlternadorDeFixacao({
  checked,
  onChange,
  label = 'Fixar no topo',
}: AlternadorDeFixacaoProps) {
  return (
    <label className="flex min-h-[40px] cursor-pointer items-center justify-between gap-3 rounded-[10px] border border-[#d7dbe3] dark:border-[#737477] bg-white dark:bg-[#191b1f] py-1.5 pl-3.5 pr-2.5 text-[15px] font-bold">
      <span>{label}</span>
      <span className="relative inline-flex shrink-0 items-center">
        <input
          type="checkbox"
          role="switch"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="peer sr-only"
        />
        <span className="flex h-[25px] w-[44px] items-center rounded-full bg-[#9ca3af] dark:bg-[#63666e] p-[3px] transition-colors peer-checked:justify-end peer-checked:bg-[#ff202f]">
          <span className="h-[19px] w-[19px] rounded-full bg-white shadow-sm" />
        </span>
      </span>
    </label>
  );
}
