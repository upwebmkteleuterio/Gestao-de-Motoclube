import { useEffect, useState, type FormEvent } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Avatar, Button, Modal } from '../primitives';

export interface ModalDeMudancaDeNivelProps {
  open: boolean;
  membroNome: string;
  membroFotoUrl?: string | null;
  nivelAtual: string;
  opcoes: Array<{ id: string; nome: string }>;
  isPending?: boolean;
  erro?: string | null;
  concorrenciaDetectada?: boolean;
  onReload?: () => void;
  onConfirm: (novoNivelId: string) => void;
  onCancel: () => void;
}

export function ModalDeMudancaDeNivel({
  open,
  membroNome,
  membroFotoUrl,
  nivelAtual,
  opcoes,
  isPending = false,
  erro = null,
  concorrenciaDetectada = false,
  onReload,
  onConfirm,
  onCancel,
}: ModalDeMudancaDeNivelProps) {
  const [selected, setSelected] = useState('');

  useEffect(() => {
    setSelected('');
  }, [open, nivelAtual]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!selected || isPending) return;
    onConfirm(selected);
  };

  return (
    <Modal
      open={open}
      onClose={() => {
        if (!isPending) onCancel();
      }}
      title="Confirmar mudança de nível"
      maxWidthClass="max-w-[380px]"
    >
      <form onSubmit={handleSubmit} className="grid gap-2.5">
        <div className="flex items-center justify-center gap-2.5 py-1">
          <Avatar
            name={membroNome}
            src={membroFotoUrl}
            className="h-[54px] w-[58px] rounded-[10px]"
          />
          <strong className="border-l border-[#9ca3af] dark:border-[#888] pl-2.5 text-base font-bold">
            {membroNome}
          </strong>
        </div>

        {erro && (
          <div
            role="alert"
            className="grid gap-2 rounded-[10px] border border-[#ff273a]/40 bg-[#ff273a]/10 p-2.5 text-xs text-[#b91c1c] dark:text-[#ff8590]"
          >
            <div className="flex items-start gap-2">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{erro}</span>
            </div>
            {concorrenciaDetectada && onReload && (
              <Button
                type="button"
                variant="secondary"
                size="sm"
                onClick={onReload}
                icon={<RefreshCw className="h-3.5 w-3.5" />}
              >
                Recarregar nível atual
              </Button>
            )}
          </div>
        )}

        <label className="text-[13px] font-semibold">Nível atual</label>
        <div className="rounded-[7px] border border-[#d7dbe3] dark:border-[#777] bg-[#eceef2] dark:bg-[#292b2e] px-2.5 py-1.5 text-sm">
          {nivelAtual}
        </div>

        <label htmlFor="modal-new-level" className="text-[13px] font-semibold">
          Novo nível
        </label>
        <select
          id="modal-new-level"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          disabled={isPending || opcoes.length === 0}
          required
          className="min-h-[38px] w-full rounded-[10px] border border-[#d7dbe3] dark:border-[#a9a9ab] bg-white dark:bg-[#151618] px-3 py-1.5 text-sm disabled:opacity-60"
        >
          <option value="">
            {opcoes.length === 0 ? 'Nenhum outro nível disponível' : 'Selecione um nível'}
          </option>
          {opcoes.map((op) => (
            <option key={op.id} value={op.id}>
              {op.nome}
            </option>
          ))}
        </select>

        <p className="py-1 text-center text-xs text-[#5c6270] dark:text-[#bfc2cb]">
          {opcoes.length === 0
            ? 'Cadastre outros níveis na hierarquia do clube para realizar a troca.'
            : 'A mudança ficará registrada no histórico do membro.'}
        </p>

        <Button
          type="submit"
          variant="primary"
          disabled={!selected || isPending || opcoes.length === 0}
        >
          {isPending ? 'Confirmando...' : 'Confirmar alteração'}
        </Button>
        <Button type="button" variant="secondary" disabled={isPending} onClick={onCancel}>
          Cancelar
        </Button>
      </form>
    </Modal>
  );
}

