import { Calendar, Clock } from 'lucide-react';

export interface DataEHorarioLadoALadoProps {
  data: string;
  horario: string;
  erroData?: string;
  erroHorario?: string;
  disabled?: boolean;
  onDataChange: (val: string) => void;
  onHorarioChange: (val: string) => void;
}

export function DataEHorarioLadoALado({
  data,
  horario,
  erroData,
  erroHorario,
  disabled = false,
  onDataChange,
  onHorarioChange,
}: DataEHorarioLadoALadoProps) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="grid gap-1">
        <label htmlFor="event-date-input" className="text-[13px] font-bold">
          Data
        </label>
        <div className="relative flex items-center">
          <Calendar className="pointer-events-none absolute left-2.5 h-4 w-4 text-[#ff344c]" />
          <input
            id="event-date-input"
            type="date"
            value={data}
            disabled={disabled}
            onChange={(e) => onDataChange(e.target.value)}
            required
            className={[
              'min-h-[40px] w-full rounded-[10px] border bg-white dark:bg-[#191b20] py-1.5 pl-9 pr-2.5 text-sm text-[#111318] dark:text-[#f6f7f9]',
              'focus-visible:outline-2 focus-visible:outline-[#a6cdff] focus-visible:outline-offset-2 disabled:opacity-70',
              erroData
                ? 'border-[#ff273a] dark:border-[#ff6371]'
                : 'border-[#d7dbe3] dark:border-[#42454e]',
            ].join(' ')}
          />
        </div>
        {erroData && <small className="text-xs text-[#dc2626] dark:text-[#ff8996]">{erroData}</small>}
      </div>
      <div className="grid gap-1">
        <label htmlFor="event-time-input" className="text-[13px] font-bold">
          Horário
        </label>
        <div className="relative flex items-center">
          <Clock className="pointer-events-none absolute left-2.5 h-4 w-4 text-[#ff344c]" />
          <input
            id="event-time-input"
            type="time"
            value={horario}
            disabled={disabled}
            onChange={(e) => onHorarioChange(e.target.value)}
            required
            className={[
              'min-h-[40px] w-full rounded-[10px] border bg-white dark:bg-[#191b20] py-1.5 pl-9 pr-2.5 text-sm text-[#111318] dark:text-[#f6f7f9]',
              'focus-visible:outline-2 focus-visible:outline-[#a6cdff] focus-visible:outline-offset-2 disabled:opacity-70',
              erroHorario
                ? 'border-[#ff273a] dark:border-[#ff6371]'
                : 'border-[#d7dbe3] dark:border-[#42454e]',
            ].join(' ')}
          />
        </div>
        {erroHorario && (
          <small className="text-xs text-[#dc2626] dark:text-[#ff8996]">{erroHorario}</small>
        )}
      </div>
    </div>
  );
}
