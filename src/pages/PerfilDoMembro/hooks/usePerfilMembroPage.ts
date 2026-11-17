import { useNavigate, useParams } from 'react-router-dom';
import { usePerfilMembro } from '../../../hooks';
import { useAppStore } from '../../../store';

export function usePerfilMembroPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const activeClubId = useAppStore((s) => s.activeClubId);

  const panelKey = `perfil-membro-detalhes-${id ?? ''}`;
  const detailsOpen = useAppStore((s) => Boolean(s.openModals[panelKey]));
  const setModalOpen = useAppStore((s) => s.setModalOpen);

  const query = usePerfilMembro(activeClubId, id);

  return {
    ...query,
    detailsOpen,
    openDetails: () => setModalOpen(panelKey, true),
    closeDetails: () => setModalOpen(panelKey, false),
    goToMembers: () => navigate('/membros'),
    goToEdit: (memberId: string) => {
      setModalOpen(panelKey, false);
      navigate(`/membros/${memberId}/editar`);
    },
    goToLevelHistory: (memberId: string) => {
      setModalOpen(panelKey, false);
      navigate(`/membros/${memberId}/nivel`);
    },
  };
}
