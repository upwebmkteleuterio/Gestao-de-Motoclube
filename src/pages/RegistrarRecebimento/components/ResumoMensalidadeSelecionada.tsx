import {
  Card,
  LinhaDeMensalidade,
  formatBrlFromCents,
} from '../../../components';
import type { MensalidadePendenteOptionDTO } from '../../../types';

export interface ResumoMensalidadeSelecionadaProps {
  mensalidade: MensalidadePendenteOptionDTO;
}

export function ResumoMensalidadeSelecionada({ mensalidade }: ResumoMensalidadeSelecionadaProps) {
  return (
    <div className="grid gap-2">
      <LinhaDeMensalidade
        membroNome={mensalidade.membroNome}
        apelido={mensalidade.membroApelido}
        fotoUrl={mensalidade.membroFotoUrl}
        vencimentoTexto={`${mensalidade.competenciaRotulo} · ${mensalidade.vencimentoTexto}`}
        saldoCentavos={mensalidade.saldoCentavos}
        valorTotalCentavos={mensalidade.valorCentavos}
        situacao={mensalidade.situacao}
      />

      <Card padding="sm" className="grid grid-cols-3 gap-2 text-center tabular-nums">
        <div className="grid min-w-0 gap-0.5">
          <span className="truncate text-[11px] text-[#5c6270] dark:text-[#bfc2cb]">Valor original</span>
          <strong className="truncate text-xs font-bold text-[#111318] dark:text-[#f6f7f9]">
            {formatBrlFromCents(mensalidade.valorCentavos)}
          </strong>
        </div>
        <div className="grid min-w-0 gap-0.5 border-x border-[#e2e5ec] dark:border-[#343842] px-1">
          <span className="truncate text-[11px] text-[#5c6270] dark:text-[#bfc2cb]">Já recebido</span>
          <strong className="truncate text-xs font-bold text-[#15803d] dark:text-[#86de9b]">
            {formatBrlFromCents(mensalidade.pagoCentavos)}
          </strong>
        </div>
        <div className="grid min-w-0 gap-0.5">
          <span className="truncate text-[11px] text-[#5c6270] dark:text-[#bfc2cb]">Saldo em aberto</span>
          <strong className="truncate text-xs font-bold text-[#b45309] dark:text-[#ffb35c]">
            {formatBrlFromCents(mensalidade.saldoCentavos)}
          </strong>
        </div>
      </Card>
    </div>
  );
}
