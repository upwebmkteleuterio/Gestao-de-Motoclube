import type { ReactNode } from 'react';
import { BarChart3, Calendar, Users } from 'lucide-react';
import { KpiCard } from './KpiCard';
import type { KpiDotTone } from './KpiCornerDot';

export interface IndicadoresDoPainelProps {
  membrosAtivos: number;
  mensalidadesPendentes: number;
  frequenciaGeralPercentual: number | null;
}

export function IndicadoresDoPainel({
  membrosAtivos,
  mensalidadesPendentes,
  frequenciaGeralPercentual,
}: IndicadoresDoPainelProps) {
  const items: Array<{
    label: string;
    value: string;
    to: string;
    dotTone: KpiDotTone;
    icon: ReactNode;
  }> = [
    {
      label: 'Membros ativos',
      value: String(membrosAtivos),
      to: '/membros',
      dotTone: 'accent',
      icon: <Users className="h-5 w-5 text-[var(--mc-accent)]" />,
    },
    {
      label: 'Mensalidades pendentes',
      value: String(mensalidadesPendentes),
      to: '/financeiro',
      dotTone: mensalidadesPendentes > 0 ? 'warning' : 'positive',
      icon: <Calendar className="h-5 w-5 text-[var(--mc-accent)]" />,
    },
    {
      label: 'Frequência geral',
      value: frequenciaGeralPercentual === null ? '—' : `${frequenciaGeralPercentual}%`,
      to: '/eventos?aba=realizados',
      dotTone: 'positive',
      icon: <BarChart3 className="h-5 w-5 text-[var(--mc-accent)]" />,
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-1.5 tabular-nums">
      {items.map((item) => (
        <KpiCard
          key={item.label}
          to={item.to}
          icon={item.icon}
          value={item.value}
          label={item.label}
          dotTone={item.dotTone}
          className="px-2.5 py-2.5"
        />
      ))}
    </div>
  );
}
