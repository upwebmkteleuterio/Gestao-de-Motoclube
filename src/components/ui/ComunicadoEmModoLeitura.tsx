import { ArrowLeft, Calendar, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IndicadorDeComunicadoFixado } from './IndicadorDeComunicadoFixado';
import { PublicoDoComunicado } from './PublicoDoComunicado';

export interface ComunicadoEmModoLeituraProps {
  titulo: string;
  autorNome: string;
  dataTexto: string;
  publicoRotulo: string;
  conteudo: string;
  capaUrl?: string | null;
  fixado?: boolean;
  voltarPara?: string;
}

export function ComunicadoEmModoLeitura({
  titulo,
  autorNome,
  dataTexto,
  publicoRotulo,
  conteudo,
  capaUrl,
  fixado = false,
  voltarPara = '/membro/comunicados',
}: ComunicadoEmModoLeituraProps) {
  return (
    <section className="grid gap-3">
      <div className="flex items-center gap-2 border-b border-[#d7dbe3] dark:border-[#383b42] pb-2">
        <Link
          to={voltarPara}
          aria-label="Voltar"
          className="grid h-8 w-8 place-items-center rounded-[7px] hover:bg-[#eceef2] dark:hover:bg-[#272b33]"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-xl font-bold">Comunicado</h1>
      </div>

      <article className="grid gap-3 px-1">
        <IndicadorDeComunicadoFixado fixado={fixado} variante="badge" />
        <h2 className="max-w-[340px] text-2xl font-extrabold leading-tight">{titulo}</h2>
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="h-4 w-4 shrink-0" />
          <span>
            {autorNome} • {dataTexto}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Users className="h-4 w-4 shrink-0" />
          <PublicoDoComunicado rotulo={publicoRotulo} />
        </div>
        {capaUrl && (
          <img
            src={capaUrl}
            alt={titulo}
            referrerPolicy="no-referrer"
            className="aspect-[1.785] w-full rounded-[13px] object-cover"
          />
        )}
        <div className="whitespace-pre-line text-base leading-relaxed text-[#111318] dark:text-[#f6f7f9]">
          {conteudo}
        </div>
      </article>
    </section>
  );
}
