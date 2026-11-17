import { Lock } from 'lucide-react';

export interface AvisoDeVisibilidadeDisciplinarProps {
  mensagem?: string;
}

export function AvisoDeVisibilidadeDisciplinar({
  mensagem = 'Somente informações disponibilizadas para você são exibidas.',
}: AvisoDeVisibilidadeDisciplinarProps) {
  return (
    <aside className="flex items-center gap-3 rounded-[10px] border border-[#d7dbe3] dark:border-[#54565d] bg-white dark:bg-[#17191d] px-4 py-2.5 text-[13px] text-[#5c6270] dark:text-[#d2d4da]">
      <Lock className="h-5 w-5 shrink-0" />
      <p>{mensagem}</p>
    </aside>
  );
}
