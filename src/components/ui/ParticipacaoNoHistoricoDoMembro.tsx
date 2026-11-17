import { Calendar, CheckCircle2, ChevronRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface ParticipacaoNoHistoricoDoMembroProps {
  eventoId: string;
  titulo: string;
  dataTexto: string;
  local: string;
  presenca: 'presente' | 'faltou';
  fotoUrl?: string | null;
}

export function ParticipacaoNoHistoricoDoMembro({
  eventoId,
  titulo,
  dataTexto,
  local,
  presenca,
  fotoUrl,
}: ParticipacaoNoHistoricoDoMembroProps) {
  const destino =
    presenca === 'faltou' ? `/membro/eventos/${eventoId}/falta` : `/membro/eventos/${eventoId}`;

  return (
    <Link
      to={destino}
      className="grid w-full grid-cols-[19.5%_minmax(0,1fr)_16px] items-center gap-2.5 rounded-[12px] border border-[#d7dbe3] dark:border-[#54565d] bg-white dark:bg-[#17191d] px-2.5 py-2 text-left text-[#111318] dark:text-[#f6f7f9] no-underline transition-colors hover:bg-[#f5f6f8] dark:hover:bg-[#282d35]"
    >
      <span className="aspect-[1.14] w-full overflow-hidden rounded-[7px] bg-gradient-to-br from-[#2b1a1d] to-[#131519]">
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
        <strong className="mb-0.5 block truncate text-sm font-bold">{titulo}</strong>
        <small className="flex items-center gap-1 text-xs text-[#5c6270] dark:text-[#e0e1e6]">
          <Calendar className="h-3.5 w-3.5 shrink-0" />
          {dataTexto} • {local}
        </small>
        <span
          className={`mt-1 inline-flex items-center gap-1 text-xs font-bold ${
            presenca === 'presente'
              ? 'text-[#15803d] dark:text-[#65d83c]'
              : 'text-[#b45309] dark:text-[#ffb35c]'
          }`}
        >
          {presenca === 'presente' ? (
            <CheckCircle2 className="h-3.5 w-3.5" />
          ) : (
            <Clock className="h-3.5 w-3.5" />
          )}
          {presenca === 'presente' ? 'Presente' : 'Faltou'}
        </span>
      </span>
      <ChevronRight className="h-4 w-4 text-[#5c6270] dark:text-[#bfc2cb]" aria-hidden="true" />
    </Link>
  );
}
