import { CheckCircle2, SquarePen } from 'lucide-react';
import {
  Badge,
  BotaoPrincipal,
  CabecalhoDeDetalhe,
  Card,
  IdentidadeDoMembro,
} from '../../../components';
import type { NivelEHistoricoDTO } from '../../../types';

export interface CabecalhoNivelMembroProps {
  data: NivelEHistoricoDTO;
  feedbackMsg: string;
  onOpenModal: () => void;
}

export function CabecalhoNivelMembro({
  data,
  feedbackMsg,
  onOpenModal,
}: CabecalhoNivelMembroProps) {
  return (
    <div className="grid gap-3.5">
      <CabecalhoDeDetalhe
        titulo="Nível e histórico"
        voltarPara={`/membros/${data.membroId}`}
      />

      {data.membroStatus !== 'ativo' && (
        <Card padding="sm" className="flex items-center justify-between gap-2">
          <span className="text-xs text-[#5c6270] dark:text-[#bfc2cb]">
            Cadastro com acesso restrito no clube
          </span>
          <Badge tone={data.membroStatus === 'inativo' ? 'warning' : 'danger'}>
            {data.membroStatus === 'inativo' ? 'Inativo' : 'Suspenso'}
          </Badge>
        </Card>
      )}

      <IdentidadeDoMembro
        nome={data.membroNome}
        apelido={data.membroApelido}
        nivel={data.nivelAtualNome}
        fotoUrl={data.membroFotoUrl}
        variante="nivel"
      />

      <BotaoPrincipal
        texto="Alterar nível"
        icon={<SquarePen className="h-4 w-4" />}
        disabled={data.niveisDisponiveis.length === 0}
        onClick={onOpenModal}
      />

      {feedbackMsg && (
        <output role="status" className="block">
          <Card
            padding="sm"
            className="flex items-center gap-2 border-[#15803d]/40 dark:border-[#86de9b]/40"
          >
            <CheckCircle2 className="h-4 w-4 shrink-0 text-[#15803d] dark:text-[#86de9b]" />
            <span className="text-xs font-semibold text-[#15803d] dark:text-[#86de9b]">
              {feedbackMsg}
            </span>
          </Card>
        </output>
      )}
    </div>
  );
}
