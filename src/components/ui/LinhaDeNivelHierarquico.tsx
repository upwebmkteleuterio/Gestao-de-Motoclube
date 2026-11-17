import { Edit3, Users } from 'lucide-react';

export interface LinhaDeNivelHierarquicoProps {
  ordem: number;
  titulo: string;
  quantidadeMembros: number;
  ativo?: boolean;
  onEdit?: () => void;
}

export function LinhaDeNivelHierarquico({
  ordem,
  titulo,
  quantidadeMembros,
  ativo = false,
  onEdit,
}: LinhaDeNivelHierarquicoProps) {
  const paddedOrder = String(ordem).padStart(2, '0');

  return (
    <div
      className={[
        'relative grid min-h-[40px] grid-cols-[36px_minmax(0,1fr)_auto_32px] items-center gap-2 rounded-[9px] border py-1 pl-3 pr-1.5 tabular-nums',
        ativo
          ? 'border-[#fc2b45] bg-red-50 dark:bg-gradient-to-r dark:from-[#341418] dark:via-[#39181e] dark:to-[#241418]'
          : 'border-[#d7dbe3] dark:border-[#35383e] bg-white dark:bg-[#171b20]',
      ].join(' ')}
    >
      <span
        className={[
          'grid min-h-[24px] place-items-center rounded-[6px] text-[13px] font-bold',
          ativo
            ? 'bg-[#fa192f] text-white'
            : 'bg-[#eceef2] dark:bg-[#373a40] text-[#111318] dark:text-[#f6f7f9]',
        ].join(' ')}
      >
        {paddedOrder}
      </span>
      <strong className="truncate text-sm font-bold">{titulo}</strong>
      <span className="inline-flex items-center gap-1 whitespace-nowrap text-xs text-[#5c6270] dark:text-[#d7d8dc]">
        <Users className="h-3.5 w-3.5" />
        {quantidadeMembros} membros
      </span>
      <button
        type="button"
        onClick={onEdit}
        aria-label={`Editar ${titulo}`}
        className="grid min-h-[26px] place-items-center border-l border-[#d7dbe3] dark:border-[#616169] text-[#5c6270] dark:text-[#d7d8dc] hover:text-[#111318] dark:hover:text-white"
      >
        <Edit3 className="h-4 w-4" />
      </button>
    </div>
  );
}
