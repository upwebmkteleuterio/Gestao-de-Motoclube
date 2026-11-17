import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  BotaoPrincipal,
  Button,
  CampoDeFormulario,
  Card,
  SelectDeFormulario,
  SeletorDeFoto,
} from '../../../components';
import type { EditarMembroDetalheDTO } from '../../../types';
import { formatPhoneBr, type EditarMembroFormDraft } from '../hooks/useEditarMembroForm';

export interface FormularioEditarMembroProps {
  membro: EditarMembroDetalheDTO;
  form: EditarMembroFormDraft;
  todayIso: string;
  fieldErrors: Record<string, string>;
  formError: string | null;
  restoredFromDraft: boolean;
  isPending: boolean;
  onFieldChange: <K extends keyof EditarMembroFormDraft>(
    key: K,
    value: EditarMembroFormDraft[K],
  ) => void;
  onDiscardDraft: () => void;
  onCancel: () => void;
  onSubmit: (e: FormEvent) => void;
}

export function FormularioEditarMembro({
  membro,
  form,
  todayIso,
  fieldErrors,
  formError,
  restoredFromDraft,
  isPending,
  onFieldChange,
  onDiscardDraft,
  onCancel,
  onSubmit,
}: FormularioEditarMembroProps) {
  const statusOptions = [
    { value: 'ativo', label: 'Ativo' },
    { value: 'inativo', label: 'Inativo' },
    ...(membro.status === 'suspenso' || form.status === 'suspenso'
      ? [{ value: 'suspenso', label: 'Suspenso' }]
      : []),
  ];

  return (
    <form onSubmit={onSubmit} className="grid gap-3.5" noValidate>
      {restoredFromDraft && (
        <Card
          padding="sm"
          className="flex items-center justify-between gap-2 border-[#d7dbe3] dark:border-[#42454e]"
        >
          <span className="text-xs text-[#5c6270] dark:text-[#bfc2cb]">
            Alterações não salvas recuperadas automaticamente.
          </span>
          <Button type="button" variant="ghost" size="sm" onClick={onDiscardDraft}>
            Descartar
          </Button>
        </Card>
      )}

      <SeletorDeFoto
        rotulo="Foto"
        urlAtual={form.fotoUrl}
        nomeFallback={form.nome || membro.nome}
        textoBotao={form.fotoUrl ? 'Alterar foto' : 'Adicionar foto'}
        onSelectFile={(_, previewUrl) => onFieldChange('fotoUrl', previewUrl)}
      />

      <CampoDeFormulario
        id="edit-full-name"
        rotulo="Nome completo"
        type="text"
        value={form.nome}
        onChange={(e) => onFieldChange('nome', e.target.value)}
        erro={fieldErrors.nome}
        required
      />

      <CampoDeFormulario
        id="edit-nickname"
        rotulo="Apelido"
        rotuloOpcional
        type="text"
        value={form.apelido}
        onChange={(e) => onFieldChange('apelido', e.target.value)}
        erro={fieldErrors.apelido}
      />

      <CampoDeFormulario
        id="edit-email"
        rotulo="E-mail de acesso"
        type="email"
        value={form.email}
        onChange={(e) => onFieldChange('email', e.target.value)}
        textoDeAjuda="Alterar o e-mail atualiza com segurança a conta de acesso vinculada."
        erro={fieldErrors.email}
        required
      />

      <CampoDeFormulario
        id="edit-phone"
        rotulo="Telefone"
        type="tel"
        value={form.telefone}
        onChange={(e) => onFieldChange('telefone', formatPhoneBr(e.target.value))}
        erro={fieldErrors.telefone}
        required
      />

      <CampoDeFormulario
        id="edit-joined"
        rotulo="Data de entrada no clube"
        type="date"
        max={todayIso}
        value={form.entradaEm}
        onChange={(e) => onFieldChange('entradaEm', e.target.value)}
        erro={fieldErrors.entradaEm}
        required
      />

      <SelectDeFormulario
        id="edit-member-level"
        rotulo="Nível"
        value={membro.nivelId}
        disabled
        options={[{ value: membro.nivelId, label: membro.nivelNome }]}
        textoDeAjuda={
          <>
            Para alterar o nível, abra{' '}
            <Link
              to={`/membros/${membro.id}/nivel`}
              className="font-semibold underline hover:text-[#111318] dark:hover:text-[#f6f7f9]"
            >
              Nível e histórico
            </Link>
            .
          </>
        }
      />

      <SelectDeFormulario
        id="edit-member-state"
        rotulo="Situação"
        value={form.status}
        onChange={(e) => {
          const val = e.target.value;
          if (val === 'inativo' || val === 'suspenso') {
            onFieldChange('status', val);
          } else {
            onFieldChange('status', 'ativo');
          }
        }}
        options={statusOptions}
      />

      {formError && (
        <Card
          padding="sm"
          className="border-[#ff273a] bg-[#ff273a]/10 text-xs font-medium text-[#dc2626] dark:text-[#ff8996]"
          role="alert"
        >
          {formError}
        </Card>
      )}

      <div className="grid gap-2 pt-2">
        <BotaoPrincipal
          type="submit"
          texto={isPending ? 'Salvando alterações...' : 'Salvar alterações'}
          disabled={isPending}
        />
        <Button
          type="button"
          variant="secondary"
          fullWidth
          disabled={isPending}
          onClick={onCancel}
        >
          Cancelar
        </Button>
      </div>
    </form>
  );
}
