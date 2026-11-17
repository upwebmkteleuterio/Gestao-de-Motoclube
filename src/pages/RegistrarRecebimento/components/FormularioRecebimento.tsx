import type { FormEvent } from 'react';
import {
  Banknote,
  Calendar,
  CheckCircle2,
  Coins,
  CreditCard,
  FileText,
  RotateCcw,
} from 'lucide-react';
import {
  BotaoPrincipal,
  Button,
  CampoDeFormulario,
  Card,
  SelectDeFormulario,
  TextareaDeFormulario,
  formatBrlFromCents,
} from '../../../components';
import type {
  FormaRecebimento,
  MensalidadePendenteOptionDTO,
  RegistrarRecebimentoContextoDTO,
} from '../../../types';
import type { RecebimentoDraft } from '../hooks/useRegistrarRecebimentoForm';
import { ResumoMensalidadeSelecionada } from './ResumoMensalidadeSelecionada';

export interface FormularioRecebimentoProps {
  contexto: RegistrarRecebimentoContextoDTO;
  selecionada: MensalidadePendenteOptionDTO;
  form: RecebimentoDraft;
  restoredFromDraft: boolean;
  simulacaoSaldo: {
    tipo: 'invalido' | 'excede' | 'quita' | 'parcial';
    texto: string;
  } | null;
  fieldErrors: Record<string, string>;
  formError: string | null;
  isPending: boolean;
  onSelectMensalidade: (mensalidadeId: string) => void;
  onFieldChange: <K extends keyof RecebimentoDraft>(key: K, value: RecebimentoDraft[K]) => void;
  onPreencherSaldoTotal: () => void;
  onResetDraft: () => void;
  onCancel: () => void;
  onSubmit: (e: FormEvent) => void;
}

const FORMA_OPTIONS: Array<{ value: FormaRecebimento; label: string }> = [
  { value: 'pix', label: 'Pix' },
  { value: 'dinheiro', label: 'Dinheiro' },
  { value: 'transferencia', label: 'Transferência bancária' },
  { value: 'cartao', label: 'Cartão' },
  { value: 'outro', label: 'Outro' },
];

