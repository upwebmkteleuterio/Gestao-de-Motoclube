export type KpiDotTone = 'accent' | 'positive' | 'warning' | 'danger' | 'neutral';

export interface KpiCornerDotProps {
  tone?: KpiDotTone;
  className?: string;
}

const PATTERN_TONE_CLASSES: Record<KpiDotTone, string> = {
  accent: 'text-[#8c92a0]/35 dark:text-[#ffffff]/25',
  positive: 'text-[#15803d]/30 dark:text-[#86de9b]/25',
  warning: 'text-[#b45309]/30 dark:text-[#ffb35c]/25',
  danger: 'text-[#dc2626]/30 dark:text-[#ff6371]/25',
  neutral: 'text-[#6d7380]/30 dark:text-[#bfc2cb]/22',
};

export function KpiCornerDot({ tone = 'accent', className = '' }: KpiCornerDotProps) {
  return (
    <span
      aria-hidden="true"
      className={[
        'pointer-events-none absolute right-0 top-0 z-0 h-16 w-24 rounded-tr-[inherit]',
        '[background-image:radial-gradient(currentColor_1.15px,transparent_1.15px)] [background-size:6px_6px]',
        '[mask-image:radial-gradient(ellipse_at_100%_0%,rgba(0,0,0,0.9)_12%,transparent_76%)]',
        '[-webkit-mask-image:radial-gradient(ellipse_at_100%_0%,rgba(0,0,0,0.9)_12%,transparent_76%)]',
        PATTERN_TONE_CLASSES[tone],
        className,
      ].join(' ')}
    />
  );
}
