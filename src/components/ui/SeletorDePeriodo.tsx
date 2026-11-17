import { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '../primitives';

export type PeriodoPreset = 'rolling' | '2026' | '2025' | 'custom';
export type PeriodoFrequenciaPreset = 'quarter' | 'month' | 'custom';

export interface SeletorDePeriodoProps<T extends string = PeriodoPreset> {
  periodo: T;
  variante?: 'anual' | 'frequencia';
  titulo?: string | null;
  deInicial?: string;
  ateInicial?: string;
  rotuloResumo?: string;
  isLoading?: boolean;
  onDraftChange?: (draft: { periodo: T; de: string; ate: string }) => void;
  onApply: (payload: { periodo: T; de?: string; ate?: string }) => void;
}

function formatDateBr(isoDate: string): string {
  const parts = isoDate.split('-');
  if (parts.length !== 3) return isoDate;
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

export function SeletorDePeriodo<T extends string = PeriodoPreset>({
  periodo,
  variante = 'anual',
  titulo,
  deInicial = '2026-01-01',
  ateInicial = '2026-12-31',
  rotuloResumo = '01/01/2026 a 31/12/2026',
  isLoading = false,
  onDraftChange,
  onApply,
}: SeletorDePeriodoProps<T>) {
  const [selected, setSelected] = useState<T>(periodo);
  const [startDate, setStartDate] = useState(deInicial);
  const [endDate, setEndDate] = useState(ateInicial);
  const [validationError, setValidationError] = useState<string | null>(null);

  useEffect(() => {
    setSelected(periodo);
  }, [periodo]);

  useEffect(() => {
    setStartDate(deInicial);
  }, [deInicial]);

  useEffect(() => {
    setEndDate(ateInicial);
  }, [ateInicial]);

  const handleSelectChange = (val: T) => {
    setSelected(val);
    setValidationError(null);
    onDraftChange?.({ periodo: val, de: startDate, ate: endDate });
    if (val !== 'custom') {
      onApply({ periodo: val });
    }
  };

  const resolvedTitle =
    titulo === undefined ? (variante === 'anual' ? 'Resumo do período' : null) : titulo;

  const statusText = validationError
    ? validationError
    : isLoading
      ? 'Atualizando período...'
      : selected === 'custom' && startDate && endDate && startDate <= endDate
        ? `${formatDateBr(startDate)} a ${formatDateBr(endDate)}`
        : rotuloResumo;

  const options =
    variante === 'frequencia'
      ? [
          { value: 'quarter', label: 'Últimos 3 meses' },
          { value: 'month', label: 'Últimos 30 dias' },
          { value: 'custom', label: 'Intervalo personalizado' },
        ]
      : [
          { value: 'rolling', label: 'Últimos 12 meses' },
          { value: '2026', label: 'Ano de 2026' },
          { value: '2025', label: 'Ano de 2025' },
          { value: 'custom', label: 'Intervalo de datas' },
        ];

  return (
    <form
      className={[
        'grid gap-2',
        variante === 'anual' ? 'border-t border-[#d7dbe3] dark:border-[#525459] pt-2.5' : '',
      ].join(' ')}
      onSubmit={(e) => {
        e.preventDefault();
        if (!startDate || !endDate || startDate > endDate) {
          setValidationError('Informe um intervalo válido.');
          return;
        }
        setValidationError(null);
        onApply({ periodo: 'custom' as T, de: startDate, ate: endDate });
      }}
    >
      {resolvedTitle && <h2 className="text-[17px] font-bold">{resolvedTitle}</h2>}
      <div className="flex flex-wrap items-center gap-2">
        <div className="relative flex min-w-[160px] flex-1 items-center">
          <Calendar className="pointer-events-none absolute left-2.5 h-4 w-4 text-[#5c6270] dark:text-[#bfc2cb]" />
          <select
            aria-label="Período"
            value={selected}
            disabled={isLoading}
            onChange={(e) => handleSelectChange(e.target.value as T)}
            className="min-h-[38px] w-full rounded-[10px] border border-[#d7dbe3] dark:border-[#a9a9ab] bg-white dark:bg-[#151618] py-1.5 pl-8 pr-3 text-sm text-[#111318] dark:text-[#f6f7f9] disabled:opacity-60"
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        {(variante === 'anual' || validationError || isLoading || rotuloResumo) && (
          <p className="text-xs text-[#5c6270] dark:text-[#bfc2cb]" role="status">
            {statusText}
          </p>
        )}
      </div>
      {selected === 'custom' && (
        <div className="grid gap-2 pt-1">
          <label className="grid gap-1 text-xs font-semibold">
            {variante === 'frequencia' ? 'Início' : 'Data inicial'}
            <input
              type="date"
              value={startDate}
              onChange={(e) => {
                const nextStart = e.target.value;
                setStartDate(nextStart);
                setValidationError(null);
                onDraftChange?.({ periodo: 'custom' as T, de: nextStart, ate: endDate });
              }}
              className="min-h-[38px] w-full rounded-[10px] border border-[#d7dbe3] dark:border-[#42454e] bg-white dark:bg-[#191b20] px-3 py-1.5 text-sm"
            />
          </label>
          <label className="grid gap-1 text-xs font-semibold">
            {variante === 'frequencia' ? 'Fim' : 'Data final'}
            <input
              type="date"
              value={endDate}
              onChange={(e) => {
                const nextEnd = e.target.value;
                setEndDate(nextEnd);
                setValidationError(null);
                onDraftChange?.({ periodo: 'custom' as T, de: startDate, ate: nextEnd });
              }}
              className="min-h-[38px] w-full rounded-[10px] border border-[#d7dbe3] dark:border-[#42454e] bg-white dark:bg-[#191b20] px-3 py-1.5 text-sm"
            />
          </label>
          <Button type="submit" variant="secondary" size="sm" disabled={isLoading}>
            Aplicar período
          </Button>
        </div>
      )}
    </form>
  );
}

