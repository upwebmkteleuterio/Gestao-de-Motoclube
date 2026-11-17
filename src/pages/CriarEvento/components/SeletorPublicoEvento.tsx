import { Users } from 'lucide-react';
import type { NivelOpcaoDTO } from '../../../types';

export interface SeletorPublicoEventoProps {
  todosNiveis: boolean;
  nivelIds: string[];
  niveis: Array<NivelOpcaoDTO & { totalMembrosAtivos: number }>;
  expectedCount: number;
  erro?: string;
  disabled?: boolean;
  onChangeTodos: (todos: boolean) => void;
  onToggleNivel: (nivelId: string) => void;
}

export function SeletorPublicoEvento({
  todosNiveis,
  nivelIds,
  niveis,
  expectedCount,
  erro,
  disabled = false,
  onChangeTodos,
  onToggleNivel,
}: SeletorPublicoEventoProps) {
  return (
    <fieldset className="grid gap-2">
      <legend className="text-[13px] font-bold text-[#111318] dark:text-[#f6f7f9]">
        Público convocado
      </legend>

      <div
        className={[
          'grid gap-2 rounded-[10px] border bg-white dark:bg-[#191b20] p-3',
          erro
            ? 'border-[#ff273a] dark:border-[#ff6371]'
            : 'border-[#d7dbe3] dark:border-[#42454e]',
        ].join(' ')}
      >
        <label className="flex cursor-pointer items-center gap-2.5 text-sm font-medium text-[#111318] dark:text-[#f6f7f9]">
          <input
            type="radio"
            name="publico-evento"
            checked={todosNiveis}
            disabled={disabled}
            onChange={() => onChangeTodos(true)}
            className="h-4 w-4 accent-[#ec1734]"
          />
          <span>Todos os membros ativos</span>
        </label>

        <label className="flex cursor-pointer items-center gap-2.5 text-sm font-medium text-[#111318] dark:text-[#f6f7f9]">
          <input
            type="radio"
            name="publico-evento"
            checked={!todosNiveis}
            disabled={disabled}
            onChange={() => onChangeTodos(false)}
            className="h-4 w-4 accent-[#ec1734]"
          />
          <span>Selecionar níveis específicos</span>
        </label>

        {!todosNiveis && (
          <div className="mt-1 grid gap-1.5 border-t border-[#e2e5ec] dark:border-[#2e3138] pt-2.5 pl-1">
            {niveis.length === 0 ? (
              <p className="text-xs text-[#5c6270] dark:text-[#bfc2cb]">
                Nenhum nível cadastrado para filtrar.
              </p>
            ) : (
              niveis.map((nivel) => {
                const checked = nivelIds.includes(nivel.id);
                return (
                  <label
                    key={nivel.id}
                    className="flex cursor-pointer items-center justify-between gap-2 rounded-[8px] px-2 py-1 text-sm hover:bg-[#f5f6f8] dark:hover:bg-[#23262e]"
                  >
                    <span className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={checked}
                        disabled={disabled}
                        onChange={() => onToggleNivel(nivel.id)}
                        className="h-4 w-4 rounded accent-[#ec1734]"
                      />
                      <span className="font-medium">{nivel.nome}</span>
                    </span>
                    <span className="text-xs text-[#5c6270] dark:text-[#bfc2cb] tabular-nums">
                      {nivel.totalMembrosAtivos}{' '}
                      {nivel.totalMembrosAtivos === 1 ? 'ativo' : 'ativos'}
                    </span>
                  </label>
                );
              })
            )}
          </div>
        )}
      </div>

      {erro && <small className="text-xs text-[#dc2626] dark:text-[#ff8996]">{erro}</small>}

      <p className="flex items-center gap-1.5 px-0.5 text-xs text-[#5c6270] dark:text-[#bfc2cb]">
        <Users className="h-3.5 w-3.5 text-[#ff344c]" />
        <span>
          Ao publicar,{' '}
          <strong className="text-[#111318] dark:text-[#f6f7f9]">
            {expectedCount} {expectedCount === 1 ? 'membro ativo será convocado' : 'membros ativos serão convocados'}
          </strong>{' '}
          com confirmação pendente.
        </span>
      </p>
    </fieldset>
  );
}
