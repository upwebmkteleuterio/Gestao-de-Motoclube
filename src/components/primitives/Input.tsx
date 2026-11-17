import type { InputHTMLAttributes, ReactNode } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: ReactNode;
}

export function Input({
  label,
  helperText,
  error,
  leftIcon,
  id,
  className = '',
  ...props
}: InputProps) {
  return (
    <div className="grid gap-1">
      {label && (
        <label htmlFor={id} className="text-[13px] font-bold text-[#111318] dark:text-[#f6f7f9]">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {leftIcon && (
          <span className="pointer-events-none absolute left-3 text-[#5c6270] dark:text-[#bfc2cb]">
            {leftIcon}
          </span>
        )}
        <input
          id={id}
          className={[
            'w-full min-h-[40px] rounded-[10px] border bg-white dark:bg-[#191b20] px-3 py-2 text-sm text-[#111318] dark:text-[#f6f7f9]',
            'placeholder:text-[#5c6270] dark:placeholder:text-[#bfc2cb]',
            'border-[#d7dbe3] dark:border-[#42454e] hover:border-[#9aa1b0] dark:hover:border-[#a7aebb]',
            'focus-visible:outline-2 focus-visible:outline-[#a6cdff] focus-visible:outline-offset-2',
            'disabled:bg-[#eceef2] dark:disabled:bg-[#292b2e] disabled:opacity-80',
            leftIcon ? 'pl-10' : '',
            error ? 'border-[#ff273a] dark:border-[#ff6371]' : '',
            className,
          ].join(' ')}
          {...props}
        />
      </div>
      {error && <small className="text-xs text-[#dc2626] dark:text-[#ff8996]">{error}</small>}
      {!error && helperText && (
        <small className="text-xs text-[#5c6270] dark:text-[#bfc2cb]">{helperText}</small>
      )}
    </div>
  );
}
