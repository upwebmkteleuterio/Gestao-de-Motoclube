import { Edit2 } from 'lucide-react';
import type { PlanoAdminResumo } from '../../types';
import { AdminStatusBadge } from './AdminStatusBadge';
import { formatBrlFromCents } from './ResumoDaCompetencia';

export interface AdminPlansTableProps {
  plans: PlanoAdminResumo[];
  onEditPlan?: (plan: PlanoAdminResumo) => void;
}

export function AdminPlansTable({ plans, onEditPlan }: AdminPlansTableProps) {
  return (
    <div className="overflow-hidden rounded-[6px] border border-[#d7dbe3] dark:border-[#424348] bg-white dark:bg-[#141518] tabular-nums">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[550px] border-collapse text-left">
          <thead>
            <tr className="h-8 bg-[#eceef2] dark:bg-[#202124] text-xs font-semibold">
              <th scope="col" className="px-3">Plano</th>
              <th scope="col" className="px-3">Mensalidade</th>
              <th scope="col" className="px-3">Limite de afiliados</th>
              <th scope="col" className="px-3">Assinaturas vinculadas</th>
              <th scope="col" className="px-3">Disponível para contratação</th>
              <th scope="col" className="px-3 text-right">
                <span className="sr-only">Ações</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan) => (
              <tr key={plan.id} className="h-10 border-t border-[#e2e5ec] dark:border-[#424348] text-xs">
                <th scope="row" className="px-3 font-bold">
                  {plan.nome}
                </th>
                <td className="px-3">{formatBrlFromCents(plan.precoMensalCentavos)}</td>
                <td className="px-3">{plan.limiteAfiliados}</td>
                <td className="px-3">{plan.assinaturasVinculadas}</td>
                <td className="px-3">
                  <AdminStatusBadge
                    label={plan.disponivel ? 'Sim' : 'Não'}
                    tone={plan.disponivel ? 'positive' : 'neutral'}
                  />
                </td>
                <td className="px-3 text-right">
                  <button
                    type="button"
                    onClick={() => onEditPlan?.(plan)}
                    aria-label={`Editar plano ${plan.nome}`}
                    className="inline-flex h-7 w-7 items-center justify-center rounded text-[#5c6270] dark:text-[#e2e2e6] hover:bg-[#eceef2] dark:hover:bg-[#36363b]"
                  >
                    <Edit2 className="h-3.5 w-3.5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="border-t border-[#e2e5ec] dark:border-[#424348] bg-[#eceef2] dark:bg-[#202124] px-3 py-2 text-xs text-[#5c6270] dark:text-[#c1c2c6]">
        Alterações de preço não modificam contratos existentes.
      </div>
    </div>
  );
}
