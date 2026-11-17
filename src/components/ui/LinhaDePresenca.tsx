import { Calendar, CheckCircle2, ChevronRight, Clock } from 'lucide-react';
import { Avatar } from '../primitives';

export interface LinhaDePresencaProps {
  id: string;
  imagemUrl?: string | null;
  nome: string;
  dataTexto: string;
  local: string;
  presenca: 'presente' | 'faltou';
  justificativaStatus?: 'pendente' | 'aceita' | 'nao_aceita' | null;
  onOpen?: (id: string) => void;
}

const JUSTIFICATIVA_LABEL: Record<'pendente' | 'aceita' | 'nao_aceita', string> = {
  pendente: 'Justificativa em análise',
  aceita: 'Falta justificada',
  nao_aceita: 'Justificativa não aceita',
};

export function LinhaDePresenca({
  id,
  imagemUrl,
  nome,
  dataTexto,
  local,
  presenca,
  justificativaStatus = null,
  onOpen,
}: LinhaDePresencaProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen?.(id)}
      className="grid min-h-[77px] w-full grid-cols-[62px_minmax(0,1fr)_16px] items-center gap-2.5 rounded-[12px] border border-[#d7dbe3] dark:border-[#686a70] bg-white dark:bg-[#191b20] p-2 text-left transition-colors hover:bg-[#f5f6f8] dark:hover:bg-[#30343e]"
    >
      <Avatar name={nome} src={imagemUrl} className="h-[59px] w-[62px] rounded-[10px]" />
      <span className="min-w-0 border-l border-[#d7dbe3] dark:border-[#777] pl-2.5">
        <strong className="mb-0.5 block text-sm font-bold leading-tight">{nome}</strong>
        <small className="flex items-center gap-1 text-xs text-[#5c6270] dark:text-[#bfc2cb]">
          <Calendar className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">
            {dataTexto} • {local}
          </span>
        </small>
        <span className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[13px] font-medium">
          {presenca === 'presente' ? (
            <span className="inline-flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#15803d] dark:text-[#86de9b]" />
              Presente
            </span>
          ) : (
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-[#b45309] dark:text-[#ffb35c]" />
              Faltou
            </span>
          )}
          {presenca === 'faltou' && justificativaStatus && (
            <span className="rounded-full border border-[#d7dbe3] dark:border-[#42454e] bg-[#eceef2] dark:bg-[#242730] px-2 py-0.5 text-[11px] font-normal text-[#5c6270] dark:text-[#bfc2cb]">
              {JUSTIFICATIVA_LABEL[justificativaStatus]}
            </span>
          )}
        </span>
      </span>
      <ChevronRight className="h-4 w-4 text-[#5c6270] dark:text-[#bfc2cb]" aria-hidden="true" />
    </button>
  );
}
