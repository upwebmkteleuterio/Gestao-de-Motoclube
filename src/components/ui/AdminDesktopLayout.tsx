import type { ReactNode } from 'react';
import { Bike, CreditCard, Layers, Shield } from 'lucide-react';
import { NeonMenuIndicator } from './NeonMenuIndicator';

export type AdminSection = 'motoclubes' | 'planos' | 'pagamentos';

export interface AdminDesktopLayoutProps {
  active: AdminSection;
  onNavigate?: (section: AdminSection) => void;
  actorName?: string;
  actorInitials?: string;
  children: ReactNode;
  compact?: boolean;
}

const NAV_ITEMS: { key: AdminSection; label: string; icon: typeof Bike }[] = [
  { key: 'motoclubes', label: 'Motoclubes', icon: Bike },
  { key: 'planos', label: 'Planos', icon: Layers },
  { key: 'pagamentos', label: 'Pagamentos', icon: CreditCard },
];

export function AdminDesktopLayout({
  active,
  onNavigate,
  actorName = 'Superadmin',
  actorInitials = 'SA',
  children,
  compact = false,
}: AdminDesktopLayoutProps) {
  return (
    <div
      className={[
        'grid rounded-[10px] border border-[#d7dbe3] dark:border-[#3d3e42] bg-[#f5f6f8] dark:bg-[radial-gradient(ellipse_at_39%_32%,#18191d,#111215_78%)] text-[#111318] dark:text-[#f7f7f8] overflow-hidden',
        compact ? 'grid-cols-[175px_minmax(0,1fr)] min-h-[240px]' : 'grid-cols-1 md:grid-cols-[220px_minmax(0,1fr)] min-h-[520px]',
      ].join(' ')}
    >
      <aside className="flex flex-col border-b md:border-b-0 md:border-r border-[#d7dbe3] dark:border-[#3d3e42] bg-white dark:bg-[#121316] p-3">
        <div className="grid justify-items-center gap-1 border-b border-[#e2e5ec] dark:border-[#323338] pb-3.5 mb-4 text-center">
          <div className="grid h-10 w-12 place-items-center text-[#e4111e]">
            <Shield className="h-9 w-9" strokeWidth={1.8} />
          </div>
          <strong className="text-sm font-bold leading-tight">Gestão de Motoclubes</strong>
          <span className="text-[10px] font-semibold tracking-wider text-[#5c6270] dark:text-[#e2e2e6]">
            SUPERADMIN
          </span>
        </div>

        <nav aria-label="Menu do Superadmin" className="grid gap-1">
          {NAV_ITEMS.map(({ key, label, icon: Icon }) => {
            const isActive = active === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => onNavigate?.(key)}
                aria-current={isActive ? 'page' : undefined}
                className={[
                  'flex items-center gap-3 rounded-[7px] px-2.5 py-2 text-left text-sm transition-colors',
                  isActive
                    ? 'bg-[#eceef2] dark:bg-[#1b1d24] text-[#111318] dark:text-white font-semibold border border-[var(--mc-accent)]/35'
                    : 'border border-transparent text-[#111318] dark:text-[#f7f7f8] hover:bg-[#eceef2] dark:hover:bg-[#232428]',
                ].join(' ')}
              >
                <Icon className={['h-4 w-4 shrink-0', isActive ? 'text-[var(--mc-accent)]' : ''].join(' ')} />
                <span className="inline-flex flex-col items-start">
                  <span>{label}</span>
                  {isActive && <NeonMenuIndicator className="mt-0.5" />}
                </span>
              </button>
            );
          })}
        </nav>

        <div className="mt-auto flex items-center gap-2.5 border-t border-[#e2e5ec] dark:border-[#323338] pt-3 text-xs">
          <span
            aria-hidden="true"
            className="grid h-7 w-7 place-items-center rounded-full bg-[#d71120] font-bold text-white shrink-0"
          >
            {actorInitials}
          </span>
          <strong className="font-medium truncate">{actorName}</strong>
        </div>
      </aside>

      <div className="min-w-0 p-4">{children}</div>
    </div>
  );
}
