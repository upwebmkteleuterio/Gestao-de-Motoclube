import { Calendar, ChevronRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Avatar } from '../primitives';

export interface CardDeEventoDoMembroProps {
  eventoId: string;
  titulo: string;
  dataTexto: string;
  local: string;
  confirmadosTotal: number;
  membroNome: string;
  membroFotoUrl?: string | null;
  capaUrl?: string | null;
  estadoPessoal?: string | null;
  encerrado?: boolean;
}

export function CardDeEventoDoMembro({
  eventoId,
  titulo,
  dataTexto,
  local,
  confirmadosTotal,
  membroNome,
  membroFotoUrl,
  capaUrl,
  estadoPessoal,
  encerrado = false,
}: CardDeEventoDoMembroProps) {
  return (
    <Link
      to={`/membro/eventos/${eventoId}`}
      className="block overflow-hidden rounded-[10px] border border-[#d7dbe3] dark:border-[#54565d] bg-white dark:bg-[#171a1e] text-[#111318] dark:text-[#f6f7f9] no-underline transition-colors hover:border-[#9aa1b0] dark:hover:border-[#a1a5ab]"
    >
      <span className="block aspect-[3.86] w-full overflow-hidden bg-gradient-to-br from-[#383226] to-[#1c1a16]">
        {capaUrl && (
          <img
            src={capaUrl}
            alt={titulo}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover"
          />
        )}
      </span>
      <div className="px-3.5 py-2.5">
        <h2 className="text-xl font-bold leading-tight">{titulo}</h2>
        <div className="mt-1 grid gap-1 text-[13px]">
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-[#ff273b]" />
            {dataTexto}
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[#ff273b]" />
            {local}
          </span>
        </div>
        <div className="mt-2 grid grid-cols-[auto_1fr_auto] items-center gap-3 border-t border-[#d7dbe3] dark:border-[#56595e] pt-2">
          <Avatar
            name={membroNome}
            src={membroFotoUrl}
            rounded="full"
            className="h-[44px] w-[44px] border border-[#b9bbc1]"
          />
          <div className="border-l border-[#9ca3af] dark:border-[#888b92] pl-3">
            <strong className="block text-sm font-bold tabular-nums">
              {confirmadosTotal} confirmados
            </strong>
            {estadoPessoal && (
              <span
                className={`block text-xs ${
                  encerrado
                    ? 'text-[#b45309] dark:text-[#ffd78d]'
                    : 'text-[#15803d] dark:text-[#9fecaf]'
                }`}
              >
                {estadoPessoal}
              </span>
            )}
          </div>
          <ChevronRight className="h-4 w-4 text-[#5c6270] dark:text-[#bfc2cb]" aria-hidden="true" />
        </div>
      </div>
    </Link>
  );
}
