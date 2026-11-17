import { useEffect, type ReactNode } from 'react';
import { X } from 'lucide-react';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  maxWidthClass?: string;
}

export function Modal({
  open,
  onClose,
  title,
  children,
  maxWidthClass = 'max-w-[440px]',
}: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-[2px] p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={[
          'w-full rounded-[12px] border border-[#d7dbe3] dark:border-[#515259] bg-white dark:bg-[#16171a] text-[#111318] dark:text-[#f7f7fa] p-4 shadow-2xl',
          maxWidthClass,
        ].join(' ')}
      >
        <div className="mb-3 flex items-center justify-between gap-3">
          <h2 className="text-lg font-extrabold leading-tight">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="grid h-8 w-8 place-items-center rounded-lg text-[#5c6270] dark:text-[#bfc2cb] hover:bg-[#eceef2] dark:hover:bg-[#292c32]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
