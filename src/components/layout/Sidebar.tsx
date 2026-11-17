import type { LucideIcon } from 'lucide-react';
import {
  Award,
  BarChart3,
  Bike,
  Calendar,
  CalendarCheck,
  Coins,
  CreditCard,
  FileCheck2,
  Home,
  Layers,
  Megaphone,
  Palette,
  PanelLeftClose,
  PanelLeftOpen,
  Shield,
  ShieldAlert,
  Sparkles,
  User,
  Users,
  Wallet,
  X,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useAppStore } from '../../store';
import type { PapelVinculo } from '../../types';
import { Avatar } from '../primitives/Avatar';
import { NeonMenuIndicator } from '../ui/NeonMenuIndicator';

export interface SidebarNavItem {
  label: string;
  to: string;
  icon: LucideIcon;
  end?: boolean;
}

export interface SidebarGroup {
  title: string;
  role?: PapelVinculo;
  items: SidebarNavItem[];
}

export const SIDEBAR_GROUPS: SidebarGroup[] = [
  {
    title: 'Superadmin',
    role: 'superadmin',
    items: [
      { label: 'Motoclubes', to: '/admin/motoclubes', icon: Bike },
      { label: 'Planos', to: '/admin/planos', icon: Layers },
      { label: 'Pagamentos', to: '/admin/pagamentos', icon: CreditCard },
    ],
  },
  {
    title: 'Gestão do motoclube',
    role: 'gestor',
    items: [
      { label: 'Dashboard', to: '/', icon: Home, end: true },
      { label: 'Membros', to: '/membros', icon: Users },
      { label: 'Financeiro', to: '/financeiro', icon: Coins },
      { label: 'Eventos', to: '/eventos', icon: Calendar },
      { label: 'Hierarquia', to: '/hierarquia', icon: Layers },
      { label: 'Disciplina', to: '/disciplina', icon: ShieldAlert },
      { label: 'Comunicados', to: '/comunicados', icon: Megaphone },
      { label: 'Identidade do motoclube', to: '/identidade', icon: Palette },
      { label: 'Minha assinatura', to: '/assinatura', icon: Award },
      { label: 'Relatórios', to: '/relatorios', icon: BarChart3 },
    ],
  },
  {
    title: 'Área do membro',
    role: 'membro',
    items: [
      { label: 'Início do membro', to: '/membro', icon: Home, end: true },
      { label: 'Eventos do membro', to: '/membro/eventos', icon: CalendarCheck },
      { label: 'Minha situação financeira', to: '/membro/financeiro', icon: Wallet },
      { label: 'Comunicados do membro', to: '/membro/comunicados', icon: Megaphone },
      { label: 'Meu perfil', to: '/membro/perfil', icon: User },
      { label: 'Minha frequência', to: '/membro/frequencia', icon: FileCheck2 },
      { label: 'Minha disciplina', to: '/membro/disciplina', icon: Shield },
    ],
  },
  {
    title: 'Sistema de design',
    items: [{ label: 'Styleguide (UI Kit)', to: '/styleguide', icon: Sparkles }],
  },
];

const SIDEBAR_PROFILE_MAP: Record<PapelVinculo, { nome: string; subtitulo: string }> = {
  gestor: { nome: 'Ricardo Almeida', subtitulo: 'Gestor do motoclube' },
  membro: { nome: 'Bruno Souza', subtitulo: 'Membro do motoclube' },
  superadmin: { nome: 'Superadmin Global', subtitulo: 'Administração' },
};

