import { useState, type FormEvent } from 'react';
import { X } from 'lucide-react';

export interface AdminPlanVersionValues {
  nome: string;
  precoMensalCentavos: number;
  limiteAfiliados: number;
  disponivel: boolean;
}

export interface AdminPlanVersionFormProps {
  isCreate?: boolean;
  initialValues?: Partial<AdminPlanVersionValues>;
  open?: boolean;
  inlinePreview?: boolean;
  onCancel?: () => void;
  onSubmit?: (values: AdminPlanVersionValues) => void;
}

export function AdminPlanVersionForm({
  isCreate = false,
  initialValues,
  open = true,
  inlinePreview = false,
  onCancel,
  onSubmit,
}: AdminPlanVersionFormProps) {
  const [nome, setNome] = useState(initialValues?.nome ?? 'Estrada');
  const [precoTexto, setPrecoTexto] = useState(
    initialValues?.precoMensalCentavos !== undefined
      ? (initialValues.precoMensalCentavos / 100).toFixed(2).replace('.', ',')
      : '149,00',
  );
  const [limite, setLimite] = useState(String(initialValues?.limiteAfiliados ?? 100));
  const [disponivel, setDisponivel] = useState(initialValues?.disponivel ?? true);
  const [feedback, setFeedback] = useState('');

  if (!open && !inlinePreview) return null;

  const parsePriceToCents = (raw: string): number | null => {
    const normalized = raw.replace(/\./g, '').replace(',', '.').trim();
    const num = Number(normalized);
    if (!Number.isFinite(num) || num <= 0) return null;
    return Math.round(num * 100);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cents = parsePriceToCents(precoTexto);
    const limitNum = Number.parseInt(limite, 10);
    if (!nome.trim() || cents === null || !Number.isFinite(limitNum) || limitNum < 1) {
      setFeedback('Informe nome, mensalidade válida e limite positivo de afiliados.');
      return;
    }
    setFeedback('');
    onSubmit?.({
      nome: nome.trim(),
      precoMensalCentavos: cents,
      limiteAfiliados: limitNum,
      disponivel,
    });
  };

  const card = (
    <div className="w-full max-w-[340px] rounded-[10px] border border-[#d7dbe3] dark:border-[#4a4b4e] bg-white dark:bg-[#191a1d] text-[#111318] dark:text-[#f7f7f8] p-4 shadow-xl">
      <form onSubmit={handleSubmit} className="grid gap-1.5 text-xs">
        <header className="mb-1.5 flex items-center justify-between gap-2">
          <h2 className="text-lg font-extrabold">
            {isCreate ? 'Novo plano' : 'Editar plano'}
          </h2>
          <button
            type="button"
            onClick={onCancel}
            aria-label="Fechar edição"
            className="grid h-7 w-7 place-items-center rounded hover:bg-[#eceef2] dark:hover:bg-[#36363b]"
          >
            <X className="h-4 w-4" />
          </button>
        </header>

        <label className="font-medium">Nome do plano</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          maxLength={80}
          className="mb-1 h-8 rounded-[6px] border border-[#c5cad3] dark:border-[#6a6b70] bg-[#f8f9fb] dark:bg-[#1a1b1e] px-2.5 focus:outline-none focus:border-[#a8abb6]"
        />

        <label className="font-medium">Mensalidade (R$)</label>
        <input
          type="text"
          inputMode="decimal"
          value={precoTexto}
          onChange={(e) => setPrecoTexto(e.target.value)}
          required
          className="mb-1 h-8 rounded-[6px] border border-[#c5cad3] dark:border-[#6a6b70] bg-[#f8f9fb] dark:bg-[#1a1b1e] px-2.5 focus:outline-none focus:border-[#a8abb6]"
        />

        <label className="font-medium">Limite de afiliados</label>
        <input
          type="number"
          min={1}
          step={1}
          value={limite}
          onChange={(e) => setLimite(e.target.value)}
          required
          className="mb-1 h-8 rounded-[6px] border border-[#c5cad3] dark:border-[#6a6b70] bg-[#f8f9fb] dark:bg-[#1a1b1e] px-2.5 focus:outline-none focus:border-[#a8abb6]"
        />

        <label className="my-1.5 flex cursor-pointer items-center gap-2.5 select-none">
          <input
            type="checkbox"
            role="switch"
            checked={disponivel}
            onChange={(e) => setDisponivel(e.target.checked)}
            className="sr-only peer"
          />
          <span className="flex h-5 w-9 items-center rounded-full bg-[#b8bec9] dark:bg-[#5b5d62] p-0.5 transition-colors peer-checked:bg-[#1bba3c]">
            <span
              className={[
                'h-4 w-4 rounded-full bg-white transition-transform',
                disponivel ? 'translate-x-4' : 'translate-x-0',
              ].join(' ')}
            />
          </span>
          <span>Disponível para novas assinaturas</span>
        </label>

        <p className="text-[11px] leading-snug text-[#5c6270] dark:text-[#c1c2c6]">
          Novos valores e limites valem para novas contratações. Contratos existentes mantêm as condições contratadas.
        </p>

        {feedback && (
          <output role="status" className="mt-1 text-[11px] text-[#b35c00] dark:text-[#ffb660]">
            {feedback}
          </output>
        )}

        <footer className="mt-3 grid grid-cols-[1fr_1.07fr] gap-2.5 font-semibold">
          <button
            type="button"
            onClick={onCancel}
            className="flex h-8 items-center justify-center rounded-[6px] border border-[#c5cad3] dark:border-[#6e7075] bg-white dark:bg-[#232427] hover:bg-[#eceef2] dark:hover:bg-[#303237]"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="flex h-8 items-center justify-center rounded-[6px] bg-gradient-to-r from-[#ed0817] to-[#d70f1d] text-white hover:brightness-110"
          >
            Salvar alterações
          </button>
        </footer>
      </form>
    </div>
  );

  if (inlinePreview) return card;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
    >
      {card}
    </div>
  );
}
