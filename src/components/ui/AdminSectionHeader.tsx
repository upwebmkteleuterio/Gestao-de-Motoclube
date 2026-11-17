import type { ReactNode } from 'react';

export interface AdminSectionHeaderProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}

export function AdminSectionHeader({ title, subtitle, action }: AdminSectionHeaderProps) {
  return (
    <header className="mb-4 flex flex-wrap items-center justify-between gap-3">
      <div>
        <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-[#111318] dark:text-[#f7f7f8]">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 text-sm text-[#5c6270] dark:text-[#c1c2c6]">{subtitle}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </header>
  );
}
