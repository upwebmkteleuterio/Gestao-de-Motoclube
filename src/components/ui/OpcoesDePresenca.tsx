export interface OpcoesDePresencaProps {
  value: 'presente' | 'faltou' | '';
  onChange: (value: 'presente' | 'faltou') => void;
  name?: string;
}

export function OpcoesDePresenca({
  value,
  onChange,
  name = 'presenca',
}: OpcoesDePresencaProps) {
  const options: Array<{ value: 'presente' | 'faltou'; label: string }> = [
    { value: 'presente', label: 'Presente' },
    { value: 'faltou', label: 'Faltou' },
  ];

  return (
    <fieldset className="grid gap-1.5 border-0 p-0">
      <legend className="mb-1 text-xs font-bold text-[#5c6270] dark:text-[#bfc2cb]">Presença</legend>
      {options.map((opt) => {
        const checked = value === opt.value;
        return (
          <label
            key={opt.value}
            className={[
              'flex cursor-pointer items-center gap-2 rounded-[8px] border px-2.5 py-2 text-sm transition-colors',
              checked
                ? 'border-[#ff293f] ring-1 ring-[#ff293f] bg-[#ff293f]/5'
                : 'border-[#d7dbe3] dark:border-[#777b82] hover:bg-[#eceef2] dark:hover:bg-[#2b2d33]',
            ].join(' ')}
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={checked}
              onChange={() => onChange(opt.value)}
              className="accent-[#ff293f]"
            />
            <span>{opt.label}</span>
          </label>
        );
      })}
    </fieldset>
  );
}
