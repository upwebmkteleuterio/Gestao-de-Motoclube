import { useNavigate } from 'react-router-dom';
import { usePainelGestor } from '../../../hooks';
import { useAppStore } from '../../../store';

export function useDashboardPage() {
  const navigate = useNavigate();
  const activeClubId = useAppStore((s) => s.activeClubId);
  const query = usePainelGestor(activeClubId);

  return {
    ...query,
    onCreateEvent: () => navigate('/eventos/novo'),
  };
}
