import { Lock } from 'lucide-react';

export interface AvisoDeAcessoRestritoProps {
  titulo?: string;
  mensagem?: string;
}

export function AvisoDeAcessoRestrito({
  titulo = 'Acesso restrito',
  mensagem = 'O membro vê apenas os próprios registros disponibilizados pela gestão.',
}: AvisoDeAcessoRestritoProps) {
  return (
    <aside className="flex items-center gap-3 rounded-[10px] border border-[#d7dbe3] dark:border-[#3c3f46] bg-white dark:bg-[#191b20] px-4 py-3">
      <span className="grid shrink-0 place-items-center rounded-[9px] bg-[#eceef2] dark:bg-[#32353a] p-2 text-[#111318] dark:text-[#f6f7f9]">
        <Lock className="h-4 w-4" />
      </span>
      <div className="border-l border-[#d7dbe3] dark:border-[#686b71] pl-3">
        <strong className="block text-sm font-bold">{titulo}</strong>
        <p className="mt-0.5 text-[13px] text-[#5c6270] dark:text-[#bfc1c7]">{mensagem}</p>
      </div>
    </aside>
  );
}
