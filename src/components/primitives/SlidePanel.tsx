import { useEffect, type ReactNode } from 'react';
import { X } from 'lucide-react';

export interface SlidePanelProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
}

export function SlidePanel({ open, onClose, title, children, footer }: SlidePanelProps) {
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
      className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="flex h-full w-full max-w-[460px] flex-col border-l border-[#d7dbe3] dark:border-[#43444a] bg-white dark:bg-[#16171a] text-[#111318] dark:text-[#f7f7fa] shadow-2xl">
        <div className="flex items-start justify-between gap-3 border-b border-[#e2e5ec] dark:border-[#38393d] px-5 py-4">
          <h2 className="text-xl font-extrabold leading-tight">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="grid h-8 w-8 place-items-center rounded-md text-[#5c6270] dark:text-[#bfc2cb] hover:bg-[#eceef2] dark:hover:bg-[#292c32]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-4">{children}</div>
        {footer && (
          <div className="border-t border-[#e2e5ec] dark:border-[#38393d] px-5 py-4">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
