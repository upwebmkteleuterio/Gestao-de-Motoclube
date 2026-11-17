import { Link } from 'react-router-dom';
import { Button, CardDeEvento, EmptyState } from '../../../components';
import type { PainelGestorProximoEvento } from '../../../types';

export interface PainelProximoEncontroProps {
  evento: PainelGestorProximoEvento | null;
  onCreateEvent: () => void;
}

export function PainelProximoEncontro({ evento, onCreateEvent }: PainelProximoEncontroProps) {
  return (
    <section className="grid gap-2.5 pt-1">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-bold text-[#111318] dark:text-[#f6f7f9]">Próximo encontro</h2>
        <Link
          to="/eventos"
          className="text-xs font-semibold text-[#dc2626] dark:text-[#ff6673] hover:underline"
        >
          Ver todos ›
        </Link>
      </div>

      {evento ? (
        <CardDeEvento
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
      ) : (
        <EmptyState
          titulo="Nenhum encontro próximo"
          descricao="Publique um novo evento para acompanhar confirmações dos integrantes."
          acao={
            <Button size="sm" onClick={onCreateEvent}>
              Criar evento
            </Button>
          }
        />
      )}
    </section>
  );
}
