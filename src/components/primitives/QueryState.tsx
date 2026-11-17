import type { ReactNode } from 'react';
import { AlertTriangle, Inbox, RefreshCw } from 'lucide-react';
import { Button } from './Button';
import { Card } from './Card';

export function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={[
        'animate-pulse rounded-[10px] bg-[#e2e5ec] dark:bg-[#23262e]',
        className,
      ].join(' ')}
    />
  );
}

export function ClubHeaderSkeleton() {
  return (
    <div className="flex items-center gap-3 px-4 py-3" aria-hidden="true">
      <Skeleton className="h-11 w-11 rounded-[11px]" />
      <div className="flex-1 space-y-1.5 border-l border-[#e2e5ec] dark:border-[#2e3138] pl-3">
        <Skeleton className="h-4 w-36" />
        <Skeleton className="h-3 w-28" />
      </div>
      <Skeleton className="h-9 w-9 rounded-full" />
    </div>
  );
}

export function PainelSkeleton() {
  return (
    <div className="mx-auto max-w-[640px] space-y-4" aria-busy="true" aria-label="Carregando painel">
      <div className="space-y-4 px-3">
        <div className="space-y-2">
          <Skeleton className="h-8 w-44" />
          <Skeleton className="h-4 w-56" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <Skeleton className="h-[74px]" />
          <Skeleton className="h-[74px]" />
          <Skeleton className="h-[74px]" />
        </div>
        <div className="flex items-center justify-between pt-2">
          <Skeleton className="h-5 w-36" />
          <Skeleton className="h-4 w-20" />
        </div>
        <Skeleton className="h-[220px] rounded-[12px]" />
        <Skeleton className="h-5 w-44 pt-2" />
        <Skeleton className="h-[58px] rounded-[12px]" />
      </div>
    </div>
  );
}

export function ListaMembrosSkeleton() {
  return (
    <div className="mx-auto max-w-[640px] space-y-4" aria-busy="true" aria-label="Carregando membros">
      <div className="space-y-4 px-3">
        <div className="space-y-2">
          <Skeleton className="h-8 w-36" />
          <Skeleton className="h-4 w-60" />
        </div>
        <Skeleton className="h-[42px]" />
        <Skeleton className="h-[44px]" />
        <div className="flex flex-wrap gap-1.5">
          <Skeleton className="h-[38px] w-20 rounded-full" />
          <Skeleton className="h-[38px] w-24 rounded-full" />
          <Skeleton className="h-[38px] w-28 rounded-full" />
          <Skeleton className="h-[38px] w-24 rounded-full" />
        </div>
        <div className="flex items-center justify-between">
          <Skeleton className="h-5 w-36" />
          <Skeleton className="h-5 w-8" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-[78px] rounded-[12px]" />
          <Skeleton className="h-[78px] rounded-[12px]" />
          <Skeleton className="h-[78px] rounded-[12px]" />
          <Skeleton className="h-[78px] rounded-[12px]" />
        </div>
      </div>
    </div>
  );
}

export function PerfilMembroSkeleton() {
  return (
    <div className="mx-auto max-w-[640px] space-y-4" aria-busy="true" aria-label="Carregando perfil">
      <div className="space-y-4 px-3">
        <div className="flex items-center gap-2">
          <Skeleton className="h-10 w-10" />
          <Skeleton className="h-6 w-44" />
        </div>
        <div className="flex items-center gap-3">
          <Skeleton className="h-[54px] w-[58px]" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-5 w-44" />
            <Skeleton className="h-3.5 w-32" />
          </div>
        </div>
        <Skeleton className="h-[64px] rounded-[12px]" />
        <div className="space-y-2.5">
          <Skeleton className="h-[54px] rounded-[12px]" />
          <Skeleton className="h-[54px] rounded-[12px]" />
          <Skeleton className="h-[54px] rounded-[12px]" />
          <Skeleton className="h-[54px] rounded-[12px]" />
        </div>
      </div>
    </div>
  );
}

export function FormularioSkeleton() {
  return (
    <div className="mx-auto max-w-[640px] space-y-4" aria-busy="true" aria-label="Carregando formulário">
      <div className="space-y-4 px-3">
        <div className="flex items-center gap-2">
          <Skeleton className="h-10 w-10" />
          <Skeleton className="h-6 w-48" />
        </div>
        <Skeleton className="h-[72px]" />
        <Skeleton className="h-[64px]" />
        <Skeleton className="h-[64px]" />
        <Skeleton className="h-[64px]" />
        <Skeleton className="h-[64px]" />
        <Skeleton className="h-[44px]" />
      </div>
    </div>
  );
}

