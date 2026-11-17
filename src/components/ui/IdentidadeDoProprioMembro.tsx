import { Shield } from 'lucide-react';
import { Avatar } from '../primitives';

export interface IdentidadeDoProprioMembroProps {
  nome: string;
  apelido?: string | null;
  nivel: string;
  fotoUrl?: string | null;
  densidade?: 'home' | 'compact';
}

export function IdentidadeDoProprioMembro({
  nome,
  apelido,
  nivel,
  fotoUrl,
  densidade = 'home',
}: IdentidadeDoProprioMembroProps) {
  return (
    <div className="flex items-center gap-2.5 rounded-[12px] border border-[#d7dbe3] dark:border-[#54565d] bg-white dark:bg-[#17191d] px-3 py-2 text-[#111318] dark:text-[#f6f7f9]">
      <Avatar
        name={nome}
        src={fotoUrl}
        className={densidade === 'home' ? 'h-14 w-14 rounded-[11px]' : 'h-16 w-16 rounded-[11px]'}
      />
      <div className="min-w-0 flex-1 border-l border-[#9ca3af] dark:border-[#a4a6ac] py-1 pl-2.5">
        <div className="flex flex-wrap items-center gap-2">
          <strong className="text-base font-bold leading-tight">{nome}</strong>
          {densidade === 'compact' && (
            <span className="rounded-full border border-[#d7dbe3] dark:border-[#84868c] bg-[#eceef2] dark:bg-[#292c32] px-2 py-0.5 text-xs font-semibold">
              {nivel}
            </span>
          )}
        </div>
        {apelido && (
          <small className="block text-xs text-[#5c6270] dark:text-[#bfc2cb]">“{apelido}”</small>
        )}
      </div>
      {densidade === 'home' && (
        <span className="flex items-center gap-2 text-[11px]">
          <Shield className="h-5 w-5 shrink-0 text-[#ff273b]" />
          <span className="grid justify-items-start gap-1 border-l border-[#9ca3af] dark:border-[#a4a6ac] pl-2">
            <b>Seu nível atual:</b>
            <span className="rounded-full border border-[#d7dbe3] dark:border-[#84868c] bg-[#eceef2] dark:bg-[#292c32] px-2 py-0.5 text-xs font-semibold">
              {nivel}
            </span>
          </span>
        </span>
      )}
    </div>
  );
}
