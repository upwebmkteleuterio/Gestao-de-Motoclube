import { BarChart3, Users } from 'lucide-react';
import { Avatar } from '../primitives';
import { getFrequencyColorClass } from './LinhaDeMembro';

export interface IdentidadeDoMembroProps {
  nome: string;
  apelido?: string | null;
  nivel: string;
  fotoUrl?: string | null;
  entradaTexto?: string;
  variante?: 'perfil' | 'nivel';
  frequenciaPercentual?: number | null;
  exibirFrequencia?: boolean;
  emCard?: boolean;
}

export function IdentidadeDoMembro({
  nome,
  apelido,
  nivel,
  fotoUrl,
  entradaTexto,
  variante = 'perfil',
  frequenciaPercentual = null,
  exibirFrequencia = false,
  emCard = false,
}: IdentidadeDoMembroProps) {
  const freqColor = getFrequencyColorClass(frequenciaPercentual);

  return (
    <div
      className={[
        'flex min-w-0 items-center gap-2.5 text-[#111318] dark:text-[#f6f7f9]',
        emCard
          ? 'rounded-[12px] border border-[#d7dbe3] dark:border-[#85868a] bg-white dark:bg-gradient-to-br dark:from-[#151719] dark:to-[#101112] p-2.5'
          : 'px-1 py-0.5',
      ].join(' ')}
    >
      <Avatar name={nome} src={fotoUrl} size="lg" className="h-[54px] w-[58px] rounded-[10px]" />
      <div className="min-w-0 flex-1 border-l border-[#9ca3af] dark:border-[#888] pl-2.5">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <strong className="break-words text-base font-bold leading-tight">{nome}</strong>
          {variante === 'perfil' && (
            <span className="rounded-full border border-[#c9ced8] dark:border-[#888] bg-[#eceef2] dark:bg-[#2d2f33] px-2 py-0.5 text-[11px] font-semibold">
              {nivel}
            </span>
          )}
        </div>
        {apelido && (
          <small className="block truncate text-xs text-[#5c6270] dark:text-[#bfc2cb]">“{apelido}”</small>
        )}
        {variante === 'perfil' && entradaTexto && (
          <small className="mt-0.5 flex items-center gap-1 text-xs text-[#5c6270] dark:text-[#bfc2cb]">
            <Users className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">{entradaTexto}</span>
          </small>
        )}
        {exibirFrequencia && (
          <small className="mt-0.5 flex items-center gap-1 text-xs text-[#5c6270] dark:text-[#bfc2cb] tabular-nums">
            <BarChart3 className={`h-3.5 w-3.5 shrink-0 ${freqColor}`} />
            <span>
              Frequência{' '}
              <strong className="font-bold text-[#111318] dark:text-[#f6f7f9]">
                {frequenciaPercentual === null ? '—' : `${frequenciaPercentual}%`}
              </strong>
            </span>
          </small>
        )}
      </div>
      {variante === 'nivel' && (
        <div className="grid shrink-0 justify-items-start gap-1 border-l border-[#9ca3af] dark:border-[#888] pl-2.5">
          <small className="text-[11px] text-[#5c6270] dark:text-[#bfc2cb]">Nível atual</small>
          <span className="rounded-full border border-[#c9ced8] dark:border-[#98999f] bg-[#eceef2] dark:bg-[#2d2f33] px-2 py-0.5 text-[11px] font-semibold">
            {nivel}
          </span>
        </div>
      )}
    </div>
  );
}
