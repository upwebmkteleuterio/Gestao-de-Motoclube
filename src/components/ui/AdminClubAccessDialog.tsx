import { useState, type FormEvent } from 'react';
import { X } from 'lucide-react';

export interface AdminClubAccessDialogProps {
  clubName: string;
  mode?: 'suspend' | 'reactivate';
  open?: boolean;
  inlinePreview?: boolean;
  onCancel?: () => void;
  onConfirm?: (reason: string) => void;
}

export function AdminClubAccessDialog({
  clubName,
  mode = 'suspend',
  open = true,
  inlinePreview = false,
  onCancel,
  onConfirm,
}: AdminClubAccessDialogProps) {
  const [reason, setReason] = useState('');
  const [error, setError] = useState('');

  if (!open && !inlinePreview) return null;

  const isSuspend = mode === 'suspend';

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!reason.trim()) {
      setError('Informe o motivo desta operação.');
      return;
    }
    setError('');
    onConfirm?.(reason.trim());
  };

  const card = (
    <div className="w-full max-w-[400px] rounded-[10px] border border-[#d7dbe3] dark:border-[#515259] bg-white dark:bg-[#16171a] text-[#111318] dark:text-[#f7f7fa] p-4 shadow-xl">
      <div className="flex items-start justify-between gap-2">
        <h2 className="text-xl font-extrabold leading-tight">
          {isSuspend ? 'Suspender acesso?' : 'Reativar acesso?'}
        </h2>
        <button
          type="button"
          onClick={onCancel}
          aria-label="Fechar"
          className="grid h-7 w-7 place-items-center rounded hover:bg-[#eceef2] dark:hover:bg-[#232428]"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <p className="my-3.5 text-xs text-[#4b515e] dark:text-[#d5d6db]">
        {isSuspend
          ? `O gestor e os membros do ${clubName} ficarão sem acesso.`
          : `O gestor e os membros do ${clubName} voltarão a acessar o sistema.`}
      </p>

      <form onSubmit={handleSubmit} className="grid gap-2.5 text-xs">
        <label className="grid gap-1.5 font-semibold">
          <span>{isSuspend ? 'Motivo da suspensão *' : 'Motivo da reativação *'}</span>
          <textarea
            rows={4}
            required
            placeholder="Descreva o motivo."
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="min-h-[76px] w-full rounded-[6px] border border-[#c5cad3] dark:border-[#5d5e64] bg-[#f8f9fb] dark:bg-[#202124] p-2.5 font-normal focus:outline-none focus:border-[#a8abb6]"
          />
        </label>

        <p className="text-xs italic text-[#5c6270] dark:text-[#e0e0e5]">
          {isSuspend
            ? 'Suspender acesso não cancela a assinatura.'
            : 'A reativação será registrada no histórico de auditoria.'}
        </p>

        {error && (
          <output role="status" className="text-[11px] text-[#b41827] dark:text-[#ffadb2]">
            {error}
          </output>
        )}

        <footer className="mt-1 grid grid-cols-[1fr_1.15fr] gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="flex h-9 items-center justify-center rounded-[6px] border border-[#c5cad3] dark:border-[#666970] bg-white dark:bg-[#191a1d] font-medium hover:bg-[#eceef2] dark:hover:bg-[#25262b]"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="flex h-9 items-center justify-center rounded-[6px] border border-[#e5131d] bg-gradient-to-r from-[#e5111d] to-[#cb0b16] font-semibold text-white hover:brightness-110"
          >
            {isSuspend ? 'Suspender acesso' : 'Reativar acesso'}
          </button>
        </footer>
      </form>
    </div>
  );

  if (inlinePreview) return card;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
    >
      {card}
    </div>
  );
}
