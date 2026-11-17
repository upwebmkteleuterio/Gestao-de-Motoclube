import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[#ff273a] text-[#140509] dark:text-white hover:bg-[#ff5263] dark:hover:bg-[#d90926] border border-transparent shadow-sm',
  secondary:
    'bg-white dark:bg-[#191b20] text-[#111318] dark:text-[#f6f7f9] border border-[#d7dbe3] dark:border-[#e0e1e5] hover:bg-[#eceef2] dark:hover:bg-[#30343e]',
  outline:
    'bg-transparent text-[#111318] dark:text-[#f6f7f9] border border-[#c9ced8] dark:border-[#666970] hover:bg-[#eceef2] dark:hover:bg-[#25262b]',
  ghost:
    'bg-transparent text-[#111318] dark:text-[#f6f7f9] border border-transparent hover:bg-[#eceef2] dark:hover:bg-[#292c32]',
  danger:
    'bg-[#850e17] text-white border border-[#ff273a] hover:bg-[#a9121e]',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'min-h-[34px] px-3 py-1.5 text-xs',
  md: 'min-h-[42px] px-4 py-2 text-sm',
  lg: 'min-h-[46px] px-5 py-2.5 text-base',
};

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  className = '',
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={[
        'inline-flex items-center justify-center gap-2 rounded-[10px] font-bold whitespace-nowrap shrink-0 cursor-pointer transition-all duration-150',
        'focus-visible:outline-2 focus-visible:outline-[#a6cdff] focus-visible:outline-offset-2',
        'active:translate-y-[1px] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:translate-y-0',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth ? 'w-full' : '',
        className,
      ].join(' ')}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
