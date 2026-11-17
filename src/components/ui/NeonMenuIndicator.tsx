export interface NeonMenuIndicatorProps {
  active?: boolean;
  size?: 'sm' | 'md';
  className?: string;
}

export function NeonMenuIndicator({
  active = true,
  size = 'md',
  className = '',
}: NeonMenuIndicatorProps) {
  if (!active) return null;

  return (
    <span
      aria-hidden="true"
      className={[
        'pointer-events-none block h-[2.5px] rounded-full bg-[var(--mc-accent)] transition-all duration-200',
        'shadow-[0_0_6px_var(--mc-accent),0_0_12px_color-mix(in_srgb,var(--mc-accent)_75%,transparent)]',
        size === 'sm' ? 'w-6' : 'w-full min-w-[20px]',
        className,
      ].join(' ')}
    />
  );
}
