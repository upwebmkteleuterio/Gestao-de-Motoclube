import { Calendar, ChevronRight, Image as ImageIcon, MoreHorizontal, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IndicadorDeComunicadoFixado } from './IndicadorDeComunicadoFixado';
import { PublicoDoComunicado } from './PublicoDoComunicado';

export interface CardDeComunicadoProps {
  id: string;
  titulo: string;
  resumo: string;
  autorNome: string;
  dataTexto: string;
  publicoRotulo: string;
  capaUrl?: string | null;
  fixado?: boolean;
  destino?: string;
  onMenu?: (id: string) => void;
}

export function CardDeComunicado({
  id,
  titulo,
  resumo,
  autorNome,
  dataTexto,
  publicoRotulo,
  capaUrl,
  fixado = false,
  destino,
  onMenu,
}: CardDeComunicadoProps) {
  return (
    <article className="grid grid-cols-[minmax(55px,25%)_minmax(0,1fr)_25px] items-stretch gap-2.5 rounded-[10px] border border-[#d7dbe3] dark:border-[#56585c] bg-white dark:bg-[#191b1f] p-2 text-[#111318] dark:text-[#f8f8fa]">
      <span className="grid min-h-[83px] content-center border-r border-[#d7dbe3] dark:border-[#b7bac2] pr-2.5">
        {capaUrl ? (
          <img
            src={capaUrl}
            alt={titulo}
            referrerPolicy="no-referrer"
            className="aspect-[0.97] w-full rounded-[9px] bg-[#292c33] object-cover"
          />
        ) : (
          <span className="grid aspect-[0.97] w-full place-items-center rounded-[9px] bg-[#eceef2] dark:bg-[#24272d] text-[#5c6270] dark:text-[#bfc2cb]">
            <ImageIcon className="h-6 w-6" />
          </span>
        )}
      </span>
      <div className="min-w-0 self-center">
        <h3 className="mb-0.5 text-[15px] font-bold leading-tight">{titulo}</h3>
        <p className="mb-1 line-clamp-2 text-xs leading-snug text-[#5c6270] dark:text-[#d9dbe4]">
          {resumo}
        </p>
        <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
          <Calendar className="h-3.5 w-3.5 shrink-0" />
          <span>
            {dataTexto} • {autorNome}
          </span>
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-1.5 text-[11px]">
          <Users className="h-3.5 w-3.5 shrink-0" />
          <PublicoDoComunicado rotulo={publicoRotulo} />
          {fixado && (
            <span className="border-l border-[#d7dbe3] dark:border-[#777a80] pl-2">
              <IndicadorDeComunicadoFixado fixado />
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center justify-between">
        <button
          type="button"
          onClick={() => onMenu?.(id)}
          aria-label={`Opções de ${titulo}`}
          className="grid min-h-[24px] min-w-[25px] place-items-center rounded text-[#5c6270] dark:text-[#f8f8fa] hover:bg-[#eceef2] dark:hover:bg-[#30343e]"
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
        <Link
          to={destino ?? `/comunicados/${id}`}
          aria-label={`Abrir ${titulo}`}
          className="grid flex-1 min-h-[34px] min-w-[25px] place-items-center text-[#5c6270] dark:text-[#f8f8fa] hover:text-[#ff273a]"
        >
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
