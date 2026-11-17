import type { ReactNode } from 'react';
import { Calendar, Coins, Home, MoreHorizontal, Users } from 'lucide-react';
import { NeonMenuIndicator } from './NeonMenuIndicator';

export interface ManagementNavItem {
  id: string;
  label: string;
  rota: string;
  icone?: ReactNode;
}

export interface MenuMovelDaGestaoProps {
  itens?: ManagementNavItem[];
  rotaAtual: string;
  onNavigate: (rota: string) => void;
  onOpenMore?: () => void;
}

const MAIS_ROUTES = ['/hierarquia', '/disciplina', '/comunicados', '/identidade', '/assinatura', '/relatorios'];

const defaultItems: ManagementNavItem[] = [
  { id: 'painel', label: 'Painel', rota: '/', icone: <Home className="h-5 w-5" /> },
  { id: 'membros', label: 'Membros', rota: '/membros', icone: <Users className="h-5 w-5" /> },
  { id: 'financeiro', label: 'Financeiro', rota: '/financeiro', icone: <Coins className="h-5 w-5" /> },
  { id: 'eventos', label: 'Eventos', rota: '/eventos', icone: <Calendar className="h-5 w-5" /> },
  { id: 'mais', label: 'Mais', rota: '/mais', icone: <MoreHorizontal className="h-5 w-5" /> },
];

function isRouteActive(rotaAtual: string, item: ManagementNavItem): boolean {
  if (item.id === 'painel') {
    return rotaAtual === '/' || rotaAtual === '/dashboard';
  }
  if (item.id === 'mais') {
    return MAIS_ROUTES.some((prefix) => rotaAtual.startsWith(prefix));
  }
  return rotaAtual === item.rota || rotaAtual.startsWith(`${item.rota}/`);
}

export function MenuMovelDaGestao({
  itens = defaultItems,
  rotaAtual,
  onNavigate,
  onOpenMore,
}: MenuMovelDaGestaoProps) {
  return (
    <nav
      aria-label="Menu da gestão"
      className="grid grid-cols-5 border-t border-[#d7dbe3] dark:border-[#3c3f47] bg-white/95 dark:bg-[#131418]/95 px-1 py-1.5 backdrop-blur-md"
    >
      {itens.map((item) => {
        const active = isRouteActive(rotaAtual, item);
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              if (item.id === 'mais' && onOpenMore) {
                onOpenMore();
              } else {
                onNavigate(item.rota === '/mais' ? '/hierarquia' : item.rota);
              }
            }}
            aria-current={active ? 'page' : undefined}
            className={[
              'flex min-h-[46px] flex-col items-center justify-center gap-0.5 rounded-lg px-0.5 text-[11px] transition-colors',
              'hover:bg-[#eceef2] dark:hover:bg-[#23262e]',
              active
                ? 'font-bold text-[var(--mc-accent)]'
                : 'text-[#5c6270] dark:text-[#bfc2cb]',
            ].join(' ')}
          >
            {item.icone}
            <span className="inline-flex max-w-full flex-col items-center">
              <span className="truncate">{item.label}</span>
              <NeonMenuIndicator active={active} size="sm" className="mt-0.5" />
            </span>
          </button>
        );
      })}
    </nav>
  );
}
