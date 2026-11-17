import {
  BarChart3,
  Calendar,
  CheckCircle2,
  Clock,
  Coins,
  Shield,
  Users,
  XCircle,
} from 'lucide-react';
import type { ResumoMensalidadesPeriodoDTO } from '../../types';
import { KpiCornerDot } from './KpiCornerDot';
import { getFrequencyColorClass } from './LinhaDeMembro';

export interface ResumoDeIndicadoresProps {
  frequenciaPercentual: number | null;
  mensalidadeStatus?: string;
  ocorrenciasTotal?: number;
  eventosTotal?: number;
  presencasTotal?: number;
  faltasTotal?: number;
  justificadasTotal?: number;
  exibirResumoGeral?: boolean;
  exibirResumoEventos?: boolean;
  mensalidadesPeriodo?: ResumoMensalidadesPeriodoDTO | null;
}

export function ResumoDeIndicadores({
  frequenciaPercentual,
  mensalidadeStatus = 'Em dia',
  ocorrenciasTotal = 0,
  eventosTotal = 0,
  presencasTotal = 0,
  faltasTotal = 0,
  justificadasTotal = 0,
  exibirResumoGeral = true,
  exibirResumoEventos = true,
  mensalidadesPeriodo = null,
}: ResumoDeIndicadoresProps) {
  const freqColor = getFrequencyColorClass(frequenciaPercentual);
  const emAtraso = mensalidadeStatus.toLowerCase().includes('atraso');

  return (
    <div className="grid gap-3 tabular-nums">
      {exibirResumoGeral && (
        <dl
          aria-label="Resumo do perfil"
          className="relative overflow-hidden grid grid-cols-3 rounded-[12px] border border-[#d7dbe3] dark:border-[#74767c] bg-white dark:bg-gradient-to-br dark:from-[#1b1d20] dark:to-[#131415] py-2.5"
        >
          <KpiCornerDot tone="accent" />
          <div className="flex min-w-0 flex-col items-center justify-center gap-1 px-1.5 text-center sm:flex-row sm:gap-2 sm:px-2 sm:text-left">
            <BarChart3 className={`h-4 w-4 shrink-0 ${freqColor}`} />
            <div className="min-w-0 max-w-full">
              <dd className="truncate text-xs font-bold leading-tight sm:text-sm">
                {frequenciaPercentual === null ? '—' : `${frequenciaPercentual}%`}
              </dd>
              <dt className="truncate text-[10px] text-[#5c6270] dark:text-[#bfc2cb] sm:text-[11px]">
                Frequência
              </dt>
            </div>
          </div>
          <div className="flex min-w-0 flex-col items-center justify-center gap-1 border-l border-[#d7dbe3] dark:border-[#65676c] px-1.5 text-center sm:flex-row sm:gap-2 sm:px-2 sm:text-left">
            {emAtraso ? (
              <Clock className="h-4 w-4 shrink-0 text-[#b45309] dark:text-[#ffb35c]" />
            ) : (
              <CheckCircle2 className="h-4 w-4 shrink-0 text-[#15803d] dark:text-[#86de9b]" />
            )}
            <div className="min-w-0 max-w-full">
              <dd className="truncate text-xs font-bold leading-tight sm:text-sm">
                {mensalidadeStatus}
              </dd>
              <dt className="truncate text-[10px] text-[#5c6270] dark:text-[#bfc2cb] sm:text-[11px]">
                Mensalidade
              </dt>
            </div>
          </div>
          <div className="flex min-w-0 flex-col items-center justify-center gap-1 border-l border-[#d7dbe3] dark:border-[#65676c] px-1.5 text-center sm:flex-row sm:gap-2 sm:px-2 sm:text-left">
            <Shield className="h-4 w-4 shrink-0 text-[#dc2626] dark:text-[#ff6371]" />
            <div className="min-w-0 max-w-full">
              <dd className="truncate text-xs font-bold leading-tight sm:text-sm">
                {ocorrenciasTotal}
              </dd>
              <dt className="truncate text-[10px] text-[#5c6270] dark:text-[#bfc2cb] sm:text-[11px]">
                Ocorrências
              </dt>
            </div>
          </div>
        </dl>
      )}

      {exibirResumoEventos && (
        <section className="relative overflow-hidden grid gap-2 rounded-[12px] border border-[#d7dbe3] dark:border-[#85868a] bg-white dark:bg-gradient-to-br dark:from-[#151719] dark:to-[#101112] p-3">
          <KpiCornerDot tone="positive" />
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-[#111318] dark:text-[#f6f7f9]" />
            <h2 className="text-base font-bold">Eventos</h2>
          </div>
          <div className="grid grid-cols-3 gap-1 text-center text-[11px] sm:text-xs">
            <span className="flex min-w-0 flex-wrap items-center justify-center gap-1 px-0.5">
              <Calendar className="h-3.5 w-3.5 shrink-0" />
              <strong>{eventosTotal}</strong> {eventosTotal === 1 ? 'evento' : 'eventos'}
            </span>
            <span className="flex min-w-0 flex-wrap items-center justify-center gap-1 border-l border-[#d7dbe3] dark:border-[#76787b] px-0.5">
              <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#15803d] dark:text-[#86de9b]" />
              <strong>{presencasTotal}</strong> {presencasTotal === 1 ? 'presença' : 'presenças'}
            </span>
            <span className="flex min-w-0 flex-wrap items-center justify-center gap-1 border-l border-[#d7dbe3] dark:border-[#76787b] px-0.5">
              <XCircle className="h-3.5 w-3.5 shrink-0 text-[#dc2626] dark:text-[#ff6371]" />
              <strong>{faltasTotal}</strong> {faltasTotal === 1 ? 'falta' : 'faltas'}
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-[#eceef2] dark:bg-[#28292b] px-2.5 py-1.5 text-sm font-bold">
            <Users className="h-4 w-4 text-[#ff1634]" />
            <span>
              {frequenciaPercentual === null ? '—' : `${frequenciaPercentual}%`} de participação
            </span>
          </div>
          <p className="ml-2 text-xs text-[#5c6270] dark:text-[#bfc2cb]">
            {justificadasTotal} {justificadasTotal === 1 ? 'falta justificada' : 'faltas justificadas'}.
          </p>
        </section>
      )}

      {mensalidadesPeriodo && (
        <section className="relative overflow-hidden grid gap-2.5 rounded-[12px] border border-[#d7dbe3] dark:border-[#85868a] bg-white dark:bg-gradient-to-br dark:from-[#151719] dark:to-[#101112] p-3">
          <KpiCornerDot tone="warning" />
          <div className="flex items-center gap-2.5">
            <Coins className="h-4 w-4 shrink-0 text-[#111318] dark:text-[#f6f7f9]" />
            <div>
              <h2 className="text-base font-bold leading-tight">Mensalidades</h2>
              <p className="text-xs text-[#5c6270] dark:text-[#bfc2cb]">
                <span className="font-semibold text-[#111318] dark:text-[#f6f7f9]">
                  {mensalidadesPeriodo.total}
                </span>{' '}
                no período
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            <div className="flex items-center gap-2 rounded-[7px] border border-[#d7dbe3] dark:border-[#747679] px-2 py-1.5 text-[11px] leading-tight">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-[#15803d] dark:text-[#86de9b]" />
              <span>
                <strong className="block text-base font-bold leading-tight">
                  {mensalidadesPeriodo.pagasNoPrazo}
                </strong>
                Pagas no prazo
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-[7px] border border-[#d7dbe3] dark:border-[#747679] px-2 py-1.5 text-[11px] leading-tight">
              <Clock className="h-4 w-4 shrink-0 text-[#b45309] dark:text-[#ffb35c]" />
              <span>
                <strong className="block text-base font-bold leading-tight">
                  {mensalidadesPeriodo.pagasComAtraso}
                </strong>
                Pagas com atraso
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-[7px] border border-[#d7dbe3] dark:border-[#747679] px-2 py-1.5 text-[11px] leading-tight">
              <Shield className="h-4 w-4 shrink-0 text-[#dc2626] dark:text-[#ff6371]" />
              <span>
                <strong className="block text-base font-bold leading-tight">
                  {mensalidadesPeriodo.vencidas}
                </strong>
                Vencidas
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-[7px] border border-[#d7dbe3] dark:border-[#747679] px-2 py-1.5 text-[11px] leading-tight">
              <Calendar className="h-4 w-4 shrink-0 text-[#5c6270] dark:text-[#bfc2cb]" />
              <span>
                <strong className="block text-base font-bold leading-tight">
                  {mensalidadesPeriodo.aVencer}
                </strong>
                A vencer
              </span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

