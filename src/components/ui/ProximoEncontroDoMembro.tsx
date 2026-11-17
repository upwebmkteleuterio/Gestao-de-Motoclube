import { Calendar, ChevronRight, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface ProximoEncontroDoMembroProps {
  eventoId: string;
  titulo: string;
  dataTexto: string;
  local: string;
  confirmadosTotal: number;
  fotoUrl?: string | null;
}

export function ProximoEncontroDoMembro({
  eventoId,
  titulo,
  dataTexto,
  local,
  confirmadosTotal,
  fotoUrl,
}: ProximoEncontroDoMembroProps) {
  return (
    <Link
      to={`/membro/eventos/${eventoId}`}
      className="grid grid-cols-[34%_minmax(0,1fr)_auto] items-center gap-2.5 rounded-[12px] border border-[#d7dbe3] dark:border-[#54565d] bg-white dark:bg-[#17191d] p-2.5 text-[#111318] dark:text-[#f6f7f9] no-underline transition-colors hover:bg-[#f5f6f8] dark:hover:bg-[#282d35]"
    >
      <span className="aspect-[1.43] w-full overflow-hidden rounded-[9px] bg-gradient-to-br from-[#2b1a1d] to-[#131519]">
        {fotoUrl && (
          <img
            src={fotoUrl}
            alt={titulo}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover"
          />
        )}
      </span>
      <span className="min-w-0 border-l border-[#9ca3af] dark:border-[#a4a6ac] pl-2.5">
        <strong className="mb-1 block text-sm font-bold leading-tight">{titulo}</strong>
        <small className="flex items-start gap-1.5 text-xs text-[#5c6270] dark:text-[#e0e1e6]">
          <Calendar className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          {dataTexto}
        </small>
        <small className="mt-0.5 flex items-start gap-1.5 text-xs text-[#5c6270] dark:text-[#e0e1e6]">
          <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          {local}
        </small>
        <small className="mt-0.5 flex items-start gap-1.5 text-xs text-[#5c6270] dark:text-[#e0e1e6] tabular-nums">
          <Users className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          {confirmadosTotal} confirmados
        </small>
      </span>
      <ChevronRight className="h-4 w-4 text-[#5c6270] dark:text-[#bfc2cb]" aria-hidden="true" />
    </Link>
  );
}
