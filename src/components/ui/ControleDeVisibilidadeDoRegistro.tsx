export interface ControleDeVisibilidadeDoRegistroProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  titulo?: string;
  descricao?: string;
}

export function ControleDeVisibilidadeDoRegistro({
  checked,
  onChange,
  titulo = 'Visível para o membro',
  descricao = 'Somente o próprio membro poderá consultar.',
}: ControleDeVisibilidadeDoRegistroProps) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-3 px-1 py-0.5 text-[13px]">
      <span>
        <strong className="block font-bold">{titulo}</strong>
        <small className="block text-[11px] text-[#5c6270] dark:text-[#c4c6cb]">{descricao}</small>
      </span>
      <span className="relative inline-flex shrink-0 items-center">
        <input
          type="checkbox"
          role="switch"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="peer sr-only"
        />
        <span className="flex h-6 w-[42px] items-center rounded-full border border-[#9ca3af] dark:border-[#696c72] bg-[#d1d5db] dark:bg-[#484b51] p-0.5 transition-colors peer-checked:justify-end peer-checked:border-[#fa1732] peer-checked:bg-[#fa1732]">
          <span className="h-[18px] w-[18px] rounded-full bg-white shadow-sm" />
        </span>
      </span>
    </label>
  );
}
