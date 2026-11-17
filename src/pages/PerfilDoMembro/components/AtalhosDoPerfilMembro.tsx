import { Award, Calendar, ShieldAlert, Wallet } from 'lucide-react';
import { AtalhoDoPerfil } from '../../../components';
import type { PerfilMembroDTO } from '../../../types';

export interface AtalhosDoPerfilMembroProps {
  membro: PerfilMembroDTO;
}

export function AtalhosDoPerfilMembro({ membro }: AtalhosDoPerfilMembroProps) {
  return (
    <div className="grid gap-2.5">
      <AtalhoDoPerfil
        titulo="Nível e histórico"
        descricao={`Nível atual: ${membro.nivelNome}`}
        destino={`/membros/${membro.id}/nivel`}
        icone={<Award className="h-4 w-4 text-[#ff344d]" />}
      />

      <AtalhoDoPerfil
        titulo="Eventos e frequência"
        descricao={
          membro.eventosElegiveis > 0
            ? `${membro.presencasTotal} presenças em ${membro.eventosElegiveis} eventos elegíveis`
            : 'Sem eventos elegíveis registrados'
        }
        destino={`/membros/${membro.id}/frequencia`}
        icone={<Calendar className="h-4 w-4 text-[#ff344d]" />}
      />

      <AtalhoDoPerfil
        titulo="Disciplina"
        descricao={
          membro.ocorrenciasEmAnalise > 0
            ? `${membro.ocorrenciasEmAnalise} em análise • ${membro.ocorrenciasTotal} no total`
            : membro.ocorrenciasTotal > 0
              ? `${membro.ocorrenciasTotal} ${
                  membro.ocorrenciasTotal === 1
                    ? 'ocorrência registrada'
                    : 'ocorrências registradas'
                }`
              : 'Nenhuma ocorrência registrada'
        }
        destino={`/disciplina?membro=${membro.id}`}
        icone={<ShieldAlert className="h-4 w-4 text-[#ff344d]" />}
      />

      <AtalhoDoPerfil
        titulo="Situação financeira"
        descricao={
          membro.mensalidadesEmAtraso > 0
            ? `${membro.mensalidadesEmAtraso} ${
                membro.mensalidadesEmAtraso === 1
                  ? 'mensalidade em atraso'
                  : 'mensalidades em atraso'
              }`
            : 'Mensalidades em dia'
        }
        destino={`/financeiro?membro=${membro.id}`}
        icone={<Wallet className="h-4 w-4 text-[#ff344d]" />}
      />
    </div>
  );
}
