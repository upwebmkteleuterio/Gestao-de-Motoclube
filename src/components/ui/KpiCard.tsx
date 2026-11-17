import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { KpiCornerDot, type KpiDotTone } from './KpiCornerDot';

export interface KpiCardProps {
  label: string;
  value: ReactNode;
  icon?: ReactNode;
  helper?: ReactNode;
  to?: string;
  onClick?: () => void;
  dotTone?: KpiDotTone;
  layout?: 'responsive' | 'horizontal';
  className?: string;
}

export function KpiCard({
  label,
  value,
  icon,
  helper,
  to,
  onClick,
  dotTone = 'accent',
  layout = 'responsive',
  className = '',
}: KpiCardProps) {
  const baseClasses = [
    'relative overflow-hidden min-w-0 rounded-[10px] border border-[#d7dbe3] dark:border-[#3c3f48]',
    'bg-white dark:bg-gradient-to-br dark:from-[#1a1c22] dark:to-[#131419] px-3 py-2.5 text-left text-[#111318] dark:text-[#f6f7f9]',
    'no-underline transition-colors tabular-nums',
    to || onClick
      ? 'hover:bg-[#f5f6f8] dark:hover:from-[#22252e] dark:hover:to-[#181a20] hover:border-[#9aa1b0] dark:hover:border-[#858a96] cursor-pointer'
      : '',
    layout === 'horizontal'
      ? 'grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-2.5'
      : 'flex flex-col items-start gap-1.5 sm:flex-row sm:items-center sm:gap-2',
    className,
  ].join(' ');

  const content = (
    <>
      <KpiCornerDot tone={dotTone} />
      {icon && <span className="relative z-10 shrink-0">{icon}</span>}
      <span className="relative z-10 min-w-0 w-full">
        <strong className="block truncate text-lg font-bold leading-tight text-[#111318] dark:text-[#f6f7f9] sm:text-xl">
          {value}
        </strong>
        <span className="block break-words text-[11px] leading-tight text-[#5c6270] dark:text-[#bfc2cb]">
          {label}
        </span>
        {helper && (
          <span className="mt-0.5 block truncate text-[10px] text-[#6d7380] dark:text-[#9ea3b0]">
            {helper}
          </span>
        )}
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        {content}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={baseClasses}>
        {content}
      </button>
    );
  }

  return <div className={baseClasses}>{content}</div>;
}
