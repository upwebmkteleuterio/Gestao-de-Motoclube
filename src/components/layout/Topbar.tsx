import { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown, Menu, Moon, Shield, ShieldCheck, Sun, User } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppStore } from '../../store';
import type { PapelVinculo } from '../../types';
import { Avatar } from '../primitives/Avatar';

export interface TopbarProps {
  onOpenMobileMenu: () => void;
}

interface ProfileOption {
  value: PapelVinculo;
  label: string;
  description: string;
  userName: string;
  homeRoute: string;
}

const PROFILE_OPTIONS: ProfileOption[] = [
  {
    value: 'gestor',
    label: 'Gestor do motoclube',
    description: 'Painel, membros, financeiro e eventos',
    userName: 'Ricardo Almeida',
    homeRoute: '/',
  },
  {
    value: 'membro',
    label: 'Membro do motoclube',
    description: 'Início, eventos, finanças e perfil',
    userName: 'Bruno Souza',
    homeRoute: '/membro',
  },
  {
    value: 'superadmin',
    label: 'Administração',
    description: 'Motoclubes, planos e cobranças SaaS',
    userName: 'Superadmin Global',
    homeRoute: '/admin/motoclubes',
  },
];

function resolveAreaLabel(pathname: string): string {
  if (pathname === '/styleguide') return 'Styleguide (UI Kit)';
  if (pathname === '/admin' || pathname.startsWith('/admin/')) return 'Administração';
  if (pathname === '/membro' || pathname.startsWith('/membro/')) return 'Área do membro';
  return 'Gestão do motoclube';
}

function renderRoleIcon(role: PapelVinculo) {
  if (role === 'superadmin') return <ShieldCheck className="h-4 w-4 shrink-0" />;
  if (role === 'membro') return <User className="h-4 w-4 shrink-0" />;
  return <Shield className="h-4 w-4 shrink-0" />;
}

