import { Calendar, Coins, Home, Megaphone, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NeonMenuIndicator } from './NeonMenuIndicator';

export interface MenuMovelDoMembroProps {
  rotaAtual: string;
}

const DESTINOS = [
  { label: 'Início', to: '/membro', icon: <Home className="h-5 w-5" /> },
  { label: 'Eventos', to: '/membro/eventos', icon: <Calendar className="h-5 w-5" /> },
  { label: 'Financeiro', to: '/membro/financeiro', icon: <Coins className="h-5 w-5" /> },
  { label: 'Avisos', to: '/membro/comunicados', icon: <Megaphone className="h-5 w-5" /> },
  { label: 'Perfil', to: '/membro/perfil', icon: <User className="h-5 w-5" /> },
];

function isMemberRouteActive(rotaAtual: string, to: string): boolean {
  if (to === '/membro') {
    return rotaAtual === '/membro';
  }
  if (to === '/membro/eventos') {
    return (
      rotaAtual === '/membro/eventos' ||
      rotaAtual.startsWith('/membro/eventos/') ||
      rotaAtual.startsWith('/membro/justificativa')
    );
  }
  return rotaAtual === to || rotaAtual.startsWith(`${to}/`);
}

export function MenuMovelDoMembro({ rotaAtual }: MenuMovelDoMembroProps) {
  return (
    <nav
      aria-label="Menu do membro"
      className="grid grid-cols-5 border-t border-[#d7dbe3] dark:border-[#3c3f47] bg-white/95 dark:bg-[#131418]/95 px-1 py-1.5 backdrop-blur-md"
    >
      {DESTINOS.map((item) => {
        const active = isMemberRouteActive(rotaAtual, item.to);
        return (
          <Link
            key={item.to}
            to={item.to}
            aria-current={active ? 'page' : undefined}
            className={[
              'flex min-h-[46px] flex-col items-center justify-center gap-0.5 rounded-[7px] px-1 text-[11px] no-underline transition-colors',
              'hover:bg-[#eceef2] dark:hover:bg-[#23262e]',
              active ? 'font-bold text-[var(--mc-accent)]' : 'text-[#5c6270] dark:text-[#bfc2cb]',
            ].join(' ')}
          >
            {item.icon}
            <span className="inline-flex max-w-full flex-col items-center">
              <span className="truncate">{item.label}</span>
              <NeonMenuIndicator active={active} size="sm" className="mt-0.5" />
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
