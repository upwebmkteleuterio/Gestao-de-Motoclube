import { useState, type FormEvent } from 'react';
import { Info, X } from 'lucide-react';
import { formatBrlFromCents } from './ResumoDaCompetencia';

export interface AdminClubFormValues {
  nome: string;
  gestorNome: string;
  email: string;
  telefone: string;
  cidade: string;
  uf: string;
  planoId?: string;
}

export interface AdminClubFormProps {
  isCreate?: boolean;
  initialValues?: Partial<AdminClubFormValues>;
  planOptions?: { id: string; nome: string; precoMensalCentavos: number }[];
  open?: boolean;
  inlinePreview?: boolean;
  onCancel?: () => void;
  onSubmit?: (values: AdminClubFormValues) => void;
}

const UFS = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG',
  'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',
];

const DEFAULT_PLANS = [
  { id: 'essencial', nome: 'Essencial', precoMensalCentavos: 9900 },
  { id: 'estrada', nome: 'Estrada', precoMensalCentavos: 14900 },
  { id: 'irmandade', nome: 'Irmandade', precoMensalCentavos: 24900 },
];

export function AdminClubForm({
  isCreate = true,
  initialValues,
  planOptions = DEFAULT_PLANS,
  open = true,
  inlinePreview = false,
  onCancel,
  onSubmit,
}: AdminClubFormProps) {
  const [nome, setNome] = useState(initialValues?.nome ?? 'Caminhos do Cerrado MC');
  const [gestorNome, setGestorNome] = useState(initialValues?.gestorNome ?? 'Felipe Nunes');
  const [email, setEmail] = useState(initialValues?.email ?? 'felipe@example.com');
  const [telefone, setTelefone] = useState(initialValues?.telefone ?? '(67)99991-2026');
  const [cidade, setCidade] = useState(initialValues?.cidade ?? 'Campo Grande');
  const [uf, setUf] = useState(initialValues?.uf ?? 'MS');
  const [planoId, setPlanoId] = useState(initialValues?.planoId ?? planOptions[0]?.id ?? 'essencial');
  const [feedback, setFeedback] = useState('');

  if (!open && !inlinePreview) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!nome.trim() || !gestorNome.trim() || !email.trim()) {
      setFeedback('Preencha os campos obrigatórios.');
      return;
    }
    setFeedback('');
    onSubmit?.({
      nome: nome.trim(),
      gestorNome: gestorNome.trim(),
      email: email.trim(),
      telefone: telefone.trim(),
      cidade: cidade.trim(),
      uf,
      planoId: isCreate ? planoId : undefined,
    });
  };

  const card = (
    <div className="w-full max-w-[482px] rounded-[10px] border border-[#d7dbe3] dark:border-[#515259] bg-white dark:bg-[#191a1d] text-[#111318] dark:text-[#f7f7fa] p-4 shadow-xl">
      <div className="mb-3 flex items-start justify-between gap-2">
        <h2 className="text-xl font-extrabold leading-tight">
          {isCreate ? 'Novo motoclube' : 'Editar motoclube'}
        </h2>
        <button
          type="button"
          onClick={onCancel}
          aria-label="Fechar"
          className="grid h-7 w-7 place-items-center rounded hover:bg-[#eceef2] dark:hover:bg-[#232428]"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-2.5 text-xs">
        <label className="grid gap-1 font-semibold">
          Nome do motoclube
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            className="h-8 rounded-[6px] border border-[#c5cad3] dark:border-[#5d5e64] bg-[#f8f9fb] dark:bg-[#202124] px-2.5 font-normal focus:outline-none focus:border-[#a8abb6]"
          />
        </label>

        <label className="grid gap-1 font-semibold">
          Nome do gestor
          <input
            type="text"
            value={gestorNome}
            onChange={(e) => setGestorNome(e.target.value)}
            required
            className="h-8 rounded-[6px] border border-[#c5cad3] dark:border-[#5d5e64] bg-[#f8f9fb] dark:bg-[#202124] px-2.5 font-normal focus:outline-none focus:border-[#a8abb6]"
          />
        </label>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1.34fr_1fr]">
          <label className="grid gap-1 font-semibold">
            E-mail
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-8 rounded-[6px] border border-[#c5cad3] dark:border-[#5d5e64] bg-[#f8f9fb] dark:bg-[#202124] px-2.5 font-normal focus:outline-none focus:border-[#a8abb6]"
            />
          </label>
          <label className="grid gap-1 font-semibold">
            Telefone
            <input
              type="tel"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
              className="h-8 rounded-[6px] border border-[#c5cad3] dark:border-[#5d5e64] bg-[#f8f9fb] dark:bg-[#202124] px-2.5 font-normal focus:outline-none focus:border-[#a8abb6]"
            />
          </label>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1.34fr_1fr]">
          <label className="grid gap-1 font-semibold">
            Cidade
            <input
              type="text"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              required
              className="h-8 rounded-[6px] border border-[#c5cad3] dark:border-[#5d5e64] bg-[#f8f9fb] dark:bg-[#202124] px-2.5 font-normal focus:outline-none focus:border-[#a8abb6]"
            />
          </label>
          <label className="grid gap-1 font-semibold">
            Estado
            <select
              value={uf}
              onChange={(e) => setUf(e.target.value)}
              required
              className="h-8 rounded-[6px] border border-[#c5cad3] dark:border-[#5d5e64] bg-[#f8f9fb] dark:bg-[#202124] px-2 font-normal focus:outline-none focus:border-[#a8abb6]"
            >
              {UFS.map((u) => (
                <option key={u} value={u}>
                  {u}
                </option>
              ))}
            </select>
          </label>
        </div>

        {isCreate && (
          <>
            <label className="grid gap-1 font-semibold">
              Plano inicial
              <select
                value={planoId}
                onChange={(e) => setPlanoId(e.target.value)}
                required
                className="h-8 rounded-[6px] border border-[#c5cad3] dark:border-[#5d5e64] bg-[#f8f9fb] dark:bg-[#202124] px-2 font-normal focus:outline-none focus:border-[#a8abb6]"
              >
                {planOptions.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.nome} — {formatBrlFromCents(p.precoMensalCentavos)}/mês
                  </option>
                ))}
              </select>
            </label>
            <p className="flex items-center gap-2 pt-0.5 text-[11px] text-[#5c6270] dark:text-[#d5d5d8]">
              <Info className="h-4 w-4 shrink-0" />
              <span>A assinatura será ativada após a confirmação do pagamento.</span>
            </p>
          </>
        )}

        {feedback && (
          <output role="status" className="text-[11px] text-[#b41827] dark:text-[#ffadb2]">
            {feedback}
          </output>
        )}

        <footer className="mt-2 flex justify-end gap-2.5">
          <button
            type="button"
            onClick={onCancel}
            className="inline-flex h-8 items-center justify-center rounded-[6px] border border-[#c5cad3] dark:border-[#666970] bg-white dark:bg-[#191a1d] px-3.5 text-xs font-medium hover:bg-[#eceef2] dark:hover:bg-[#25262b]"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="inline-flex h-8 items-center justify-center rounded-[6px] border border-[#e5131d] bg-gradient-to-r from-[#e5111d] to-[#cb0b16] px-4 text-xs font-semibold text-white hover:brightness-110"
          >
            Salvar cadastro
          </button>
        </footer>
      </form>
    </div>
  );

  if (inlinePreview) return card;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
    >
      {card}
    </div>
  );
}
