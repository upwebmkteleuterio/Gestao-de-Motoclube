import { Button } from '../primitives';

export interface PainelDeParticipacaoDoMembroProps {
  confirmado: boolean;
  encerrado?: boolean;
  onToggleConfirmacao?: () => void;
  onJustificarFalta?: () => void;
  disabled?: boolean;
}

export function PainelDeParticipacaoDoMembro({
  confirmado,
  encerrado = false,
  onToggleConfirmacao,
  onJustificarFalta,
  disabled = false,
}: PainelDeParticipacaoDoMembroProps) {
  return (
    <section className="grid gap-2 rounded-[10px] border border-[#d7dbe3] dark:border-[#54565d] bg-white dark:bg-[#171a1e] px-3 py-2.5">
      <h2 className="text-base font-bold">Sua participação</h2>
      <div>
        <span
          className={[
            'inline-block rounded-full border px-3 py-0.5 text-xs font-semibold',
            encerrado
              ? 'border-[#9f7019] bg-[#65470d] text-[#fff3d7]'
              : confirmado
                ? 'border-[#0a8a43] bg-[#0a8a43] text-[#e9ffef]'
                : 'border-[#d7dbe3] dark:border-[#5f6066] bg-[#eceef2] dark:bg-[#41434a]',
          ].join(' ')}
        >
          {encerrado
            ? 'Faltou'
            : confirmado
              ? 'Confirmado'
              : 'Aguardando confirmação'}
        </span>
      </div>

      {encerrado ? (
        <Button
          variant="primary"
          size="sm"
          disabled={disabled}
          onClick={onJustificarFalta}
          fullWidth
        >
          Justificar falta
        </Button>
      ) : (
        <Button
          variant={confirmado ? 'secondary' : 'primary'}
          size="sm"
          disabled={disabled}
          onClick={onToggleConfirmacao}
          fullWidth
        >
          {confirmado ? 'Cancelar participação' : 'Confirmar participação'}
        </Button>
      )}
      <p className="text-[11px] text-[#5c6270] dark:text-[#d3d4d9]">
        A presença é registrada pela gestão.
      </p>
    </section>
  );
}
