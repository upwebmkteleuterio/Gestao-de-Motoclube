import type { ReactNode } from 'react';

export type BadgeTone = 'neutral' | 'positive' | 'warning' | 'danger' | 'accent';

export interface BadgeProps {
  children: ReactNode;
  tone?: BadgeTone;
  icon?: ReactNode;
  className?: string;
}

const toneClasses: Record<BadgeTone, string> = {
  neutral:
    'bg-[#eceef2] dark:bg-[#34363a] text-[#111318] dark:text-[#eee] border border-[#d7dbe3] dark:border-[#606267]',
  positive:
    'bg-[#dcfce7] dark:bg-[#124715] text-[#15803d] dark:text-[#b9ffc3] border border-[#86efac] dark:border-[#43804b]',
  warning:
    'bg-[#fef3c7] dark:bg-[#62460b] text-[#b45309] dark:text-[#ffdd99] border border-[#fcd34d] dark:border-[#96601d]',
  danger:
    'bg-[#fee2e2] dark:bg-[#850e17] text-[#b91c1c] dark:text-[#fff2f2] border border-[#fca5a5] dark:border-[#ff273a]/50',
  accent:
    'bg-[#ff273a] text-white border border-[#ff273a]',
};

export function Badge({ children, tone = 'neutral', icon, className = '' }: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold leading-tight whitespace-nowrap',
        toneClasses[tone],
        className,
      ].join(' ')}
    >
      {icon}
      {children}
    </span>
  );
}
