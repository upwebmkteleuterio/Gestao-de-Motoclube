import { Calendar, List } from 'lucide-react';
import { Button, EmptyState, LinhaDePresenca } from '../../../components';
import type { FrequenciaMembroDTO, PresencaFiltroTipo } from '../../../types';

export interface ListaPresencasMembroProps {
  data: FrequenciaMembroDTO;
  presencaFiltro: PresencaFiltroTipo;
  expanded: boolean;
  isFetching: boolean;
  onOpenEvento: (eventoId: string) => void;
  onToggleExpanded: () => void;
  onShowAllPresencas: () => void;
}

export function ListaPresencasMembro({
  data,
  presencaFiltro,
  expanded,
  isFetching,
  onOpenEvento,
  onToggleExpanded,
  onShowAllPresencas,
}: ListaPresencasMembroProps) {
  return (
    <div className="grid gap-3">
      {data.itens.length === 0 ? (
        <EmptyState
          titulo="Nenhum evento neste recorte"
          descricao="Não há eventos encerrados com participação registrada para este filtro no período."
          icone={<Calendar className="h-5 w-5" />}
          acao={
            presencaFiltro !== 'all' ? (
              <Button variant="secondary" size="sm" onClick={onShowAllPresencas}>
                Ver todos os eventos
              </Button>
            ) : undefined
          }
        />
      ) : (
        <div className="grid gap-2" id="attendance-list">
          {data.itens.map((item) => (
            <LinhaDePresenca
              key={item.id}
              id={item.eventoId}
              imagemUrl={item.eventoFotoUrl}
              nome={item.eventoTitulo}
              dataTexto={item.dataTexto}
              local={item.local}
              presenca={item.presenca}
              justificativaStatus={item.justificativaStatus}
              onOpen={onOpenEvento}
            />
          ))}
        </div>
      )}

      <section className="space-y-0.5 pt-1">
        <h2 className="text-[17px] font-bold leading-tight text-[#111318] dark:text-[#f6f7f9]">
          Trajetória de participação
        </h2>
        <p className="text-xs text-[#5c6270] dark:text-[#bfc2cb]">
          As presenças vêm das chamadas dos eventos.
        </p>
      </section>

      {data.totalFiltrado > 3 && (
        <Button
          type="button"
          variant="secondary"
          fullWidth
          disabled={isFetching}
          aria-controls="attendance-list"
          aria-expanded={expanded}
          onClick={onToggleExpanded}
          icon={<List className="h-4 w-4" />}
        >
          {expanded ? 'Mostrar menos' : `Ver todos os ${data.totalFiltrado} eventos`}
        </Button>
      )}
    </div>
  );
}
