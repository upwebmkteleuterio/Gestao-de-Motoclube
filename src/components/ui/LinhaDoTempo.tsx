import { Layers } from 'lucide-react';

export interface MudancaNivelItem {
  id: string;
  dataTexto: string;
  descricao: string;
  responsavel?: string;
}

export interface LinhaDoTempoProps {
  mudancas: MudancaNivelItem[];
  titulo?: string;
}

export function LinhaDoTempo({ mudancas, titulo = 'Histórico de níveis' }: LinhaDoTempoProps) {
  return (
    <section className="grid gap-2 rounded-[12px] border border-[#d7dbe3] dark:border-[#85868a] bg-white dark:bg-gradient-to-br dark:from-[#151719] dark:to-[#101112] p-3">
      <h2 className="flex items-center gap-2 text-base font-bold">
        <Layers className="h-4 w-4 text-[#ff1634]" />
        {titulo}
      </h2>
      <ol className="relative m-0 list-none space-y-2.5 pl-6">
        {mudancas.map((item, idx) => (
          <li key={item.id} className="relative text-[13px] leading-snug">
            <span
              aria-hidden="true"
              className="absolute -left-[18px] top-1 z-10 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#fa092a]"
            />
            {idx < mudancas.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute -left-[13px] top-3 bottom-[-12px] border-l border-[#9ca3af] dark:border-[#b2b2b2]"
              />
            )}
            <strong className="block font-bold">{item.dataTexto}</strong>
            <span>{item.descricao}</span>
            {item.responsavel && (
              <small className="block text-xs text-[#5c6270] dark:text-[#bfc2cb]">
                Alterado por {item.responsavel}
              </small>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
