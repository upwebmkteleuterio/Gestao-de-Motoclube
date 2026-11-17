import type { ReactNode } from 'react';
import { BarChart3, Clock, Shield } from 'lucide-react';
import { KpiCard } from './KpiCard';
import type { KpiDotTone } from './KpiCornerDot';

export interface IndicadoresPessoaisProps {
  frequenciaPercentual: number | null;
  mensalidadesPendentes: number;
  registrosEmAnalise: number;
}

export function IndicadoresPessoais({
  frequenciaPercentual,
  mensalidadesPendentes,
  registrosEmAnalise,
}: IndicadoresPessoaisProps) {
  const cards: Array<{
    to: string;
    icon: ReactNode;
    value: string;
    label: string;
    dotTone: KpiDotTone;
  }> = [
    {
      to: '/membro/frequencia',
      icon: <BarChart3 className="h-5 w-5 text-[var(--mc-accent)]" />,
      value: frequenciaPercentual === null ? '—' : `${frequenciaPercentual}%`,
      label: 'Minha frequência',
      dotTone: 'positive',
    },
    {
      to: '/membro/financeiro',
      icon: <Shield className="h-5 w-5 text-[var(--mc-accent)]" />,
      value: String(mensalidadesPendentes),
      label: 'Mensalidade pendente',
      dotTone: mensalidadesPendentes > 0 ? 'accent' : 'positive',
    },
    {
      to: '/membro/disciplina',
      icon: <Clock className="h-5 w-5 text-[#b45309] dark:text-[#ffb35c]" />,
      value: String(registrosEmAnalise),
      label: 'Registro em análise',
      dotTone: registrosEmAnalise > 0 ? 'warning' : 'neutral',
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-1.5 sm:gap-2 tabular-nums">
      {cards.map((card) => (
        <KpiCard
          key={card.label}
          to={card.to}
          icon={card.icon}
          value={card.value}
          label={card.label}
          dotTone={card.dotTone}
          className="rounded-[12px] px-2.5 py-2.5"
        />
      ))}
    </div>
  );
}