export function FormularioRecebimento({
  contexto,
  selecionada,
  form,
  restoredFromDraft,
  simulacaoSaldo,
  fieldErrors,
  formError,
  isPending,
  onSelectMensalidade,
  onFieldChange,
  onPreencherSaldoTotal,
  onResetDraft,
  onCancel,
  onSubmit,
}: FormularioRecebimentoProps) {
  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      {restoredFromDraft && (
        <Card padding="sm" className="flex items-center justify-between gap-2">
          <span className="text-xs text-[#5c6270] dark:text-[#bfc2cb]">
            Preenchimento anterior restaurado.
          </span>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onResetDraft}
            icon={<RotateCcw className="h-3.5 w-3.5" />}
          >
            Restaurar padrão
          </Button>
        </Card>
      )}

      {contexto.mensalidadeInformadaQuitada && (
        <Card padding="sm" className="flex items-start gap-2.5 border-[#16a34a]/40">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#15803d] dark:text-[#86de9b]" />
          <p className="text-xs text-[#111318] dark:text-[#f6f7f9]">
            A mensalidade de{' '}
            <strong>{contexto.mensalidadeInformadaQuitada.membroNome}</strong> (
            {contexto.mensalidadeInformadaQuitada.competenciaRotulo}) já estava quitada.
            Selecione abaixo outra mensalidade em aberto.
          </p>
        </Card>
      )}

      <SelectDeFormulario
        id="recebimento-mensalidade"
        rotulo="Mensalidade em aberto"
        value={selecionada.id}
        disabled={isPending}
        erro={fieldErrors.mensalidadeId}
        leftIcon={<Coins className="h-4 w-4 text-[#ff344c]" />}
        options={contexto.opcoesPendentes.map((op) => ({
          value: op.id,
          label: `${op.membroNome} · ${op.competenciaRotulo} (${formatBrlFromCents(op.saldoCentavos)})`,
        }))}
        onChange={(e) => onSelectMensalidade(e.target.value)}
      />

      <ResumoMensalidadeSelecionada mensalidade={selecionada} />

      <div className="grid gap-1">
        <CampoDeFormulario
          id="recebimento-valor"
          rotulo="Valor recebido (R$)"
          inputMode="decimal"
          placeholder="Ex: 80,00"
          value={form.valorTexto}
          disabled={isPending}
          erro={fieldErrors.valor}
          leftIcon={<Banknote className="h-4 w-4 text-[#ff344c]" />}
          onChange={(e) => onFieldChange('valorTexto', e.target.value)}
          required
        />
        <div className="flex flex-wrap items-center justify-between gap-2 px-0.5">
          {simulacaoSaldo && !fieldErrors.valor ? (
            <small
              role="status"
              className={[
                'text-xs font-medium',
                simulacaoSaldo.tipo === 'quita'
                  ? 'text-[#15803d] dark:text-[#86de9b]'
                  : simulacaoSaldo.tipo === 'parcial'
                    ? 'text-[#b45309] dark:text-[#ffb35c]'
                    : 'text-[#dc2626] dark:text-[#ff8996]',
              ].join(' ')}
            >
              {simulacaoSaldo.texto}
            </small>
          ) : (
            <span />
          )}
          <button
            type="button"
            disabled={isPending}
            onClick={onPreencherSaldoTotal}
            className="text-xs font-semibold text-[#ff273a] hover:underline disabled:opacity-50"
          >
            Usar saldo total ({formatBrlFromCents(selecionada.saldoCentavos)})
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <CampoDeFormulario
          id="recebimento-data"
          rotulo="Data do recebimento"
          type="date"
          value={form.recebidoEm}
          max={contexto.hojeLocal}
          disabled={isPending}
          erro={fieldErrors.recebidoEm}
          leftIcon={<Calendar className="h-4 w-4 text-[#ff344c]" />}
          onChange={(e) => onFieldChange('recebidoEm', e.target.value)}
          required
        />

        <SelectDeFormulario
          id="recebimento-forma"
          rotulo="Forma de pagamento"
          value={form.forma}
          disabled={isPending}
          erro={fieldErrors.forma}
          leftIcon={<CreditCard className="h-4 w-4 text-[#ff344c]" />}
          options={FORMA_OPTIONS}
          onChange={(e) => onFieldChange('forma', e.target.value as FormaRecebimento)}
        />
      </div>

      <TextareaDeFormulario
        id="recebimento-observacao"
        rotulo="Observação"
        rotuloOpcional
        placeholder="Ex: Comprovante conferido no caixa ou referência da transferência."
        value={form.observacao}
        disabled={isPending}
        erro={fieldErrors.observacao}
        leftIcon={<FileText className="h-4 w-4 text-[#ff344c]" />}
        rows={2}
        onChange={(e) => onFieldChange('observacao', e.target.value)}
      />

      <Card padding="sm" className="flex items-center gap-2.5">
        <Coins className="h-4 w-4 shrink-0 text-[#5c6270] dark:text-[#bfc2cb]" />
        <p className="text-xs text-[#5c6270] dark:text-[#bfc2cb]">
          Registro manual feito por <strong>{contexto.clube.gestorNome}</strong>. Pagamentos
          parciais mantêm o saldo restante em aberto.
        </p>
      </Card>

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
          texto={isPending ? 'Registrando recebimento...' : 'Confirmar recebimento'}
          icon={<CheckCircle2 className="h-4 w-4" />}
          disabled={isPending}
        />
        <Button type="button" variant="ghost" fullWidth disabled={isPending} onClick={onCancel}>
          Cancelar
        </Button>
      </div>
    </form>
  );
}
