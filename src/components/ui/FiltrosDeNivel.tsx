export interface NivelFiltroOpcao {
  id: string;
  nome: string;
  contagem?: number;
}

export interface GrupoDeFiltrosProps {
  opcoes: NivelFiltroOpcao[];
  selecionado: string;
  ariaLabel: string;
  variante?: 'chips' | 'tabs';
  onSelect: (id: string) => void;
}

export function GrupoDeFiltros({
  opcoes,
  selecionado,
  ariaLabel,
  variante = 'chips',
  onSelect,
}: GrupoDeFiltrosProps) {
  return (
    <div
      className={variante === 'tabs' ? 'flex gap-1.5' : 'flex flex-wrap gap-1.5'}
      role="group"
      aria-label={ariaLabel}
    >
      {opcoes.map((opcao) => {
        const active = selecionado === opcao.id;
        return (
          <button
            key={opcao.id}
            type="button"
            aria-pressed={active}
            onClick={() => onSelect(opcao.id)}
            className={[
              'min-h-[38px] rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap',
              variante === 'tabs' ? 'flex-1 px-2 text-center' : '',
              active
                ? 'border-[#ff273a] bg-[#ff273a] text-[#140509] dark:text-white font-bold'
                : 'border-[#d7dbe3] dark:border-[#42454e] bg-white dark:bg-[#191b20] text-[#111318] dark:text-[#f6f7f9] hover:bg-[#eceef2] dark:hover:bg-[#30343e]',
            ].join(' ')}
          >
            {opcao.nome}
            {typeof opcao.contagem === 'number' ? ` ${opcao.contagem}` : ''}
          </button>
        );
      })}
    </div>
  );
}

export interface FiltrosDeNivelProps {
  niveis: NivelFiltroOpcao[];
  selecionado: string;
  onSelect: (nivelId: string) => void;
}

export function FiltrosDeNivel({ niveis, selecionado, onSelect }: FiltrosDeNivelProps) {
  return (
    <GrupoDeFiltros
      opcoes={niveis}
      selecionado={selecionado}
      ariaLabel="Filtrar por nível"
      variante="chips"
      onSelect={onSelect}
    />
  );
}