export function NivelHistoricoSkeleton() {
  return (
    <div
      className="mx-auto max-w-[640px] space-y-4"
      aria-busy="true"
      aria-label="Carregando nível e histórico"
    >
      <div className="space-y-4 px-3 pb-4">
        <div className="flex items-center gap-2">
          <Skeleton className="h-10 w-10" />
          <Skeleton className="h-6 w-48" />
        </div>
        <div className="flex items-center gap-3">
          <Skeleton className="h-[54px] w-[58px]" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-5 w-44" />
            <Skeleton className="h-3.5 w-24" />
          </div>
          <Skeleton className="h-10 w-24" />
        </div>
        <Skeleton className="h-[44px]" />
        <div className="space-y-2 border-t border-[#e2e5ec] dark:border-[#2e3138] pt-3">
          <Skeleton className="h-5 w-40" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-[38px] flex-1" />
            <Skeleton className="h-4 w-36" />
          </div>
        </div>
        <Skeleton className="h-[144px] rounded-[12px]" />
        <Skeleton className="h-[164px] rounded-[12px]" />
        <Skeleton className="h-[150px] rounded-[12px]" />
      </div>
    </div>
  );
}

export function FinanceiroSkeleton() {
  return (
    <div
      className="mx-auto max-w-[640px] space-y-4"
      aria-busy="true"
      aria-label="Carregando financeiro"
    >
      <div className="space-y-4 px-3 pb-4">
        <div className="space-y-2">
          <Skeleton className="h-8 w-36" />
          <Skeleton className="h-4 w-52" />
        </div>
        <Skeleton className="h-[44px] rounded-[11px]" />
        <Skeleton className="h-[142px] rounded-[12px]" />
        <div className="flex flex-wrap gap-1.5">
          <Skeleton className="h-[38px] flex-1 rounded-full" />
          <Skeleton className="h-[38px] flex-1 rounded-full" />
          <Skeleton className="h-[38px] flex-1 rounded-full" />
          <Skeleton className="h-[38px] flex-1 rounded-full" />
        </div>
        <div className="flex items-center justify-between">
          <Skeleton className="h-5 w-44" />
          <Skeleton className="h-5 w-8" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-[72px] rounded-[12px]" />
          <Skeleton className="h-[72px] rounded-[12px]" />
          <Skeleton className="h-[72px] rounded-[12px]" />
        </div>
        <Skeleton className="h-[44px] rounded-[10px]" />
      </div>
    </div>
  );
}

export function FrequenciaMembroSkeleton() {
  return (
    <div
      className="mx-auto max-w-[640px] space-y-4"
      aria-busy="true"
      aria-label="Carregando eventos e frequência"
    >
      <div className="space-y-4 px-3 pb-4">
        <div className="flex items-center gap-2">
          <Skeleton className="h-10 w-10" />
          <Skeleton className="h-6 w-48" />
        </div>
        <Skeleton className="h-[88px] rounded-[12px]" />
        <Skeleton className="h-[40px] rounded-[10px]" />
        <Skeleton className="h-[68px] rounded-[12px]" />
        <div className="flex gap-2">
          <Skeleton className="h-[38px] flex-1 rounded-full" />
          <Skeleton className="h-[38px] flex-1 rounded-full" />
          <Skeleton className="h-[38px] flex-1 rounded-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-[78px] rounded-[12px]" />
          <Skeleton className="h-[78px] rounded-[12px]" />
          <Skeleton className="h-[78px] rounded-[12px]" />
        </div>
      </div>
    </div>
  );
}

export function EventosSkeleton() {
  return (
    <div
      className="mx-auto max-w-[640px] space-y-4"
      aria-busy="true"
      aria-label="Carregando eventos"
    >
      <div className="space-y-4 px-3 pb-4">
        <div className="space-y-2">
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-4 w-56" />
        </div>
        <div className="flex gap-2">
          <Skeleton className="h-[38px] flex-1 rounded-full" />
          <Skeleton className="h-[38px] flex-1 rounded-full" />
        </div>
        <Skeleton className="h-[38px] rounded-[9px]" />
        <Skeleton className="h-[220px] rounded-[12px]" />
        <Skeleton className="h-[220px] rounded-[12px]" />
        <Skeleton className="h-[44px] rounded-[10px]" />
      </div>
    </div>
  );
}

