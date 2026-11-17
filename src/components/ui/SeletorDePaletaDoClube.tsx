import { Check } from 'lucide-react';

export type PaletaClubeId = 'vermelho' | 'azul' | 'laranja';

export interface SeletorDePaletaDoClubeProps {
  value: PaletaClubeId;
  onChange: (paletaId: PaletaClubeId, accentHex: string) => void;
}

const PALETAS: Array<{ id: PaletaClubeId; nome: string; hex: string }> = [
  { id: 'vermelho', nome: 'Vermelho', hex: '#ED343B' },
  { id: 'azul', nome: 'Azul', hex: '#397BFA' },
  { id: 'laranja', nome: 'Laranja', hex: '#F58220' },
];

export function SeletorDePaletaDoClube({ value, onChange }: SeletorDePaletaDoClubeProps) {
  return (
    <fieldset className="border-0 p-0">
      <legend className="mb-3 text-base font-bold">Paleta de cores</legend>
      <div className="grid grid-cols-3 gap-2.5">
        {PALETAS.map((paleta) => {
          const checked = value === paleta.id;
          return (
            <label
              key={paleta.id}
              className={[
                'relative grid min-h-[82px] cursor-pointer grid-cols-[1fr_auto] items-center gap-y-2.5 rounded-[10px] border p-2.5 transition-colors',
                checked
                  ? 'border-[#ff283e] ring-1 ring-[#ff283e] bg-red-50 dark:bg-gradient-to-br dark:from-[#2d1519] dark:to-[#211215]'
                  : 'border-[#d7dbe3] dark:border-[#6b6d73] bg-white dark:bg-gradient-to-br dark:from-[#191b1e] dark:to-[#141619]',
              ].join(' ')}
            >
              <input
                type="radio"
                name="paleta_clube"
                value={paleta.id}
                checked={checked}
                onChange={() => onChange(paleta.id, paleta.hex)}
                className="sr-only"
              />
              <strong className="text-sm font-bold">{paleta.nome}</strong>
              <span
                aria-hidden="true"
                className={[
                  'grid h-4 w-4 place-items-center rounded-full border',
                  checked
                    ? 'border-[#ff283e] bg-[#ff283e] text-white'
                    : 'border-[#9ca3af] dark:border-[#b9bbc2] text-transparent',
                ].join(' ')}
              >
                <Check className="h-2.5 w-2.5" strokeWidth={3} />
              </span>
              <span className="col-span-2 grid grid-cols-3 gap-1.5" aria-hidden="true">
                <i className="aspect-square rounded-[6px] border border-[#64666d] bg-[#101113]" />
                <i className="aspect-square rounded-[6px] border border-[#64666d] bg-[#292b2e]" />
                <i
                  className="aspect-square rounded-[6px] border border-[#64666d]"
                  style={{ backgroundColor: paleta.hex }}
                />
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
