import {
  ErrorState,
  IndicadoresDoPainel,
  PainelSkeleton,
} from '../../components';
import { PainelAtencao } from './components/PainelAtencao';
import { PainelProximoEncontro } from './components/PainelProximoEncontro';
import { useDashboardPage } from './hooks/useDashboardPage';

export function Dashboard() {
  const { data, isLoading, isError, refetch, onCreateEvent } = useDashboardPage();

  if (isLoading) {
    return <PainelSkeleton />;
  }

  if (isError || !data) {
    return (
      <div className="mx-auto max-w-[640px] py-4">
        <ErrorState
          titulo="Erro ao carregar o painel"
          mensagem="Não foi possível carregar os indicadores do clube."
          onRetry={() => refetch()}
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[640px]">
      <div className="grid gap-4 px-3 pb-4">
        <div className="space-y-1">
          <h1 className="text-[28px] font-bold leading-tight text-[#111318] dark:text-[#f6f7f9]">
            Olá, {data.clube.gestorPrimeiroNome}
          </h1>
          <p className="text-sm text-[#5c6270] dark:text-[#bfc2cb]">Seu clube, sob controle.</p>
        </div>

        <IndicadoresDoPainel
          membrosAtivos={data.membrosAtivos}
          mensalidadesPendentes={data.mensalidadesPendentes}
          frequenciaGeralPercentual={data.frequenciaGeralPercentual}
        />

        <PainelProximoEncontro evento={data.proximoEvento} onCreateEvent={onCreateEvent} />

        <PainelAtencao mensalidadesPendentes={data.mensalidadesPendentes} />
      </div>
    </div>
  );
}
