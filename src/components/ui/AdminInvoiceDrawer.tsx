import { X } from 'lucide-react';
import type { CobrancaAdminDetalhe } from '../../types';
import { AdminStatusBadge } from './AdminStatusBadge';
import { formatBrlFromCents } from './ResumoDaCompetencia';

export interface AdminInvoiceDrawerProps {
  invoice?: CobrancaAdminDetalhe | null;
  open?: boolean;
  inlinePreview?: boolean;
  onClose?: () => void;
}

export function AdminInvoiceDrawer({
  invoice,
  open = true,
  inlinePreview = false,
  onClose,
}: AdminInvoiceDrawerProps) {
  if (!open && !inlinePreview) return null;

  const isPaid = invoice?.status === 'pago';

  const panel = (
    <div
      className={[
        'flex flex-col border-[#d7dbe3] dark:border-[#4a4b4e] bg-white dark:bg-[#141518] text-[#111318] dark:text-[#f7f7f8] p-4 shadow-xl tabular-nums',
        inlinePreview
          ? 'w-full max-w-[420px] rounded-[10px] border'
          : 'h-full w-full max-w-[440px] border-l',
      ].join(' ')}
    >
      <header className="flex items-center justify-between gap-2 border-b border-[#e2e5ec] dark:border-[#38393d] pb-3">
        <h2 className="text-xl font-extrabold">
          {invoice ? `Cobrança #${invoice.id}` : 'Cobrança indisponível'}
        </h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar cobrança"
          className="grid h-7 w-7 place-items-center rounded hover:bg-[#eceef2] dark:hover:bg-[#36363b]"
        >
          <X className="h-4 w-4" />
        </button>
      </header>

      {invoice ? (
        <dl className="my-4 text-xs">
          <div className="grid grid-cols-[1fr_1.08fr] items-center gap-2 border-b border-[#e2e5ec] dark:border-[#37383c] px-1 py-2.5">
            <dt className="text-[#5c6270] dark:text-[#c1c2c6]">Motoclube</dt>
            <dd className="font-bold">{invoice.motoclubeNome}</dd>
          </div>
          <div className="grid grid-cols-[1fr_1.08fr] items-center gap-2 border-b border-[#e2e5ec] dark:border-[#37383c] px-1 py-2.5">
            <dt className="text-[#5c6270] dark:text-[#c1c2c6]">Plano contratado</dt>
            <dd className="font-bold">{invoice.planoNome}</dd>
          </div>
          <div className="grid grid-cols-[1fr_1.08fr] items-center gap-2 border-b border-[#e2e5ec] dark:border-[#37383c] px-1 py-2.5">
            <dt className="text-[#5c6270] dark:text-[#c1c2c6]">Competência</dt>
            <dd className="font-bold">{invoice.competencia}</dd>
          </div>
          <div className="grid grid-cols-[1fr_1.08fr] items-center gap-2 border-b border-[#e2e5ec] dark:border-[#37383c] px-1 py-2.5">
            <dt className="text-[#5c6270] dark:text-[#c1c2c6]">Valor</dt>
            <dd className="font-bold">{formatBrlFromCents(invoice.valorCentavos)}</dd>
          </div>
          <div className="grid grid-cols-[1fr_1.08fr] items-center gap-2 border-b border-[#e2e5ec] dark:border-[#37383c] px-1 py-2.5">
            <dt className="text-[#5c6270] dark:text-[#c1c2c6]">Vencimento</dt>
            <dd className="font-bold">{invoice.vencimento}</dd>
          </div>
          <div className="grid grid-cols-[1fr_1.08fr] items-center gap-2 border-b border-[#e2e5ec] dark:border-[#37383c] px-1 py-2.5">
            <dt className="text-[#5c6270] dark:text-[#c1c2c6]">Status</dt>
            <dd>
              <AdminStatusBadge
                label={isPaid ? 'Paga' : invoice.status === 'cancelada' ? 'Cancelada' : 'Em aberto'}
                tone={isPaid ? 'positive' : invoice.status === 'cancelada' ? 'neutral' : 'danger'}
              />
            </dd>
          </div>
          {invoice.pagoEm && (
            <div className="grid grid-cols-[1fr_1.08fr] items-center gap-2 border-b border-[#e2e5ec] dark:border-[#37383c] px-1 py-2.5">
              <dt className="text-[#5c6270] dark:text-[#c1c2c6]">Pagamento confirmado</dt>
              <dd className="font-bold">{invoice.pagoEm}</dd>
            </div>
          )}
          {invoice.meio && (
            <div className="grid grid-cols-[1fr_1.08fr] items-center gap-2 border-b border-[#e2e5ec] dark:border-[#37383c] px-1 py-2.5">
              <dt className="text-[#5c6270] dark:text-[#c1c2c6]">Meio</dt>
              <dd className="font-bold">{invoice.meio}</dd>
            </div>
          )}
          {invoice.referenciaPagamento && (
            <div className="grid grid-cols-[1fr_1.08fr] items-center gap-2 border-b border-[#e2e5ec] dark:border-[#37383c] px-1 py-2.5">
              <dt className="text-[#5c6270] dark:text-[#c1c2c6]">Referência do pagamento</dt>
              <dd className="font-mono font-bold">{invoice.referenciaPagamento}</dd>
            </div>
          )}
        </dl>
      ) : (
        <p className="my-6 text-center text-sm text-[#5c6270] dark:text-[#c1c2c6]">
          Cobrança indisponível.
        </p>
      )}

      <button
        type="button"
        onClick={onClose}
        className="mt-auto flex h-9 w-full items-center justify-center rounded-[6px] border border-[#c5cad3] dark:border-[#6e7075] bg-[#f8f9fb] dark:bg-[#232427] text-xs font-bold hover:bg-[#eceef2] dark:hover:bg-[#303237]"
      >
        Fechar
      </button>
    </div>
  );

  if (inlinePreview) return panel;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      {panel}
    </div>
  );
}
