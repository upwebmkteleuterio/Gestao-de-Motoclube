import { Calendar, ChevronRight, Image as ImageIcon, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IndicadorDeComunicadoFixado } from './IndicadorDeComunicadoFixado';
import { PublicoDoComunicado } from './PublicoDoComunicado';

export interface CardDeComunicadoDoMembroProps {
  id: string;
  titulo: string;
  resumo: string;
  autorNome: string;
  dataTexto: string;
  publicoRotulo: string;
  capaUrl?: string | null;
  fixado?: boolean;
}

export function CardDeComunicadoDoMembro({
  id,
  titulo,
  resumo,
  autorNome,
  dataTexto,
  publicoRotulo,
  capaUrl,
  fixado = false,
}: CardDeComunicadoDoMembroProps) {
  return (
    <Link
      to={`/membro/comunicados/${id}`}
      className="grid grid-cols-[78px_minmax(0,1fr)_16px] items-center gap-2.5 rounded-[11px] border border-[#d7dbe3] dark:border-[#40434a] bg-white dark:bg-[#171a1e] p-2 text-[#111318] dark:text-[#f6f7f9] no-underline transition-colors hover:border-[#9aa1b0] dark:hover:border-[#a1a5ab]"
    >
      <span className="grid min-h-[83px] place-items-center overflow-hidden rounded-[8px] bg-[#eceef2] dark:bg-[#262b32]">
        {capaUrl ? (
          <img
            src={capaUrl}
            alt={titulo}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover"
          />
        ) : (
          <ImageIcon className="h-6 w-6 text-[#5c6270] dark:text-[#bfc2cb]" />
        )}
      </span>
      <span className="grid min-w-0 gap-0.5 border-l border-[#d7dbe3] dark:border-[#5f636b] pl-2.5">
        <strong className="text-base font-bold leading-tight">{titulo}</strong>
        <span className="line-clamp-2 text-[13px] leading-snug text-[#5c6270] dark:text-[#dfe0e3]">
          {resumo}
        </span>
        <span className="mt-1 flex items-center gap-1.5 text-xs">
          <Calendar className="h-3.5 w-3.5 shrink-0" />
          <span>
            {dataTexto} • {autorNome}
          </span>
        </span>
        <span className="mt-0.5 flex flex-wrap items-center gap-1.5 text-xs">
          <Users className="h-3.5 w-3.5 shrink-0" />
          <PublicoDoComunicado rotulo={publicoRotulo} />
          {fixado && (
            <span className="border-l border-[#d7dbe3] dark:border-[#696a71] pl-2">
              <IndicadorDeComunicadoFixado fixado />
            </span>
          )}
        </span>
      </span>
      <ChevronRight className="h-4 w-4 text-[#5c6270] dark:text-[#bfc2cb]" aria-hidden="true" />
    </Link>
  );
}
