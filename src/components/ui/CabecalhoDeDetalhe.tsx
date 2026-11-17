import type { ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface CabecalhoDeDetalheProps {
  titulo: string;
  voltarPara?: string;
  onVoltar?: () => void;
  acao?: ReactNode;
}

export function CabecalhoDeDetalhe({
  titulo,
  voltarPara = '/',
  onVoltar,
  acao,
}: CabecalhoDeDetalheProps) {
  const backButtonClasses =
    'grid min-h-[44px] min-w-[36px] place-items-center rounded-[10px] text-[#111318] dark:text-[#f6f7f9] hover:bg-[#eceef2] dark:hover:bg-[#292c32] transition-colors';

  return (
    <div className="flex min-w-0 items-center gap-2 text-[#111318] dark:text-[#f6f7f9]">
      {onVoltar ? (
        <button type="button" onClick={onVoltar} className={backButtonClasses} aria-label="Voltar">
          <ArrowLeft className="h-5 w-5" />
        </button>
      ) : (
        <Link to={voltarPara} className={backButtonClasses} aria-label="Voltar">
          <ArrowLeft className="h-5 w-5" />
        </Link>
      )}
      <h1 className="min-w-0 flex-1 truncate text-lg font-bold leading-tight sm:text-xl">
        {titulo}
      </h1>
      {acao && <div className="shrink-0">{acao}</div>}
    </div>
  );
}
