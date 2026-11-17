import { useState, type FormEvent } from 'react';
import { Button, Modal } from '../primitives';

export interface ModalDeJustificativaDoMembroProps {
  open: boolean;
  onConfirm: (descricao: string) => void;
  onCancel: () => void;
  initialText?: string;
}

export function ModalDeJustificativaDoMembro({
  open,
  onConfirm,
  onCancel,
  initialText = '',
}: ModalDeJustificativaDoMembroProps) {
  const [texto, setTexto] = useState(initialText);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = texto.trim();
    if (!trimmed) {
      setFeedback('Descreva o motivo da falta antes de enviar.');
      return;
    }
    setFeedback('');
    onConfirm(trimmed);
  };

  return (
    <Modal open={open} onClose={onCancel} title="Justificar falta" maxWidthClass="max-w-[350px]">
      <form onSubmit={handleSubmit} className="grid gap-2">
        <label htmlFor="rider-explanation-input" className="text-xs font-semibold">
          Sua justificativa
        </label>
        <textarea
          id="rider-explanation-input"
          rows={3}
          maxLength={1000}
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          required
          placeholder="Descreva o ocorrido..."
          className="min-h-[68px] w-full rounded-[6px] border border-[#d7dbe3] dark:border-[#8c8d91] bg-white dark:bg-[#22252a] p-2 text-xs leading-snug"
        />
        {feedback && (
          <output role="status" className="text-xs text-[#b45309] dark:text-[#ffc139]">
            {feedback}
          </output>
        )}
        <Button type="submit" variant="primary" size="sm" className="mt-1">
          Confirmar justificativa
        </Button>
        <Button type="button" variant="secondary" size="sm" onClick={onCancel}>
          Cancelar
        </Button>
      </form>
    </Modal>
  );
}
