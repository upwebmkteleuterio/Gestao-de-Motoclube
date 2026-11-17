import { CalendarX2 } from 'lucide-react';
import { Button, CardDeEvento, EmptyState } from '../../../components';
import type { EventosAbaTipo, EventosQueryResult } from '../../../types';

export interface ListaEventosClubeProps {
  data: EventosQueryResult;
  aba: EventosAbaTipo;
  isFetching: boolean;
  onPageChange: (nextPage: number) => void;
  onOpenCriarEvento: () => void;
  onResetDefaultPeriod: () => void;
}

export function ListaEventosClube({
  data,
  aba,
  isFetching,
  onPageChange,
  onOpenCriarEvento,
  onResetDefaultPeriod,
}: ListaEventosClubeProps) {
  const tituloContagem =
    data.totalFiltrado === 1 ? '1 evento no período' : `${data.totalFiltrado} eventos no período`;

  return (
    <div className="grid gap-3">
      <div className="flex items-center justify-between px-1">
        <strong className="text-sm font-bold text-[#111318] dark:text-[#f6f7f9]">
          {tituloContagem}
        </strong>
        {isFetching && (
          <span className="text-xs text-[#5c6270] dark:text-[#bfc2cb]">Atualizando...</span>
        )}
      </div>

      {data.itens.length === 0 ? (
        <EmptyState
          titulo={
            aba === 'upcoming'
              ? 'Nenhum evento próximo encontrado'
              : 'Nenhum evento realizado encontrado'
          }
          descricao={
            !data.periodoPadrao
              ? 'Não há eventos registrados dentro do intervalo de datas selecionado.'
              : aba === 'upcoming'
                ? 'Crie um novo passeio, reunião ou encontro para convocar os membros.'
                : 'Ainda não há eventos encerrados nos últimos 3 meses.'
          }
          icone={<CalendarX2 className="h-5 w-5" />}
          acao={
            !data.periodoPadrao ? (
              <Button variant="secondary" size="sm" onClick={onResetDefaultPeriod}>
                Voltar ao período padrão
              </Button>
            ) : aba === 'upcoming' ? (
              <Button size="sm" onClick={onOpenCriarEvento}>
                Criar evento
              </Button>
            ) : undefined
          }
        />
      ) : (
        <div className="grid gap-3">
          {data.itens.map((evento) => (
            <CardDeEvento
              key={evento.id}
              id={evento.id}
              fotoUrl={evento.fotoUrl}
              categoria={evento.categoria}
              titulo={evento.titulo}
              dataTexto={evento.dataTexto}
              local={evento.local}
              confirmadosTotal={evento.confirmadosTotal}
              confirmadosAvatares={evento.confirmadosAvatares}
              destino={`/eventos/${evento.id}`}
            />
          ))}
        </div>
      )}

      {data.totalPages > 1 && (
        <div className="flex items-center justify-between gap-2 pt-1">
          <Button
            type="button"
            variant="secondary"
            size="sm"
            disabled={data.page <= 1 || isFetching}
            onClick={() => onPageChange(data.page - 1)}
          >
            Anterior
          </Button>
          <span className="text-xs font-medium text-[#5c6270] dark:text-[#bfc2cb] tabular-nums">
            Página {data.page} de {data.totalPages}
          </span>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            disabled={data.page >= data.totalPages || isFetching}
            onClick={() => onPageChange(data.page + 1)}
          >
            Próxima
          </Button>
        </div>
      )}
    </div>
  );
}
