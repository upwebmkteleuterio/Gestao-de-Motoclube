import { ChevronRight } from 'lucide-react';
import type { CobrancaAdminResumo } from '../../types';
import { AdminStatusBadge } from './AdminStatusBadge';
import { formatBrlFromCents } from './ResumoDaCompetencia';

export interface AdminInvoicesTableProps {
  invoices: CobrancaAdminResumo[];
  onOpenInvoice?: (invoice: CobrancaAdminResumo) => void;
}

export function AdminInvoicesTable({ invoices, onOpenInvoice }: AdminInvoicesTableProps) {
  return (
    <div className="overflow-hidden rounded-[6px] border border-[#d7dbe3] dark:border-[#424348] bg-white dark:bg-[#141518] tabular-nums">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse text-left">
          <thead>
            <tr className="h-8 bg-[#eceef2] dark:bg-[#202124] text-xs font-semibold">
              <th scope="col" className="px-3">Cobrança</th>
              <th scope="col" className="px-3">Motoclube</th>
              <th scope="col" className="px-3">Plano</th>
              <th scope="col" className="px-3">Valor</th>
              <th scope="col" className="px-3">Vencimento</th>
              <th scope="col" className="px-3">Status</th>
              <th scope="col" className="px-3 text-right">
                <span className="sr-only">Ações</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {invoices.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-3 py-6 text-center text-xs text-[#5c6270] dark:text-[#c1c2c6]">
                  Nenhuma cobrança encontrada.
                </td>
              </tr>
            ) : (
              invoices.map((inv) => {
                const isPaid = inv.status === 'pago';
                return (
                  <tr
                    key={inv.id}
                    onClick={() => onOpenInvoice?.(inv)}
                    className="h-9 cursor-pointer border-t border-[#e2e5ec] dark:border-[#424348] text-xs transition-colors hover:bg-[#f5f6f8] dark:hover:bg-[#28292c]"
                  >
                    <th scope="row" className="px-3 font-bold">
                      #{inv.id}
                    </th>
                    <td className="px-3 font-semibold">{inv.motoclubeNome}</td>
                    <td className="px-3 font-semibold">{inv.planoNome}</td>
                    <td className="px-3">{formatBrlFromCents(inv.valorCentavos)}</td>
                    <td className="px-3">{inv.vencimento}</td>
                    <td className="px-3">
                      <AdminStatusBadge
                        label={isPaid ? 'Paga' : inv.status === 'cancelada' ? 'Cancelada' : 'Em aberto'}
                        tone={isPaid ? 'positive' : inv.status === 'cancelada' ? 'neutral' : 'danger'}
                      />
                    </td>
                    <td className="px-3 text-right">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenInvoice?.(inv);
                        }}
                        aria-label={`Abrir cobrança #${inv.id}`}
                        className="inline-flex h-7 w-7 items-center justify-center rounded text-[#5c6270] dark:text-[#e2e2e6] hover:bg-[#eceef2] dark:hover:bg-[#36363b]"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      <div className="border-t border-[#e2e5ec] dark:border-[#424348] bg-[#eceef2] dark:bg-[#202124] px-3 py-2 text-xs text-[#5c6270] dark:text-[#c1c2c6]">
        {invoices.length} {invoices.length === 1 ? 'cobrança' : 'cobranças'}
      </div>
    </div>
  );
}
