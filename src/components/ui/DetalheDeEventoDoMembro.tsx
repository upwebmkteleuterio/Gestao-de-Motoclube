import { ArrowLeft, Calendar, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface DetalheDeEventoDoMembroProps {
  titulo: string;
  dataTexto: string;
  local: string;
  descricao: string;
  confirmadosTotal: number;
  capaUrl?: string | null;
  voltarPara?: string;
}

export function DetalheDeEventoDoMembro({
  titulo,
  dataTexto,
  local,
  descricao,
  confirmadosTotal,
  capaUrl,
  voltarPara = '/membro/eventos',
}: DetalheDeEventoDoMembroProps) {
  return (
    <section className="grid gap-2">
      <div className="flex items-center gap-2">
        <Link
          to={voltarPara}
          aria-label="Voltar"
          className="grid h-7 w-7 place-items-center rounded text-[#111318] dark:text-[#f6f7f9] hover:bg-[#eceef2] dark:hover:bg-[#282d35]"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <h1 className="text-xl font-bold leading-tight">Detalhes do evento</h1>
      </div>

      <article className="overflow-hidden rounded-[10px] border border-[#d7dbe3] dark:border-[#54565d] bg-white dark:bg-[#171a1e]">
        <span className="block aspect-[3.62] w-full bg-gradient-to-br from-[#383226] to-[#1c1a16]">
          {capaUrl && (
            <img
              src={capaUrl}
              alt={titulo}
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover"
            />
          )}
        </span>
        <div className="px-3 py-2">
          <h2 className="text-lg font-bold">{titulo}</h2>
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
        </div>
      </article>

      <section className="rounded-[10px] border border-[#d7dbe3] dark:border-[#54565d] bg-white dark:bg-[#171a1e] px-3 py-2">
        <h2 className="mb-0.5 text-base font-bold">Sobre o encontro</h2>
        <p className="text-[13px] leading-snug text-[#5c6270] dark:text-[#d3d4d9]">{descricao}</p>
      </section>

      <div className="flex min-h-[36px] items-center gap-3 rounded-[10px] border border-[#d7dbe3] dark:border-[#54565d] bg-white dark:bg-[#171a1e] px-3 py-1.5 tabular-nums">
        <span className="grid min-w-[40px] place-items-center border-r border-[#9ca3af] dark:border-[#9a9ba2] pr-3">
          <Users className="h-5 w-5" />
        </span>
        <strong className="text-sm font-bold">{confirmadosTotal} confirmados</strong>
      </div>
    </section>
  );
}
