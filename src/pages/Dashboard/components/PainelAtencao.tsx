import { CheckCircle2, Clock } from 'lucide-react';
import { AtalhoDoPerfil } from '../../../components';

export interface PainelAtencaoProps {
  mensalidadesPendentes: number;
}

export function PainelAtencao({ mensalidadesPendentes }: PainelAtencaoProps) {
  return (
    <section className="grid gap-2.5 pt-1">
      <h2 className="text-base font-bold text-[#111318] dark:text-[#f6f7f9]">
        Precisa da sua atenção
      </h2>

      {mensalidadesPendentes > 0 ? (
        <AtalhoDoPerfil
          titulo={`${mensalidadesPendentes} ${
            mensalidadesPendentes === 1 ? 'mensalidade pendente' : 'mensalidades pendentes'
          }`}
          descricao="Ver cobranças em aberto no financeiro"
          destino="/financeiro?filtro=atraso"
          icone={<Clock className="h-5 w-5 text-[#dc2626] dark:text-[#ff6371]" />}
        />
      ) : (
        <AtalhoDoPerfil
          titulo="Nenhuma pendência no momento"
          descricao="Mensalidades do clube em dia"
          destino="/financeiro"
          icone={<CheckCircle2 className="h-5 w-5 text-[#15803d] dark:text-[#86de9b]" />}
        />
      )}
    </section>
  );
}
