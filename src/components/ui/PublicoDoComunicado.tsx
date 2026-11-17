export interface PublicoDoComunicadoProps {
  rotulo: string;
  nivelId?: string | null;
}

export function PublicoDoComunicado({ rotulo, nivelId }: PublicoDoComunicadoProps) {
  return (
    <span
      data-nivel-id={nivelId ?? ''}
      className="inline-block rounded-full border border-[#d7dbe3] dark:border-[#606267] bg-[#eceef2] dark:bg-[#303135] px-2.5 py-0.5 text-[11px] font-medium text-[#111318] dark:text-[#f7f7fa] whitespace-nowrap"
    >
      {rotulo}
    </span>
  );
}
