import { useEffect, useState, type ReactNode } from 'react';
import { Award, BarChart3, Layers, Megaphone, Palette, ShieldAlert } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useIdentidadeAtiva } from '../../hooks';
import { useAppStore } from '../../store';
import { SlidePanel } from '../primitives/SlidePanel';
import { AtalhoDoPerfil } from '../ui/AtalhoDoPerfil';
import { MenuMovelDaGestao } from '../ui/MenuMovelDaGestao';
import { MenuMovelDoMembro } from '../ui/MenuMovelDoMembro';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';

export interface AppLayoutProps {
  children: ReactNode;
}

const MAIS_OPTIONS = [
  {
    titulo: 'Hierarquia',
    descricao: 'Níveis e regras de evolução do clube',
    destino: '/hierarquia',
    icone: <Layers className="h-4 w-4 text-[#ff344d]" />,
  },
  {
    titulo: 'Disciplina',
    descricao: 'Ocorrências e registros disciplinares',
    destino: '/disciplina',
    icone: <ShieldAlert className="h-4 w-4 text-[#ff344d]" />,
  },
  {
    titulo: 'Comunicados',
    descricao: 'Avisos e publicações para os membros',
    destino: '/comunicados',
    icone: <Megaphone className="h-4 w-4 text-[#ff344d]" />,
  },
  {
    titulo: 'Identidade do motoclube',
    descricao: 'Nome, escudo e paleta do clube',
    destino: '/identidade',
    icone: <Palette className="h-4 w-4 text-[#ff344d]" />,
  },
  {
    titulo: 'Minha assinatura',
    descricao: 'Plano contratado e histórico SaaS',
    destino: '/assinatura',
    icone: <Award className="h-4 w-4 text-[#ff344d]" />,
  },
  {
    titulo: 'Relatórios',
    descricao: 'Indicadores consolidados de gestão',
    destino: '/relatorios',
    icone: <BarChart3 className="h-4 w-4 text-[#ff344d]" />,
  },
];

export function AppLayout({ children }: AppLayoutProps) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeRole = useAppStore((s) => s.activeRole);
  const setActiveRole = useAppStore((s) => s.setActiveRole);
  const activeClubId = useAppStore((s) => s.activeClubId);
  const sidebarCollapsed = useAppStore((s) => s.sidebarCollapsed);
  const theme = useAppStore((s) => s.theme);
  const scrollPositions = useAppStore((s) => s.scrollPositions);
  const setScrollPosition = useAppStore((s) => s.setScrollPosition);
  const moreMenuOpen = useAppStore((s) => Boolean(s.openModals['gestao-mais-menu']));
  const setModalOpen = useAppStore((s) => s.setModalOpen);

  const identidadeQuery = useIdentidadeAtiva(activeClubId);

  const isMemberArea = pathname === '/membro' || pathname.startsWith('/membro/');
  const isAdminArea = pathname === '/admin' || pathname.startsWith('/admin/');
  const isStyleguide = pathname === '/styleguide';

  useEffect(() => {
    if (isStyleguide) return;
    const expectedRole = isAdminArea ? 'superadmin' : isMemberArea ? 'membro' : 'gestor';
    if (activeRole !== expectedRole) {
      setActiveRole(expectedRole);
    }
  }, [activeRole, isAdminArea, isMemberArea, isStyleguide, setActiveRole]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    root.style.colorScheme = theme;

    const topbarColor = theme === 'dark' ? '#101116' : '#ffffff';
    let themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (!themeColorMeta) {
      themeColorMeta = document.createElement('meta');
      themeColorMeta.setAttribute('name', 'theme-color');
      document.head.appendChild(themeColorMeta);
    }
    themeColorMeta.setAttribute('content', topbarColor);
  }, [theme]);

  useEffect(() => {
    const accentHex = identidadeQuery.data?.cor_destaque_hex;
    document.documentElement.style.setProperty('--mc-accent', accentHex || '#ff273a');
  }, [identidadeQuery.data?.cor_destaque_hex]);

  useEffect(() => {
    setModalOpen('gestao-mais-menu', false);
  }, [pathname, setModalOpen]);

  useEffect(() => {
    const savedY = scrollPositions[pathname] ?? 0;
    window.scrollTo({ top: savedY, behavior: 'instant' as ScrollBehavior });

    let timer: number | undefined;
    const handleScroll = () => {
      if (timer) window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        setScrollPosition(pathname, window.scrollY);
      }, 120);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timer) window.clearTimeout(timer);
    };
  }, [pathname, setScrollPosition]);

  const showMemberBottomNav = !isAdminArea && !isStyleguide && (isMemberArea || activeRole === 'membro');
  const showGestorBottomNav = !isAdminArea && !isStyleguide && !showMemberBottomNav;

  return (
    <div className="mc-app-canvas min-h-screen flex w-full overflow-x-clip text-[#111318] dark:text-[#f6f7f9]">
      <Sidebar mobileOpen={mobileOpen} onCloseMobile={() => setMobileOpen(false)} />

      <div
        className={[
          'flex min-w-0 flex-1 flex-col transition-[padding] duration-200',
          sidebarCollapsed ? 'lg:pl-[72px]' : 'lg:pl-[260px]',
        ].join(' ')}
      >
        <Topbar onOpenMobileMenu={() => setMobileOpen(true)} />

        <main className="flex-1 min-w-0 overflow-x-clip px-3 py-5 sm:px-6 sm:py-6 lg:px-8 pb-24 md:pb-8">
          <div className="mx-auto w-full min-w-0 max-w-[1280px]">{children}</div>
        </main>

        {(showMemberBottomNav || showGestorBottomNav) && (
          <div className="fixed inset-x-0 bottom-0 z-30 md:hidden">
            {showMemberBottomNav ? (
              <MenuMovelDoMembro rotaAtual={pathname} />
            ) : (
              <MenuMovelDaGestao
                rotaAtual={pathname}
                onNavigate={(rota) => navigate(rota)}
                onOpenMore={() => setModalOpen('gestao-mais-menu', true)}
              />
            )}
          </div>
        )}
      </div>

      <SlidePanel
        open={moreMenuOpen}
        onClose={() => setModalOpen('gestao-mais-menu', false)}
        title="Mais opções"
      >
        <div className="grid gap-2.5">
          {MAIS_OPTIONS.map((opt) => (
            <AtalhoDoPerfil
              key={opt.destino}
              titulo={opt.titulo}
              descricao={opt.descricao}
              destino={opt.destino}
              icone={opt.icone}
            />
          ))}
        </div>
      </SlidePanel>
    </div>
  );
}
