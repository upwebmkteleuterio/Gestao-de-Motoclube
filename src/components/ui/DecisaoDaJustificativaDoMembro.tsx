import { CheckCircle2, Clock, XCircle } from 'lucide-react';

export interface DecisaoDaJustificativaDoMembroProps {
  estado: 'pendente' | 'aceita' | 'nao_aceita';
  descricao: string;
}

export function DecisaoDaJustificativaDoMembro({
  estado,
  descricao,
}: DecisaoDaJustificativaDoMembroProps) {
  const config =
    estado === 'aceita'
      ? {
          icon: <CheckCircle2 className="h-4 w-4 text-[#15803d] dark:text-[#24d559]" />,
          title: 'Justificativa aprovada',
          emphasis: null,
        }
      : estado === 'nao_aceita'
        ? {
            icon: <XCircle className="h-4 w-4 text-[#dc2626] dark:text-[#ff243e]" />,
            title: 'Justificativa não aceita',
            emphasis: null,
          }
        : {
            icon: <Clock className="h-4 w-4 text-[#b45309] dark:text-[#ffc139]" />,
            title: 'Justificativa ',
            emphasis: 'em análise',
          };

  return (
    <section
      aria-live="polite"
      className="rounded-[8px] border border-[#d7dbe3] dark:border-[#54565d] bg-white dark:bg-[#17191d] px-3 py-2.5"
    >
      <h2 className="flex items-center gap-1.5 text-sm font-extrabold">
        {config.icon}
        <span>
          {config.title}
          {config.emphasis && (
            <strong className="text-[#b45309] dark:text-[#ffc139]">{config.emphasis}</strong>
          )}
        </span>
      </h2>
      <p className="mt-1.5 whitespace-pre-wrap text-xs leading-snug text-[#5c6270] dark:text-[#d3d4d9]">
        {descricao}
      </p>
    </section>
  );
}
