import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAlterarNivelMembro, useNivelEHistorico } from '../../../hooks';
import { ServiceConcurrencyError } from '../../../services';
import { useAppStore } from '../../../store';

export function useConfirmarMudancaDeNivelPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const activeClubId = useAppStore((s) => s.activeClubId);

  const [erro, setErro] = useState<string | null>(null);
  const [concorrenciaDetectada, setConcorrenciaDetectada] = useState(false);

  const query = useNivelEHistorico(activeClubId, id, { periodo: '2026' });
  const alterarMutation = useAlterarNivelMembro();

  const voltarParaNivel = (atualizadoNome?: string) => {
    const memberId = query.data?.membroId ?? id ?? '';
    const suffix = atualizadoNome ? `?atualizado=${encodeURIComponent(atualizadoNome)}` : '';
    navigate(`/membros/${memberId}/nivel${suffix}`, { replace: true });
  };

  const reloadMemberLevel = async () => {
    setErro(null);
    setConcorrenciaDetectada(false);
    await query.refetch();
  };

  const confirmarMudanca = async (novoNivelId: string) => {
    const data = query.data;
    if (!data || alterarMutation.isPending) return;

    setErro(null);
    setConcorrenciaDetectada(false);

    try {
      const result = await alterarMutation.mutateAsync({
        motoclubeId: data.clube.motoclubeId,
        membroId: data.membroId,
        gestorId: data.clube.gestorId,
        nivelAtualEsperadoId: data.nivelAtualId,
        novoNivelId,
      });
      voltarParaNivel(result.novoNivelNome);
    } catch (err) {
      if (err instanceof ServiceConcurrencyError) {
        setConcorrenciaDetectada(true);
        setErro(err.message);
        await query.refetch();
      } else if (err instanceof Error) {
        setErro(err.message);
      } else {
        setErro('Não foi possível confirmar a mudança de nível.');
      }
    }
  };

  return {
    ...query,
    erro,
    concorrenciaDetectada,
    isPendingMutation: alterarMutation.isPending,
    confirmarMudanca,
    reloadMemberLevel,
    cancelar: () => voltarParaNivel(),
    goToMembers: () => navigate('/membros'),
  };
}
