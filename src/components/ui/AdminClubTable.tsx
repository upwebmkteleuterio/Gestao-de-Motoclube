import { ChevronRight } from 'lucide-react';
import type { AssinaturaStatus, MotoclubeAdminResumo } from '../../types';
import { AdminStatusBadge, type AdminStatusTone } from './AdminStatusBadge';
import { formatBrlFromCents } from './ResumoDaCompetencia';

export interface AdminClubTableProps {
  clubs: MotoclubeAdminResumo[];
  onOpenClub?: (club: MotoclubeAdminResumo) => void;
}

const SUB_STATUS: Record<AssinaturaStatus, { label: string; tone: AdminStatusTone }> = {
  ativa: { label: 'Ativa', tone: 'positive' },
  em_atraso: { label: 'Em atraso', tone: 'danger' },
  pendente: { label: 'Aguardando pagamento', tone: 'warning' },
  cancelada: { label: 'Cancelada', tone: 'neutral' },
};

export function AdminClubTable({ clubs, onOpenClub }: AdminClubTableProps) {
  return (
    <div className="overflow-hidden rounded-[7px] border border-[#d7dbe3] dark:border-[#3e3f43] bg-white dark:bg-[#141518]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse text-left tabular-nums">
          <thead>
            <tr className="bg-[#eceef2] dark:bg-[#202124] text-xs font-semibold text-[#111318] dark:text-[#f7f7f8]">
              <th scope="col" className="px-3 py-2 w-[35%]">Motoclube</th>
              <th scope="col" className="px-3 py-2 w-[20%]">Plano</th>
              <th scope="col" className="px-3 py-2 w-[18%]">Afiliados</th>
              <th scope="col" className="px-3 py-2">Assinatura</th>
              <th scope="col" className="w-9 px-2 py-2">
                <span className="sr-only">Ações</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {clubs.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-3 py-6 text-center text-sm text-[#5c6270] dark:text-[#dddddd]">
                  Nenhum motoclube encontrado.
                </td>
              </tr>
            ) : (
              clubs.map((club) => {
                const badge = SUB_STATUS[club.assinaturaStatus];
                return (
                  <tr
                    key={club.id}
                    onClick={() => onOpenClub?.(club)}
                    className="cursor-pointer border-t border-[#e2e5ec] dark:border-[#3d3e42] text-xs transition-colors hover:bg-[#f5f6f8] dark:hover:bg-[#1b1d22]"
                  >
                    <td className="px-3 py-2 align-middle">
                      <strong className="block text-[13px] font-bold leading-tight">{club.nome}</strong>
                      <small className="mt-0.5 block text-[11px] text-[#5c6270] dark:text-[#dddde0]">
                        {club.gestorNome} • {club.gestorEmail}
                      </small>
                    </td>
                    <td className="px-3 py-2 align-middle">
                      <strong className="block text-[13px] font-bold leading-tight">{club.planoNome}</strong>
                      <small className="mt-0.5 block text-[11px] text-[#5c6270] dark:text-[#dddde0]">
                        {formatBrlFromCents(club.valorContratadoCentavos)}/mês
                      </small>
                    </td>
                    <td className="px-3 py-2 align-middle">
                      <strong className="block text-[13px] font-bold leading-tight">{club.afiliadosAtivos}</strong>
                      <small className="mt-0.5 block text-[11px] text-[#5c6270] dark:text-[#dddde0]">
                        de {club.limiteContratado} no plano
                      </small>
                    </td>
                    <td className="px-3 py-2 align-middle">
                      <AdminStatusBadge label={badge.label} tone={badge.tone} />
                      <small className="mt-1 block text-[11px] text-[#5c6270] dark:text-[#dddde0]">
                        {club.assinaturaStatus === 'em_atraso'
                          ? `Venceu: ${club.proximaCobranca ?? '—'}`
                          : `Próxima: ${club.proximaCobranca ?? '—'}`}
                      </small>
                    </td>
                    <td className="p-0 align-middle">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenClub?.(club);
                        }}
                        aria-label={`Abrir ${club.nome}`}
                        className="grid h-10 w-full place-items-center text-[#5c6270] dark:text-[#bfc2cb] hover:text-[#111318] dark:hover:text-white"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
