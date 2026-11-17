import { Pin } from 'lucide-react';

export interface IndicadorDeComunicadoFixadoProps {
  fixado: boolean;
  variante?: 'inline' | 'badge';
}

export function IndicadorDeComunicadoFixado({
  fixado,
  variante = 'inline',
}: IndicadorDeComunicadoFixadoProps) {
  if (!fixado) return null;

  if (variante === 'badge') {
    return (
      <span className="inline-flex w-max items-center gap-1.5 rounded-[9px] bg-[#ff1d32] px-2.5 py-0.5 text-sm font-bold text-white">
        <Pin className="h-3.5 w-3.5 fill-current" />
        Fixado
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#ff2938]">
      <Pin className="h-3.5 w-3.5 fill-current" />
      Fixado
    </span>
  );
}
