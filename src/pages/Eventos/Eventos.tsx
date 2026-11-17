import { Plus } from 'lucide-react';
import {
  BotaoPrincipal,
  ErrorState,
  EventosSkeleton,
} from '../../components';
import { FiltrosEPeriodoEventos } from './components/FiltrosEPeriodoEventos';
import { ListaEventosClube } from './components/ListaEventosClube';
import { ModalPeriodoEventos } from './components/ModalPeriodoEventos';
import { useEventosPage } from './hooks/useEventosPage';

export function Eventos() {
  const {
    data,
    isLoading,
    isFetching,
    isError,
    refetch,
    aba,
    periodoModalOpen,
    draftDe,
    draftAte,
    periodError,
    setDraftDe,
    setDraftAte,
    handleSelectAba,
    handlePageChange,
    openPeriodoModal,
    closePeriodoModal,
    handleApplyCustomPeriod,
    handleResetDefaultPeriod,
    openCriarEvento,
  } = useEventosPage();

  if (isLoading) {
    return <EventosSkeleton />;
  }

  if (isError || !data) {
    return (
      <div className="mx-auto max-w-[640px] py-4">
        <ErrorState
          titulo="Erro ao carregar eventos"
          mensagem="Não foi possível consultar a agenda de eventos do motoclube."
          onRetry={() => refetch()}
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[640px]">
      <div className="grid gap-4 px-3 pb-6">
        <div className="space-y-1">
          <h1 className="text-[28px] font-bold leading-tight text-[#111318] dark:text-[#f6f7f9]">
            Eventos
          </h1>
          <p className="text-sm text-[#5c6270] dark:text-[#bfc2cb]">
            Agenda oficial, confirmações e chamada do clube.
          </p>
        </div>

        <FiltrosEPeriodoEventos
          data={data}
          aba={aba}
          onSelectAba={handleSelectAba}
          onOpenPeriodoModal={openPeriodoModal}
          onResetDefaultPeriod={handleResetDefaultPeriod}
        />

        <ListaEventosClube
          data={data}
          aba={aba}
          isFetching={isFetching}
          onPageChange={handlePageChange}
          onOpenCriarEvento={openCriarEvento}
          onResetDefaultPeriod={handleResetDefaultPeriod}
        />

        <BotaoPrincipal
          texto="Criar evento"
          icon={<Plus className="h-4 w-4" />}
          onClick={openCriarEvento}
        />
      </div>

      <ModalPeriodoEventos
        open={periodoModalOpen}
        draftDe={draftDe}
        draftAte={draftAte}
        error={periodError}
        onDraftDeChange={setDraftDe}
        onDraftAteChange={setDraftAte}
        onClose={closePeriodoModal}
        onApply={handleApplyCustomPeriod}
        onResetDefault={handleResetDefaultPeriod}
      />
    </div>
  );
}