export function RecebimentoSkeleton() {
  return (
    <div
      className="mx-auto max-w-[640px] space-y-4"
      aria-busy="true"
      aria-label="Carregando registro de recebimento"
    >
      <div className="space-y-4 px-3 pb-4">
        <div className="flex items-center gap-2">
          <Skeleton className="h-10 w-10" />
          <Skeleton className="h-6 w-52" />
        </div>
        <Skeleton className="h-[74px] rounded-[12px]" />
        <Skeleton className="h-[52px] rounded-[10px]" />
        <Skeleton className="h-[64px] rounded-[10px]" />
        <Skeleton className="h-[64px] rounded-[10px]" />
        <Skeleton className="h-[64px] rounded-[10px]" />
        <Skeleton className="h-[88px] rounded-[10px]" />
        <Skeleton className="h-[44px] rounded-[10px]" />
      </div>
    </div>
  );
}

export function DetalheEventoSkeleton() {
  return (
    <div
      className="mx-auto max-w-[640px] space-y-4"
      aria-busy="true"
      aria-label="Carregando detalhes do evento"
    >
      <div className="space-y-4 px-3 pb-4">
        <div className="flex items-center gap-2">
          <Skeleton className="h-10 w-10" />
          <Skeleton className="h-6 flex-1" />
          <Skeleton className="h-10 w-10" />
        </div>
        <Skeleton className="aspect-[2.45] w-full rounded-[13px]" />
        <div className="space-y-2 px-1">
          <Skeleton className="h-6 w-52" />
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-4 w-full" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Skeleton className="h-[74px] rounded-[10px]" />
          <Skeleton className="h-[74px] rounded-[10px]" />
          <Skeleton className="h-[74px] rounded-[10px]" />
          <Skeleton className="h-[74px] rounded-[10px]" />
        </div>
        <Skeleton className="h-[54px] rounded-[12px]" />
        <Skeleton className="h-[44px] rounded-[10px]" />
      </div>
    </div>
  );
}

export interface ErrorStateProps {
  titulo?: string;
  mensagem?: string;
  onRetry?: () => void;
  retryLabel?: string;
}

export function ErrorState({
  titulo = 'Não foi possível carregar os dados',
  mensagem = 'Ocorreu uma falha ou tempo limite ao consultar os registros. Tente novamente.',
  onRetry,
  retryLabel = 'Tentar novamente',
}: ErrorStateProps) {
  return (
    <Card padding="lg" className="text-center">
      <div role="alert" className="mx-auto flex max-w-sm flex-col items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-[#ff273a]/15 text-[#dc2626] dark:text-[#ff6371]">
          <AlertTriangle className="h-5 w-5" />
        </span>
        <div className="space-y-1">
          <h2 className="text-base font-bold text-[#111318] dark:text-[#f6f7f9]">{titulo}</h2>
          <p className="text-xs text-[#5c6270] dark:text-[#bfc2cb]">{mensagem}</p>
        </div>
        {onRetry && (
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={onRetry}
            icon={<RefreshCw className="h-3.5 w-3.5" />}
          >
            {retryLabel}
          </Button>
        )}
      </div>
    </Card>
  );
}

export interface EmptyStateProps {
  titulo?: string;
  descricao?: string;
  icone?: ReactNode;
  acao?: ReactNode;
}

export function EmptyState({
  titulo = 'Nenhum registro encontrado',
  descricao = 'Não há itens para exibir com os critérios atuais.',
  icone = <Inbox className="h-5 w-5" />,
  acao,
}: EmptyStateProps) {
  return (
    <Card padding="lg" className="text-center">
      <div className="mx-auto flex max-w-sm flex-col items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-[#eceef2] dark:bg-[#23262e] text-[#5c6270] dark:text-[#bfc2cb]">
          {icone}
        </span>
        <div className="space-y-1">
          <h2 className="text-base font-bold text-[#111318] dark:text-[#f6f7f9]">{titulo}</h2>
          <p className="text-xs text-[#5c6270] dark:text-[#bfc2cb]">{descricao}</p>
        </div>
        {acao && <div className="pt-1">{acao}</div>}
      </div>
    </Card>
  );
}
