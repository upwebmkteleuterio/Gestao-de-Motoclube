import { Shield } from 'lucide-react';
import { Avatar } from '../primitives';

export interface CabecalhoDoClubeProps {
  nome: string;
  local: string;
  marcaUrl?: string | null;
  avatarNome?: string;
  avatarUrl?: string | null;
}

export function CabecalhoDoClube({
  nome,
  local,
  marcaUrl,
  avatarNome = 'RA',
  avatarUrl,
}: CabecalhoDoClubeProps) {
  return (
    <header className="flex items-center gap-3 px-4 py-3 text-[#111318] dark:text-[#f6f7f9]">
      <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-[11px] text-[#ff273a]">
        {marcaUrl ? (
          <img
            src={marcaUrl}
            alt={nome}
            referrerPolicy="no-referrer"
            className="h-full w-full object-contain"
          />
        ) : (
          <Shield className="h-9 w-9" strokeWidth={1.8} />
        )}
      </span>
      <div className="min-w-0 border-l border-[#9ca3af] dark:border-[#777] pl-3">
        <strong className="block truncate text-base font-bold tracking-[0.025em] uppercase">
          {nome}
        </strong>
        <small className="block truncate text-xs text-[#5c6270] dark:text-[#bfc2cb]">{local}</small>
      </div>
      <Avatar
        name={avatarNome}
        src={avatarUrl}
        size="sm"
        rounded="full"
        className="ml-auto border border-[#c4c4c4]"
      />
    </header>
  );
}
