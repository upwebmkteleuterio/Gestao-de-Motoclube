import { Layers } from 'lucide-react';
import {
  EmptyState,
  LinhaDoTempo,
  ResumoDeIndicadores,
  SeletorDePeriodo,
  type PeriodoPreset,
} from '../../../components';
import type { NivelEHistoricoDTO } from '../../../types';

export interface ResumoEHistoricoNivelProps {
  data: NivelEHistoricoDTO;
  periodo: PeriodoPreset;
  deInicial?: string;
  ateInicial?: string;
  isFetching: boolean;
  onDraftChange: (draft: { periodo: PeriodoPreset; de: string; ate: string }) => void;
  onApplyPeriodo: (payload: { periodo: PeriodoPreset; de?: string; ate?: string }) => void;
}

export function ResumoEHistoricoNivel({
  data,
  periodo,
  deInicial,
  ateInicial,
  isFetching,
  onDraftChange,
  onApplyPeriodo,
}: ResumoEHistoricoNivelProps) {
  return (
    <div className="grid gap-3.5">
      <SeletorDePeriodo
        periodo={periodo}
        deInicial={deInicial ?? data.periodoInicio}
        ateInicial={ateInicial ?? data.periodoFim}
        rotuloResumo={data.periodoRotulo}
        isLoading={isFetching}
        onDraftChange={onDraftChange}
        onApply={onApplyPeriodo}
      />

      <ResumoDeIndicadores
        exibirResumoGeral={false}
        exibirResumoEventos
        frequenciaPercentual={data.eventosPeriodo.taxaPercentual}
        eventosTotal={data.eventosPeriodo.eventosTotal}
        presencasTotal={data.eventosPeriodo.presencasTotal}
        faltasTotal={data.eventosPeriodo.faltasTotal}
        justificadasTotal={data.eventosPeriodo.justificadasTotal}
        mensalidadesPeriodo={data.mensalidadesPeriodo}
      />

      {data.historico.length === 0 ? (
        <EmptyState
          titulo="Sem histórico de níveis"
          descricao="Nenhuma alteração de nível foi registrada para este integrante."
          icone={<Layers className="h-5 w-5" />}
        />
      ) : (
        <LinhaDoTempo mudancas={data.historico} />
      )}
    </div>
  );
}
