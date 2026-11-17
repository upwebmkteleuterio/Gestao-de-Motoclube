import {
  GrupoDeFiltros,
  ResumoDeFrequenciaDoMembro,
  SeletorDePeriodo,
  type PeriodoFrequenciaPreset,
} from '../../../components';
import type { FrequenciaMembroDTO, PresencaFiltroTipo } from '../../../types';

export interface FiltrosEFrequenciaPeriodoProps {
  data: FrequenciaMembroDTO;
  periodo: PeriodoFrequenciaPreset;
  deInicial: string;
  ateInicial: string;
  presencaFiltro: PresencaFiltroTipo;
  isFetching: boolean;
  onDraftChange: (draft: { periodo: PeriodoFrequenciaPreset; de: string; ate: string }) => void;
  onApplyPeriodo: (payload: {
    periodo: PeriodoFrequenciaPreset;
    de?: string;
    ate?: string;
  }) => void;
  onSelectPresenca: (next: string) => void;
}

export function FiltrosEFrequenciaPeriodo({
  data,
  periodo,
  deInicial,
  ateInicial,
  presencaFiltro,
  isFetching,
  onDraftChange,
  onApplyPeriodo,
  onSelectPresenca,
}: FiltrosEFrequenciaPeriodoProps) {
  return (
    <div className="grid gap-3">
      <SeletorDePeriodo<PeriodoFrequenciaPreset>
        variante="frequencia"
        periodo={periodo}
        deInicial={deInicial}
        ateInicial={ateInicial}
        rotuloResumo={data.periodoRotulo}
        isLoading={isFetching}
        onDraftChange={onDraftChange}
        onApply={onApplyPeriodo}
      />

      <ResumoDeFrequenciaDoMembro
        previstos={data.previstos}
        presencas={data.presencas}
        taxaPercentual={data.taxaPercentual}
      />

      <GrupoDeFiltros
        ariaLabel="Filtrar por presença"
        variante="tabs"
        selecionado={presencaFiltro}
        onSelect={onSelectPresenca}
        opcoes={[
          { id: 'all', nome: 'Todos' },
          { id: 'present', nome: 'Presentes' },
          { id: 'absent', nome: 'Faltas' },
        ]}
      />
    </div>
  );
}
