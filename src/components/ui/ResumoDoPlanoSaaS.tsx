import { Calendar, CheckCircle2, Users } from 'lucide-react';
import { formatBrlFromCents } from './ResumoDaCompetencia';

export interface ResumoDoPlanoSaaSProps {
  planoNome: string;
  valorMensalCentavos: number;
  statusLabel: string;
  afiliadosAtivos: number;
  limiteAfiliados: number;
  proximaCobrancaTexto: string;
}

export function ResumoDoPlanoSaaS({
  planoNome,
  valorMensalCentavos,
  statusLabel,
  afiliadosAtivos,
  limiteAfiliados,
  proximaCobrancaTexto,
}: ResumoDoPlanoSaaSProps) {
  return (
    <section className="rounded-[12px] border border-[#ff273a] bg-gradient-to-br from-[#a0242a] via-[#65181d] to-[#371315] p-4 text-[#f7f4f4] tabular-nums">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-sm text-[#e8d8d8]">Plano atual</p>
          <h2 className="text-2xl font-extrabold leading-tight">{planoNome}</h2>
          <p className="text-base font-semibold">{formatBrlFromCents(valorMensalCentavos)}/mês</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#169e50] bg-[#136132] px-3 py-1 text-xs font-bold text-white">
          <CheckCircle2 className="h-3.5 w-3.5" />
          {statusLabel}
        </span>
      </div>

      <div className="mt-3.5 grid grid-cols-2 border-t border-white/40 pt-3.5">
        <div className="flex items-center gap-2.5 pr-2">
          <Users className="h-7 w-7 shrink-0 text-[#ff283e]" />
          <div>
            <strong className="block text-xl font-bold leading-none">{afiliadosAtivos}</strong>
            <span className="text-xs text-[#e8d8d8]">de {limiteAfiliados} afiliados</span>
          </div>
        </div>
        <div className="flex items-center gap-2.5 border-l border-white/60 pl-4">
          <Calendar className="h-7 w-7 shrink-0 text-[#ff283e]" />
          <div>
            <span className="block text-xs text-[#e8d8d8]">Próxima cobrança</span>
            <strong className="block text-sm font-bold leading-tight">
              {proximaCobrancaTexto}
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}
