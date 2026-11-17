import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';
import { ChevronDown } from 'lucide-react';
import { Input } from '../primitives';

export interface CampoDeFormularioProps extends InputHTMLAttributes<HTMLInputElement> {
  rotulo: string;
  rotuloOpcional?: boolean;
  textoDeAjuda?: string;
  erro?: string;
  leftIcon?: ReactNode;
}

export function CampoDeFormulario({
  rotulo,
  rotuloOpcional = false,
  textoDeAjuda,
  erro,
  id,
  ...props
}: CampoDeFormularioProps) {
  return (
    <div className="grid gap-1">
      <Input
        id={id}
        label={undefined}
        helperText={textoDeAjuda}
        error={erro}
        aria-label={rotulo}
        {...props}
      />
      <label
        htmlFor={id}
        className="order-first text-[13px] font-bold text-[#111318] dark:text-[#f6f7f9]"
      >
        {rotulo}{' '}
        {rotuloOpcional && (
          <small className="font-normal text-[#5c6270] dark:text-[#bfc2cb]">(opcional)</small>
        )}
      </label>
    </div>
  );
}

export interface SelectDeFormularioOption {
  value: string;
  label: string;
}

export interface SelectDeFormularioProps extends SelectHTMLAttributes<HTMLSelectElement> {
  rotulo: string;
  options: SelectDeFormularioOption[];
  placeholder?: string;
  textoDeAjuda?: ReactNode;
  erro?: string;
  leftIcon?: ReactNode;
}

export function SelectDeFormulario({
  rotulo,
  options,
  placeholder,
  textoDeAjuda,
  erro,
  leftIcon,
  id,
  className = '',
  ...props
}: SelectDeFormularioProps) {
  return (
    <div className="grid gap-1">
      <label htmlFor={id} className="text-[13px] font-bold text-[#111318] dark:text-[#f6f7f9]">
        {rotulo}
      </label>
      <div className="relative flex items-center">
        {leftIcon && (
          <span className="pointer-events-none absolute left-3 text-[#5c6270] dark:text-[#bfc2cb]">
            {leftIcon}
          </span>
        )}
        <select
          id={id}
          className={[
            'w-full min-h-[40px] appearance-none rounded-[10px] border bg-white dark:bg-[#191b20] py-2 pr-9 text-sm text-[#111318] dark:text-[#f6f7f9]',
            'border-[#d7dbe3] dark:border-[#42454e] hover:border-[#9aa1b0] dark:hover:border-[#a7aebb]',
            'focus-visible:outline-2 focus-visible:outline-[#a6cdff] focus-visible:outline-offset-2',
            'disabled:bg-[#eceef2] dark:disabled:bg-[#292b2e] disabled:opacity-80',
            leftIcon ? 'pl-10' : 'pl-3',
            erro ? 'border-[#ff273a] dark:border-[#ff6371]' : '',
            className,
          ].join(' ')}
          {...props}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 h-4 w-4 text-[#5c6270] dark:text-[#bfc2cb]" />
      </div>
      {erro && <small className="text-xs text-[#dc2626] dark:text-[#ff8996]">{erro}</small>}
      {!erro && textoDeAjuda && (
        <small className="text-xs text-[#5c6270] dark:text-[#bfc2cb]">{textoDeAjuda}</small>
      )}
    </div>
  );
}

export interface TextareaDeFormularioProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  rotulo: string;
  rotuloOpcional?: boolean;
  textoDeAjuda?: ReactNode;
  erro?: string;
  leftIcon?: ReactNode;
}

export function TextareaDeFormulario({
  rotulo,
  rotuloOpcional = false,
  textoDeAjuda,
  erro,
  leftIcon,
  id,
  className = '',
  rows = 3,
  ...props
}: TextareaDeFormularioProps) {
  return (
    <div className="grid gap-1">
      <label htmlFor={id} className="text-[13px] font-bold text-[#111318] dark:text-[#f6f7f9]">
        {rotulo}{' '}
        {rotuloOpcional && (
          <small className="font-normal text-[#5c6270] dark:text-[#bfc2cb]">(opcional)</small>
        )}
      </label>
      <div className="relative">
        {leftIcon && (
          <span className="pointer-events-none absolute left-3 top-3 text-[#5c6270] dark:text-[#bfc2cb]">
            {leftIcon}
          </span>
        )}
        <textarea
          id={id}
          rows={rows}
          className={[
            'w-full min-h-[84px] resize-y rounded-[10px] border bg-white dark:bg-[#191b20] py-2.5 pr-3 text-sm text-[#111318] dark:text-[#f6f7f9]',
            'placeholder:text-[#5c6270] dark:placeholder:text-[#bfc2cb]',
            'border-[#d7dbe3] dark:border-[#42454e] hover:border-[#9aa1b0] dark:hover:border-[#a7aebb]',
            'focus-visible:outline-2 focus-visible:outline-[#a6cdff] focus-visible:outline-offset-2',
            'disabled:bg-[#eceef2] dark:disabled:bg-[#292b2e] disabled:opacity-80',
            leftIcon ? 'pl-10' : 'pl-3',
            erro ? 'border-[#ff273a] dark:border-[#ff6371]' : '',
            className,
          ].join(' ')}
          {...props}
        />
      </div>
      {erro && <small className="text-xs text-[#dc2626] dark:text-[#ff8996]">{erro}</small>}
      {!erro && textoDeAjuda && (
        <small className="text-xs text-[#5c6270] dark:text-[#bfc2cb]">{textoDeAjuda}</small>
      )}
    </div>
  );
}
