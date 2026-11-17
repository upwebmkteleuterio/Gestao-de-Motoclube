import { CheckCircle2, ChevronRight, Clock, Users } from 'lucide-react';
import { Avatar } from '../primitives';

export interface LinhaDeParticipanteProps {
  id: string;
  nome: string;
  apelido?: string | null;
  nivel: string;
  fotoUrl?: string | null;
  confirmado: boolean;
  presenca?: 'presente' | 'faltou' | null;
  justificativaPendente?: boolean;
  onSelect?: (id: string) => void;
}

export function LinhaDeParticipante({
  id,
  nome,
  apelido,
  nivel,
  fotoUrl,
  confirmado,
  presenca = 'presente',
  justificativaPendente = false,
  onSelect,
}: LinhaDeParticipanteProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect?.(id)}
      className="grid w-full grid-cols-[58px_minmax(0,1fr)_16px] items-center gap-2.5 rounded-[12px] border border-[#d7dbe3] dark:border-[#42454e] bg-white dark:bg-[#191b20] px-2.5 py-2 text-left transition-colors hover:bg-[#f5f6f8] dark:hover:bg-[#30343e]"
    >
      <Avatar name={nome} src={fotoUrl} className="h-[54px] w-[58px] rounded-[10px]" />
      <span className="min-w-0 border-l border-[#d7dbe3] dark:border-[#83868d] pl-2.5">
        <span className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
          <strong className="text-sm font-bold">{nome}</strong>
          <span className="rounded-full border border-[#d7dbe3] dark:border-[#42454e] bg-[#eceef2] dark:bg-[#191b20] px-2 py-0.5 text-[10px] font-semibold">
            {nivel}
          </span>
        </span>
        {apelido && (
          <small className="block text-xs text-[#5c6270] dark:text-[#bfc2cb]">“{apelido}”</small>
        )}
        <small className="mt-0.5 flex items-center gap-1 text-xs text-[#5c6270] dark:text-[#bfc2cb]">
          <Users className="h-3.5 w-3.5" />
          {confirmado ? 'Confirmou participação' : 'Sem confirmação'}
        </small>
        {presenca && (
          <span className="mt-0.5 flex items-center gap-1.5 text-[13px] font-bold">
            {presenca === 'presente' ? (
              <CheckCircle2 className="h-3.5 w-3.5 text-[#15803d] dark:text-[#86de9b]" />
            ) : (
              <Clock className="h-3.5 w-3.5 text-[#b45309] dark:text-[#ffb35c]" />
            )}
            <span>{presenca === 'presente' ? 'Presente' : 'Faltou'}</span>
          </span>
        )}
        {justificativaPendente && (
          <small className="block text-[11px] font-semibold text-[#b45309] dark:text-[#ffb35c]">
            Justificativa pendente
          </small>
        )}
      </span>
      <ChevronRight className="h-4 w-4 text-[#5c6270] dark:text-[#bfc2cb]" aria-hidden="true" />
    </button>
  );
}