export function Topbar({ onOpenMobileMenu }: TopbarProps) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuContainerRef = useRef<HTMLDivElement>(null);

  const theme = useAppStore((s) => s.theme);
  const toggleTheme = useAppStore((s) => s.toggleTheme);
  const activeRole = useAppStore((s) => s.activeRole);
  const setActiveRole = useAppStore((s) => s.setActiveRole);

  const currentProfile =
    PROFILE_OPTIONS.find((opt) => opt.value === activeRole) ?? PROFILE_OPTIONS[0];

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (
        menuContainerRef.current &&
        !menuContainerRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const handleSelectProfile = (option: ProfileOption) => {
    setActiveRole(option.value);
    setMenuOpen(false);
    navigate(option.homeRoute);
  };

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-3 border-b border-[#d7dbe3] dark:border-[#2e3138] bg-[#ffffff] dark:bg-[#101116] px-4 lg:pl-6">
      <div className="flex items-center gap-3 min-w-0">
        <button
          type="button"
          onClick={onOpenMobileMenu}
          aria-label="Abrir menu"
          className="lg:hidden grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-[#d7dbe3] dark:border-[#42454e] bg-[#f5f6f8] dark:bg-[#1b1d22] text-[#111318] dark:text-[#f6f7f9]"
        >
          <Menu className="h-4 w-4" />
        </button>
        <div className="min-w-0">
          <span className="block truncate text-xs font-semibold uppercase tracking-wider text-[#6d7380] dark:text-[#9ea3b0]">
            Motoclub
          </span>
          <strong className="block truncate text-sm font-bold text-[#111318] dark:text-[#f6f7f9]">
            {resolveAreaLabel(pathname)}
          </strong>
        </div>
      </div>

      <div ref={menuContainerRef} className="relative flex items-center">
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-haspopup="menu"
          aria-expanded={menuOpen}
          aria-label={`Perfil ativo: ${currentProfile.label}. Clique para trocar o perfil.`}
          className="inline-flex items-center gap-2 rounded-full border border-[#d7dbe3] dark:border-[#42454e] bg-[#f5f6f8] dark:bg-[#191b20] p-1 pr-2.5 transition-colors hover:bg-[#e8ebf0] dark:hover:bg-[#23262e]"
        >
          <Avatar
            name={currentProfile.userName}
            size="sm"
            rounded="full"
            className="h-8 w-8 bg-[#e4111e] text-white"
          />
          <span className="hidden sm:block text-left leading-tight">
            <strong className="block text-xs font-bold text-[#111318] dark:text-[#f6f7f9]">
              {currentProfile.userName}
            </strong>
            <span className="block text-[10px] text-[#5c6270] dark:text-[#bfc2cb]">
              {currentProfile.label}
            </span>
          </span>
          <ChevronDown
            className={[
              'h-3.5 w-3.5 text-[#5c6270] dark:text-[#bfc2cb] transition-transform',
              menuOpen ? 'rotate-180' : '',
            ].join(' ')}
          />
        </button>

        {menuOpen && (
          <div
            role="menu"
            aria-label="Trocar perfil de acesso"
            className="absolute right-0 top-full mt-2 w-72 rounded-[14px] border border-[#d7dbe3] dark:border-[#3c3f48] bg-white dark:bg-[#191b20] p-2 shadow-xl z-50"
          >
            <div className="flex items-center gap-2.5 rounded-[10px] bg-[#f5f6f8] dark:bg-[#121316] px-3 py-2.5 mb-2">
              <Avatar
                name={currentProfile.userName}
                size="sm"
                rounded="full"
                className="bg-[#e4111e] text-white"
              />
              <div className="min-w-0">
                <strong className="block truncate text-xs font-bold text-[#111318] dark:text-[#f6f7f9]">
                  {currentProfile.userName}
                </strong>
                <span className="block truncate text-[11px] text-[#5c6270] dark:text-[#bfc2cb]">
                  {currentProfile.label}
                </span>
              </div>
            </div>

            <p className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#6d7380] dark:text-[#8c919e]">
              Trocar perfil
            </p>

            <div className="grid gap-1">
              {PROFILE_OPTIONS.map((option) => {
                const active = activeRole === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    role="menuitemradio"
                    aria-checked={active}
                    onClick={() => handleSelectProfile(option)}
                    className={[
                      'flex w-full items-center gap-2.5 rounded-[10px] px-2.5 py-2 text-left transition-colors',
                      active
                        ? 'bg-[#ff273a]/10 text-[#111318] dark:text-[#f6f7f9]'
                        : 'text-[#3c414d] dark:text-[#d0d3dc] hover:bg-[#eceef2] dark:hover:bg-[#23262e]',
                    ].join(' ')}
                  >
                    <span
                      className={[
                        'grid h-8 w-8 shrink-0 place-items-center rounded-full border',
                        active
                          ? 'border-[#ff273a]/40 bg-[#ff273a] text-white'
                          : 'border-[#d7dbe3] dark:border-[#42454e] bg-white dark:bg-[#15171b] text-[#5c6270] dark:text-[#bfc2cb]',
                      ].join(' ')}
                    >
                      {renderRoleIcon(option.value)}
                    </span>
                    <div className="min-w-0 flex-1">
                      <strong className="block truncate text-xs font-bold">
                        {option.label}
                      </strong>
                      <span className="block truncate text-[11px] text-[#5c6270] dark:text-[#bfc2cb]">
                        {option.description}
                      </span>
                    </div>
                    {active && <Check className="h-4 w-4 shrink-0 text-[#ff273a]" />}
                  </button>
                );
              })}
            </div>

            <div className="my-2 border-t border-[#e2e5ec] dark:border-[#2e3138]" />

            <button
              type="button"
              role="menuitem"
              onClick={toggleTheme}
              className="flex w-full items-center justify-between gap-2 rounded-[10px] px-2.5 py-2 text-xs font-semibold text-[#3c414d] dark:text-[#d0d3dc] transition-colors hover:bg-[#eceef2] dark:hover:bg-[#23262e]"
            >
              <span className="flex items-center gap-2.5">
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4 text-[#ffb35c]" />
                ) : (
                  <Moon className="h-4 w-4 text-[#3a7bd5]" />
                )}
                <span>{theme === 'dark' ? 'Alternar para modo claro' : 'Alternar para modo escuro'}</span>
              </span>
              <span className="rounded bg-[#eceef2] dark:bg-[#262932] px-1.5 py-0.5 text-[10px] font-bold uppercase text-[#5c6270] dark:text-[#bfc2cb]">
                {theme === 'dark' ? 'Escuro' : 'Claro'}
              </span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
