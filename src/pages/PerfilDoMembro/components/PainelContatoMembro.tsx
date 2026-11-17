import { Calendar, Mail, Phone } from 'lucide-react';
import {
  Badge,
  Button,
  Card,
  IdentidadeDoMembro,
  SlidePanel,
} from '../../../components';
import type { PerfilMembroDTO } from '../../../types';

export interface PainelContatoMembroProps {
  open: boolean;
  membro: PerfilMembroDTO;
  onClose: () => void;
  onEdit: () => void;
  onLevelHistory: () => void;
}

function formatDateBr(isoDate: string): string {
  const [y, m, d] = isoDate.split('-');
  if (!y || !m || !d) return isoDate;
  return `${d}/${m}/${y}`;
}

export function PainelContatoMembro({
  open,
  membro,
  onClose,
  onEdit,
  onLevelHistory,
}: PainelContatoMembroProps) {
  return (
    <SlidePanel
      open={open}
      onClose={onClose}
      title="Contato e vínculo"
      footer={
        <div className="flex items-center justify-end gap-2">
          <Button type="button" variant="secondary" size="sm" onClick={onLevelHistory}>
            Alterar nível
          </Button>
          <Button type="button" variant="primary" size="sm" onClick={onEdit}>
            Editar membro
          </Button>
        </div>
      }
    >
      <div className="grid gap-4">
        <IdentidadeDoMembro
          nome={membro.nome}
          apelido={membro.apelido}
          nivel={membro.nivelNome}
          fotoUrl={membro.fotoUrl}
          entradaTexto={membro.ingressoTexto}
          variante="perfil"
        />

        <Card padding="md" className="grid gap-3">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs text-[#5c6270] dark:text-[#bfc2cb]">Situação no clube</span>
            <Badge
              tone={
                membro.status === 'ativo'
                  ? 'positive'
                  : membro.status === 'inativo'
                    ? 'warning'
                    : 'danger'
              }
            >
              {membro.status === 'ativo'
                ? 'Ativo'
                : membro.status === 'inativo'
                  ? 'Inativo'
                  : 'Suspenso'}
            </Badge>
          </div>
          <div className="flex items-center justify-between gap-2 border-t border-[#e2e5ec] dark:border-[#2e3138] pt-3">
            <span className="text-xs text-[#5c6270] dark:text-[#bfc2cb]">Vínculo de acesso</span>
            <Badge tone={membro.vinculoStatus === 'ativo' ? 'positive' : 'neutral'}>
              {membro.vinculoStatus === 'ativo' ? 'Ativo' : membro.vinculoStatus}
            </Badge>
          </div>
          <div className="flex items-center gap-2.5 border-t border-[#e2e5ec] dark:border-[#2e3138] pt-3 text-sm">
            <Calendar className="h-4 w-4 shrink-0 text-[#5c6270] dark:text-[#bfc2cb]" />
            <span>Entrada em {formatDateBr(membro.entradaEm)}</span>
          </div>
          <div className="flex items-center gap-2.5 border-t border-[#e2e5ec] dark:border-[#2e3138] pt-3 text-sm">
            <Mail className="h-4 w-4 shrink-0 text-[#5c6270] dark:text-[#bfc2cb]" />
            <span className="truncate">{membro.email}</span>
          </div>
          <div className="flex items-center gap-2.5 border-t border-[#e2e5ec] dark:border-[#2e3138] pt-3 text-sm">
            <Phone className="h-4 w-4 shrink-0 text-[#5c6270] dark:text-[#bfc2cb]" />
            <span>{membro.telefone}</span>
          </div>
        </Card>
      </div>
    </SlidePanel>
  );
}
