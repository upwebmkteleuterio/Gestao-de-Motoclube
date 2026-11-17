import type { FormEvent } from 'react';
import {
  BotaoPrincipal,
  Button,
  CampoDeFormulario,
  Card,
  SelectDeFormulario,
  SeletorDeFoto,
} from '../../../components';
import type { NivelResumo } from '../../../types';
import { formatDateBr, formatPhoneBr, type MemberFormDraft } from '../hooks/useCadastrarMembroForm';

export interface FormularioNovoMembroProps {
  form: MemberFormDraft;
  todayIso: string;
  niveis: NivelResumo[];
  fieldErrors: Record<string, string>;
  formError: string | null;
  restoredFromDraft: boolean;
  isPending: boolean;
  onFieldChange: <K extends keyof MemberFormDraft>(key: K, value: MemberFormDraft[K]) => void;
  onResetDraft: () => void;
  onCancel: () => void;
  onSubmit: (e: FormEvent) => void;
}

export function FormularioNovoMembro({
  form,
  todayIso,
  niveis,
  fieldErrors,
  formError,
  restoredFromDraft,
  isPending,
  onFieldChange,
  onResetDraft,
  onCancel,
  onSubmit,
}: FormularioNovoMembroProps) {
  const nivelHelpText = form.entradaEm
    ? `Registro inicial no histórico em ${formatDateBr(form.entradaEm)}.`
    : undefined;

  return (
    <form onSubmit={onSubmit} className="grid gap-3.5" noValidate>
      {restoredFromDraft && (
        <Card
          padding="sm"
          className="flex items-center justify-between gap-2 border-[#d7dbe3] dark:border-[#42454e]"
        >
          <span className="text-xs text-[#5c6270] dark:text-[#bfc2cb]">
            Rascunho recuperado automaticamente.
          </span>
          <Button type="button" variant="ghost" size="sm" onClick={onResetDraft}>
            Limpar
          </Button>
        </Card>
      )}

      <SeletorDeFoto
        rotulo="Foto"
        urlAtual={form.fotoUrl}
        nomeFallback={form.nome || 'MC'}
        onSelectFile={(_, previewUrl) => onFieldChange('fotoUrl', previewUrl)}
      />

      <CampoDeFormulario
        id="member-full-name"
        rotulo="Nome completo"
        type="text"
        placeholder="Ex.: Lucas Ferreira"
        value={form.nome}
        onChange={(e) => onFieldChange('nome', e.target.value)}
        erro={fieldErrors.nome}
        required
      />

      <CampoDeFormulario
        id="member-nickname"
        rotulo="Apelido"
        rotuloOpcional
        type="text"
        placeholder="Ex.: Trilheiro"
        value={form.apelido}
        onChange={(e) => onFieldChange('apelido', e.target.value)}
        erro={fieldErrors.apelido}
      />

      <CampoDeFormulario
        id="member-email"
        rotulo="E-mail de acesso"
        type="email"
        placeholder="lucas@example.com"
        value={form.email}
        onChange={(e) => onFieldChange('email', e.target.value)}
        textoDeAjuda="Cria ou associa o acesso do membro por este e-mail."
        erro={fieldErrors.email}
        required
      />

      <CampoDeFormulario
        id="member-phone"
        rotulo="Telefone"
        type="tel"
        placeholder="(67) 99999-2040"
        value={form.telefone}
        onChange={(e) => onFieldChange('telefone', formatPhoneBr(e.target.value))}
        erro={fieldErrors.telefone}
        required
      />

      <CampoDeFormulario
        id="member-joined"
        rotulo="Data de entrada no clube"
        type="date"
        max={todayIso}
        value={form.entradaEm}
        onChange={(e) => onFieldChange('entradaEm', e.target.value)}
        textoDeAjuda="Informe a data real de entrada no clube."
        erro={fieldErrors.entradaEm}
        required
      />

      <SelectDeFormulario
        id="member-level"
        rotulo="Nível"
        value={form.nivelId}
        onChange={(e) => onFieldChange('nivelId', e.target.value)}
        textoDeAjuda={nivelHelpText}
        erro={fieldErrors.nivelId}
        options={niveis.map((n) => ({ value: n.id, label: n.nome }))}
        disabled={niveis.length === 0}
      />

      <SelectDeFormulario
        id="member-state"
        rotulo="Situação"
        value={form.status}
        onChange={(e) =>
          onFieldChange('status', e.target.value === 'inativo' ? 'inativo' : 'ativo')
        }
        options={[
          { value: 'ativo', label: 'Ativo' },
          { value: 'inativo', label: 'Inativo' },
        ]}
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
          texto={isPending ? 'Salvando membro...' : 'Salvar membro'}
          disabled={isPending || niveis.length === 0}
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
