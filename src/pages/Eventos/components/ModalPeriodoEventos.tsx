import type { FormEvent } from 'react';
import { Button, CampoDeFormulario, Modal } from '../../../components';

export interface ModalPeriodoEventosProps {
  open: boolean;
  draftDe: string;
  draftAte: string;
  error: string | null;
  onDraftDeChange: (value: string) => void;
  onDraftAteChange: (value: string) => void;
  onClose: () => void;
  onApply: () => void;
  onResetDefault: () => void;
}

export function ModalPeriodoEventos({
  open,
  draftDe,
  draftAte,
  error,
  onDraftDeChange,
  onDraftAteChange,
  onClose,
  onApply,
  onResetDefault,
}: ModalPeriodoEventosProps) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onApply();
  };

  return (
    <Modal open={open} onClose={onClose} title="Período dos eventos">
      <form onSubmit={handleSubmit} className="grid gap-3.5">
        <p className="text-xs text-[#5c6270] dark:text-[#bfc2cb]">
          Escolha as datas inicial e final para consultar os eventos no intervalo desejado.
        </p>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <CampoDeFormulario
            id="eventos-periodo-inicio"
            rotulo="Data inicial"
            type="date"
            value={draftDe}
            onChange={(e) => onDraftDeChange(e.target.value)}
            required
          />
          <CampoDeFormulario
            id="eventos-periodo-fim"
            rotulo="Data final"
            type="date"
            value={draftAte}
            onChange={(e) => onDraftAteChange(e.target.value)}
            required
          />
        </div>

        {error && (
          <p role="alert" className="text-xs font-medium text-[#dc2626] dark:text-[#ff8996]">
            {error}
          </p>
        )}

        <div className="grid gap-2 pt-1">
          <Button type="submit" fullWidth>
            Aplicar período
          </Button>
          <div className="grid grid-cols-2 gap-2">
            <Button type="button" variant="secondary" size="sm" onClick={onResetDefault}>
              Padrão (3 meses)
            </Button>
            <Button type="button" variant="ghost" size="sm" onClick={onClose}>
              Cancelar
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
}
