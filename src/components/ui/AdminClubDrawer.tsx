import {
  Edit3,
  ExternalLink,
  FileText,
  KeyRound,
  Layers,
  Mail,
  MapPin,
  Pause,
  Phone,
  Play,
  User,
  Users,
  X,
} from 'lucide-react';
import type { MotoclubeAdminDetalhe } from '../../types';
import { AdminStatusBadge } from './AdminStatusBadge';
import { formatBrlFromCents } from './ResumoDaCompetencia';

export interface AdminClubDrawerProps {
  club: MotoclubeAdminDetalhe;
  open?: boolean;
  inlinePreview?: boolean;
  onClose?: () => void;
  onOpenInvoice?: (invoiceId: string) => void;
  onEditClub?: (club: MotoclubeAdminDetalhe) => void;
  onToggleAccess?: (club: MotoclubeAdminDetalhe) => void;
}

export function AdminClubDrawer({
  club,
  open = true,
  inlinePreview = false,
  onClose,
  onOpenInvoice,
  onEditClub,
  onToggleAccess,
}: AdminClubDrawerProps) {
  if (!open && !inlinePreview) return null;

  const isSuspended = club.statusAcesso === 'suspenso';
  const subTone =
    club.assinaturaStatus === 'ativa'
      ? 'positive'
      : club.assinaturaStatus === 'em_atraso'
        ? 'danger'
        : 'warning';
  const subLabel =
    club.assinaturaStatus === 'ativa'
      ? 'Ativa'
      : club.assinaturaStatus === 'em_atraso'
        ? 'Em atraso'
        : 'Aguardando pagamento';

  const content = (
    <div
      className={[
        'flex flex-col border-[#d7dbe3] dark:border-[#43444a] bg-white dark:bg-[#16171a] text-[#111318] dark:text-[#f7f7fa] tabular-nums',
        inlinePreview
          ? 'w-full max-w-[480px] rounded-[10px] border shadow-lg'
          : 'h-full w-full max-w-[480px] border-l shadow-2xl',
      ].join(' ')}
    >
      <div className="flex items-start justify-between gap-3 px-4 py-3.5">
        <h2 className="text-xl font-extrabold leading-tight">{club.nome}</h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="grid h-7 w-7 place-items-center rounded hover:bg-[#eceef2] dark:hover:bg-[#232428]"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="grid gap-3 px-4">
        <section className="grid grid-cols-3 gap-3 rounded-[8px] border border-[#d7dbe3] dark:border-[#45464a] bg-[#f8f9fb] dark:bg-[#151619] p-3">
          <div className="grid content-start justify-items-start gap-0.5 min-w-0">
            <span className="mb-1 grid h-8 w-8 place-items-center rounded-[7px] bg-[#eceef2] dark:bg-[#28292c]">
              <MapPin className="h-4 w-4" />
            </span>
            <span className="text-[11px] text-[#5c6270] dark:text-[#d5d6db]">Cadastro</span>
            <strong className="text-xs font-bold">{club.cidade} {club.uf}</strong>
          </div>

          <div className="grid content-start justify-items-start gap-0.5 border-l border-[#d7dbe3] dark:border-[#535458] pl-3 min-w-0">
            <span className="mb-1 grid h-8 w-8 place-items-center rounded-[7px] bg-[#eceef2] dark:bg-[#28292c]">
              <Users className="h-4 w-4" />
            </span>
            <strong className="text-sm font-bold">{club.afiliadosAtivos} afiliados</strong>
            <span className="text-[11px] text-[#5c6270] dark:text-[#d5d6db]">de {club.limiteContratado}</span>
          </div>

          <div className="grid content-start justify-items-start gap-0.5 border-l border-[#d7dbe3] dark:border-[#535458] pl-3 min-w-0">
            <span className="mb-1 grid h-8 w-8 place-items-center rounded-[7px] bg-[#eceef2] dark:bg-[#28292c]">
              <KeyRound className="h-4 w-4" />
            </span>
            <span className="text-[11px] text-[#5c6270] dark:text-[#d5d6db]">Acesso</span>
            <AdminStatusBadge
              label={isSuspended ? 'Suspenso' : 'Ativo'}
              tone={isSuspended ? 'danger' : 'positive'}
            />
          </div>
        </section>

        <section className="grid grid-cols-[auto_1fr] gap-4 rounded-[8px] border border-[#d7dbe3] dark:border-[#45464a] bg-[#f8f9fb] dark:bg-[#151619] p-3">
          <span className="grid h-9 w-9 place-items-center rounded-[7px] bg-[#eceef2] dark:bg-[#28292c]">
            <User className="h-4 w-4" />
          </span>
          <div className="grid gap-1 min-w-0">
            <span className="text-[11px] text-[#5c6270] dark:text-[#d5d6db]">Gestor</span>
            <strong className="text-sm font-bold">{club.gestorNome}</strong>
            <span className="flex items-center gap-1.5 text-xs text-[#5c6270] dark:text-[#d5d6db] truncate">
              <Mail className="h-3.5 w-3.5 shrink-0" />
              {club.gestorEmail}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-[#5c6270] dark:text-[#d5d6db]">
              <Phone className="h-3.5 w-3.5 shrink-0" />
              {club.gestorTelefone}
            </span>
          </div>
        </section>

        <section className="rounded-[8px] border border-[#d7dbe3] dark:border-[#45464a] bg-[#f8f9fb] dark:bg-[#151619] p-3">
          <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-[7px] bg-[#eceef2] dark:bg-[#28292c]">
              <Layers className="h-4 w-4" />
            </span>
            <div className="grid gap-0.5">
              <span className="text-[11px] text-[#5c6270] dark:text-[#d5d6db]">Assinatura</span>
              <strong className="text-sm font-bold">{club.planoNome}</strong>
              <span className="text-xs font-medium">{formatBrlFromCents(club.valorContratadoCentavos)}/mês</span>
            </div>
            <div className="grid justify-items-end gap-0.5 text-right">
              <AdminStatusBadge label={subLabel} tone={subTone} />
              <span className="mt-1 text-[11px] text-[#5c6270] dark:text-[#d5d6db]">Próxima cobrança</span>
              <strong className="text-xs font-bold">{club.proximaCobranca ?? '—'}</strong>
            </div>
          </div>

          {club.faturaAtual && (
            <div className="mt-3 grid grid-cols-[auto_minmax(0,1fr)_auto] gap-3 border-t border-[#d7dbe3] dark:border-[#626368] pt-3">
              <span className="grid h-9 w-9 place-items-center rounded-[7px] bg-[#eceef2] dark:bg-[#28292c]">
                <FileText className="h-4 w-4" />
              </span>
              <div className="grid gap-0.5">
                <span className="text-[11px] text-[#5c6270] dark:text-[#d5d6db]">Cobrança atual</span>
                <strong className="text-sm font-bold"># {club.faturaAtual.id}</strong>
                <span className="text-xs">{club.faturaAtual.competencia}</span>
              </div>
              <div className="grid justify-items-end gap-1 text-right">
                <strong className="text-sm font-bold">{formatBrlFromCents(club.faturaAtual.valorCentavos)}</strong>
                <AdminStatusBadge
                  label={club.faturaAtual.status === 'pago' ? 'Paga' : 'Em aberto'}
                  tone={club.faturaAtual.status === 'pago' ? 'positive' : 'danger'}
                />
              </div>
            </div>
          )}

          {club.faturaAtual && (
            <button
              type="button"
              onClick={() => onOpenInvoice?.(club.faturaAtual!.id)}
              className="mt-3 flex h-8 w-full items-center justify-center gap-2 rounded-[6px] border border-[#c5cad3] dark:border-[#666970] bg-white dark:bg-[#191a1d] text-xs font-semibold hover:bg-[#eceef2] dark:hover:bg-[#25262b]"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Abrir cobrança
            </button>
          )}
        </section>
      </div>

      <footer className="mt-auto grid grid-cols-2 gap-3 px-4 py-5">
        <button
          type="button"
          onClick={() => onEditClub?.(club)}
          className="flex h-9 items-center justify-center gap-2 rounded-[6px] border border-[#c5cad3] dark:border-[#666970] bg-white dark:bg-[#191a1d] text-xs font-semibold hover:bg-[#eceef2] dark:hover:bg-[#25262b]"
        >
          <Edit3 className="h-3.5 w-3.5" />
          Editar cadastro
        </button>
        <button
          type="button"
          onClick={() => onToggleAccess?.(club)}
          className="flex h-9 items-center justify-center gap-2 rounded-[6px] border border-[#e5131d] bg-gradient-to-r from-[#e5111d] to-[#cb0b16] text-xs font-semibold text-white hover:brightness-110"
        >
          {isSuspended ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
          <span>{isSuspended ? 'Reativar acesso' : 'Suspender acesso'}</span>
        </button>
      </footer>
    </div>
  );

  if (inlinePreview) return content;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/35 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-label={club.nome}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      {content}
    </div>
  );
}
