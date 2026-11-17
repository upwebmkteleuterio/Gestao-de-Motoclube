import { Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Avatar } from '../primitives';

export interface CardDeEventoProps {
  id: string;
  fotoUrl?: string | null;
  categoria: string;
  titulo: string;
  dataTexto: string;
  local: string;
  confirmadosTotal: number;
  confirmadosAvatares?: Array<{ nome: string; fotoUrl?: string | null }>;
  destino?: string;
}

export function CardDeEvento({
  id,
  fotoUrl,
  categoria,
  titulo,
  dataTexto,
  local,
  confirmadosTotal,
  confirmadosAvatares = [
    {
      nome: 'Rafael Oliveira',
      fotoUrl: 'https://saltonaweb.sh27.com.br/sistemas/motoclube/previa-rafael.jpg',
    },
    {
      nome: 'Camila Mendes',
      fotoUrl: 'https://saltonaweb.sh27.com.br/sistemas/motoclube/previa-camila.jpg',
    },
    {
      nome: 'Bruno Souza',
      fotoUrl: 'https://saltonaweb.sh27.com.br/sistemas/motoclube/previa-bruno.jpg',
    },
  ],
  destino,
}: CardDeEventoProps) {
  return (
    <Link
      to={destino ?? `/eventos/${id}`}
      className="block overflow-hidden rounded-[12px] border border-[#d7dbe3] dark:border-[#70737b] bg-white dark:bg-[#17191d] text-[#111318] dark:text-[#f6f7f9] no-underline transition-colors hover:border-[#9aa1b0] dark:hover:border-[#ccd0da] hover:bg-[#f9fafb] dark:hover:bg-[#242730]"
    >
      <span className="relative block aspect-[4.25] w-full overflow-hidden bg-gradient-to-br from-[#2b1a1d] via-[#1c1f26] to-[#131519]">
        {fotoUrl && (
          <img
            src={fotoUrl}
            alt={titulo}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover"
          />
        )}
        <span className="absolute left-2.5 top-2 rounded-full bg-[#94192b] px-2.5 py-0.5 text-[11px] font-bold uppercase text-white">
          {categoria}
        </span>
      </span>
      <div className="grid gap-1 px-3 py-2.5">
        <h2 className="text-xl font-bold leading-tight">{titulo}</h2>
        <div className="grid gap-1 text-xs text-[#5c6270] dark:text-[#bfc2cb]">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-[#ff5263]" />
            {dataTexto}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-[#ff5263]" />
            {local}
          </span>
        </div>
        <div className="mt-1 flex items-center gap-2.5">
          {confirmadosAvatares.length > 0 && (
            <span className="flex border-r border-[#d7dbe3] dark:border-[#787b84] pr-2.5">
              {confirmadosAvatares.slice(0, 3).map((item, idx) => (
                <Avatar
                  key={`${item.nome}-${idx}`}
                  name={item.nome}
                  src={item.fotoUrl}
                  rounded="full"
                  className={`h-[26px] w-[26px] border border-[#d4d5da] text-[9px] ${idx > 0 ? '-ml-1.5' : ''}`}
                />
              ))}
            </span>
          )}
          <strong className="text-sm font-bold tabular-nums">{confirmadosTotal} confirmados</strong>
        </div>
      </div>
    </Link>
  );
}
