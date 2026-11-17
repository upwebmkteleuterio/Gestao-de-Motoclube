import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDetalheEvento } from '../../../hooks';
import { useAppStore } from '../../../store';

export function useDetalheDoEventoPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const activeClubId = useAppStore((s) => s.activeClubId);

  const query = useDetalheEvento(activeClubId, id);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const handlePointerDown = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
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

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const goToEventos = () => navigate('/eventos');
  const goToParticipantes = () => {
    if (!id) return;
    navigate(`/eventos/${id}/participantes`);
  };

  return {
    ...query,
    menuOpen,
    menuRef,
    toggleMenu,
    closeMenu,
    goToEventos,
    goToParticipantes,
  };
}
