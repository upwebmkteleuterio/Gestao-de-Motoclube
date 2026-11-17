import type { ReactNode } from 'react';
import { Button } from '../primitives';

export interface BotaoPrincipalProps {
  texto: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  icon?: ReactNode;
  className?: string;
}

export function BotaoPrincipal({
  texto,
  disabled = false,
  onClick,
  type = 'button',
  icon,
  className = '',
}: BotaoPrincipalProps) {
  return (
    <Button
      type={type}
      variant="primary"
      fullWidth
      disabled={disabled}
      onClick={onClick}
      icon={icon}
      className={className}
    >
      {texto}
    </Button>
  );
}
