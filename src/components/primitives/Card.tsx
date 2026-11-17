import type { HTMLAttributes, ReactNode } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const paddingMap = {
  none: 'p-0',
  sm: 'p-2.5',
  md: 'p-3.5',
  lg: 'p-5',
};

export function Card({ children, padding = 'md', className = '', ...props }: CardProps) {
  return (
    <div
      className={[
        'rounded-[12px] border border-[#d7dbe3] dark:border-[#42454e] bg-white dark:bg-[#191b20] text-[#111318] dark:text-[#f6f7f9]',
        paddingMap[padding],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
}
