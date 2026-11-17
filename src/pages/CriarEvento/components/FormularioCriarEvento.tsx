import type { FormEvent } from 'react';
import { AlignLeft, CalendarPlus, FileText, MapPin, RotateCcw, Tag } from 'lucide-react';
import {
  BotaoPrincipal,
  Button,
  CampoDeFormulario,
  Card,
  DataEHorarioLadoALado,
  FotoHorizontalDoEvento,
  SelectDeFormulario,
  TextareaDeFormulario,
} from '../../../components';
import type { CriarEventoContextoDTO } from '../../../types';
import type { CriarEventoDraft } from '../hooks/useCriarEventoForm';
import { SeletorPublicoEvento } from './SeletorPublicoEvento';

export interface FormularioCriarEventoProps {
  contexto: CriarEventoContextoDTO;
  form: CriarEventoDraft;
  fieldErrors: Record<string, string>;
  formError: string | null;
  restoredFromDraft: boolean;
  expectedCount: number;
  isPending: boolean;
  onFieldChange: <K extends keyof CriarEventoDraft>(key: K, value: CriarEventoDraft[K]) => void;
  onChangeTodos: (todos: boolean) => void;
  onToggleNivel: (nivelId: string) => void;
  onResetDraft: () => void;
  onCancel: () => void;
  onSubmit: (e: FormEvent) => void;
}

export function FormularioCriarEvento({
  contexto,
  form,
  fieldErrors,
  formError,
  restoredFromDraft,
  expectedCount,
  isPending,
  onFieldChange,
  onChangeTodos,
  onToggleNivel,
  onResetDraft,
  onCancel,
  onSubmit,
}: FormularioCriarEventoProps) {
  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      {restoredFromDraft && (
        <Card padding="sm" className="flex items-center justify-between gap-2">
          <span className="text-xs text-[#5c6270] dark:text-[#bfc2cb]">
            Rascunho não publicado restaurado automaticamente.
          </span>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onResetDraft}
            icon={<RotateCcw className="h-3.5 w-3.5" />}
          >
            Limpar
          </Button>
        </Card>
      )}

      <FotoHorizontalDoEvento
        imagemAtual={form.fotoUrl}
        disabled={isPending}
        onSelectFile={(_, url) => onFieldChange('fotoUrl', url)}
      />

      <CampoDeFormulario
        id="evento-titulo"
        rotulo="Título do evento"
        placeholder="Ex: Rota do Pantanal"
        value={form.titulo}
        disabled={isPending}
        erro={fieldErrors.titulo}
        leftIcon={<FileText className="h-4 w-4 text-[#ff344c]" />}
        onChange={(e) => onFieldChange('titulo', e.target.value)}
        required
      />

      <SelectDeFormulario
        id="evento-tipo"
        rotulo="Categoria"
        value={form.tipo}
        disabled={isPending}
        erro={fieldErrors.tipo}
        leftIcon={<Tag className="h-4 w-4 text-[#ff344c]" />}
        options={contexto.tiposDisponiveis.map((tipo) => ({
          value: tipo,
          label: tipo,
        }))}
        onChange={(e) => onFieldChange('tipo', e.target.value)}
      />

      <DataEHorarioLadoALado
        data={form.data}
        horario={form.horario}
        erroData={fieldErrors.data}
        erroHorario={fieldErrors.horario}
        disabled={isPending}
        onDataChange={(val) => onFieldChange('data', val)}
        onHorarioChange={(val) => onFieldChange('horario', val)}
      />

      <CampoDeFormulario
        id="evento-local"
        rotulo="Local ou saída"
        placeholder="Ex: Saída: sede • Campo Grande, MS"
        value={form.local}
        disabled={isPending}
        erro={fieldErrors.local}
        leftIcon={<MapPin className="h-4 w-4 text-[#ff344c]" />}
        onChange={(e) => onFieldChange('local', e.target.value)}
        required
      />

      <TextareaDeFormulario
        id="evento-descricao"
        rotulo="Descrição"
        placeholder="Orientações, roteiro, paradas previstas e recomendações aos membros."
        value={form.descricao}
        disabled={isPending}
        erro={fieldErrors.descricao}
        leftIcon={<AlignLeft className="h-4 w-4 text-[#ff344c]" />}
        rows={3}
        onChange={(e) => onFieldChange('descricao', e.target.value)}
        required
      />

      <SeletorPublicoEvento
        todosNiveis={form.todosNiveis}
        nivelIds={form.nivelIds}
        niveis={contexto.niveis}
        expectedCount={expectedCount}
        erro={fieldErrors.publico}
        disabled={isPending}
        onChangeTodos={onChangeTodos}
        onToggleNivel={onToggleNivel}
      />

      {formError && (
        <div
          role="alert"
          className="rounded-[10px] border border-[#ff273a]/50 bg-[#ff273a]/10 px-3 py-2 text-xs font-medium text-[#dc2626] dark:text-[#ff8996]"
        >
          {formError}
        </div>
      )}

      <div className="grid gap-2 pt-1">
        <BotaoPrincipal
          type="submit"
          texto={isPending ? 'Publicando evento...' : 'Publicar evento'}
          icon={<CalendarPlus className="h-4 w-4" />}
          disabled={isPending}
        />
        <Button type="button" variant="ghost" fullWidth disabled={isPending} onClick={onCancel}>
          Cancelar
        </Button>
      </div>
    </form>
  );
}