export interface SidebarProps {
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

export function Sidebar({ mobileOpen, onCloseMobile }: SidebarProps) {
  const sidebarCollapsed = useAppStore((s) => s.sidebarCollapsed);
  const setSidebarCollapsed = useAppStore((s) => s.setSidebarCollapsed);
  const activeRole = useAppStore((s) => s.activeRole);
  const setActiveRole = useAppStore((s) => s.setActiveRole);

  const profileInfo = SIDEBAR_PROFILE_MAP[activeRole];

  const navContent = (collapsed: boolean) => (
    <div className="flex h-full flex-col border-r border-[#d7dbe3] dark:border-[#2e3138] bg-white/95 dark:bg-[#111216]/95 text-[#111318] dark:text-[#f6f7f9] backdrop-blur-md">
      <div
        className={[
          'flex h-14 shrink-0 items-center border-b border-[#e2e5ec] dark:border-[#2e3138]',
          collapsed ? 'justify-center px-2' : 'justify-between gap-2 px-3.5',
        ].join(' ')}
      >
        <div className={['flex items-center gap-2.5 min-w-0', collapsed ? 'justify-center' : ''].join(' ')}>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] border border-[var(--mc-accent)]/40 bg-[var(--mc-accent)]/10 text-[var(--mc-accent)]">
            <Shield className="h-5 w-5" strokeWidth={2} />
          </span>
          {!collapsed && (
            <div className="min-w-0">
              <strong className="block truncate text-sm font-extrabold tracking-wide uppercase">
                Motoclub
              </strong>
              <span className="block truncate text-[11px] text-[#5c6270] dark:text-[#bfc2cb]">
                Gestão de motoclube
              </span>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={onCloseMobile}
          aria-label="Fechar menu"
          className="lg:hidden grid h-8 w-8 shrink-0 place-items-center rounded-lg text-[#5c6270] dark:text-[#bfc2cb] hover:bg-[#eceef2] dark:hover:bg-[#23262e]"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-2.5 py-2.5 space-y-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {SIDEBAR_GROUPS.map((group) => {
          const isCurrentGroup = group.role === activeRole;
          return (
            <div key={group.title} className="space-y-1">
              {!collapsed && (
                <div className="flex items-center justify-between gap-2 px-2.5 pb-0.5">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#6d7380] dark:text-[#8c919e]">
                    {group.title}
                  </p>
                  {isCurrentGroup && (
                    <span className="rounded bg-[var(--mc-accent)]/12 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[var(--mc-accent)]">
                      Ativo
                    </span>
                  )}
                </div>
              )}
              <nav aria-label={group.title} className="grid gap-0.5">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      end={item.end}
                      onClick={() => {
                        if (group.role) {
                          setActiveRole(group.role);
                        }
                        onCloseMobile();
                      }}
                      title={collapsed ? item.label : undefined}
                      className={({ isActive }) =>
                        [
                          'group flex items-center gap-2.5 rounded-[8px] px-2.5 py-1.5 text-[13px] transition-colors',
                          collapsed ? 'flex-col justify-center gap-1 py-2' : '',
                          isActive
                            ? 'bg-[#f1f3f7] dark:bg-[#191b22] font-semibold text-[#111318] dark:text-white border border-[var(--mc-accent)]/30'
                            : 'border border-transparent text-[#3c414d] dark:text-[#d0d3dc] hover:bg-[#eceef2] dark:hover:bg-[#1d2027]',
                        ].join(' ')
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <Icon
                            className={[
                              'h-4 w-4 shrink-0 transition-colors',
                              isActive ? 'text-[var(--mc-accent)]' : '',
                            ].join(' ')}
                          />
                          {!collapsed ? (
                            <span className="inline-flex min-w-0 flex-col items-start">
                              <span className="truncate">{item.label}</span>
                              {isActive && <NeonMenuIndicator className="mt-0.5" />}
                            </span>
                          ) : (
                            isActive && <NeonMenuIndicator size="sm" />
                          )}
                        </>
                      )}
                    </NavLink>
                  );
                })}
              </nav>
            </div>
          );
        })}
      </div>

      <div className="border-t border-[#e2e5ec] dark:border-[#2e3138] p-3">
        <div className={['flex items-center gap-2.5', collapsed ? 'justify-center' : ''].join(' ')}>
          <Avatar
            name={profileInfo.nome}
            size="sm"
            rounded="full"
            className="bg-[#e4111e] text-white"
          />
          {!collapsed && (
            <div className="min-w-0">
              <strong className="block truncate text-xs font-semibold">{profileInfo.nome}</strong>
              <span className="block truncate text-[11px] text-[#5c6270] dark:text-[#bfc2cb]">
                {profileInfo.subtitulo}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <aside
        className={[
          'hidden lg:block lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 transition-[width] duration-200',
          sidebarCollapsed ? 'lg:w-[72px]' : 'lg:w-[260px]',
        ].join(' ')}
      >
        <div className="relative h-full w-full">
          {navContent(sidebarCollapsed)}
          <button
            type="button"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            aria-label={sidebarCollapsed ? 'Expandir menu lateral' : 'Recolher menu lateral'}
            className="hidden lg:grid place-items-center absolute -right-3.5 top-7 -translate-y-1/2 z-50 h-7 w-7 rounded-full border border-[#d7dbe3] dark:border-[#3c3f48] bg-white dark:bg-[#191b20] text-[#5c6270] dark:text-[#bfc2cb] shadow-md transition-colors hover:text-[#111318] dark:hover:text-white hover:border-[var(--mc-accent)]"
          >
            {sidebarCollapsed ? (
              <PanelLeftOpen className="h-3.5 w-3.5" />
            ) : (
              <PanelLeftClose className="h-3.5 w-3.5" />
            )}
          </button>
        </div>
      </aside>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 flex lg:hidden bg-black/50 backdrop-blur-[2px]"
          role="dialog"
          aria-modal="true"
          aria-label="Menu principal"
          onClick={(e) => {
            if (e.target === e.currentTarget) onCloseMobile();
          }}
        >
          <div className="h-full w-[270px] max-w-[85vw] shadow-2xl">{navContent(false)}</div>
        </div>
      )}
    </>
  );
}
