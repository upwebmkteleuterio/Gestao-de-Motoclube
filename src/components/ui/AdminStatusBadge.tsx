export type AdminStatusTone = 'positive' | 'danger' | 'warning' | 'neutral';

export interface AdminStatusBadgeProps {
  label: string;
  tone?: AdminStatusTone;
}

const TONE_MAP: Record<AdminStatusTone, string> = {
  positive: 'bg-[#dff5e5] text-[#125a24] dark:bg-[#124715] dark:text-[#b9ffc3]',
  danger: 'bg-[#fde1e3] text-[#8f101a] dark:bg-[#850e17] dark:text-[#fff2f2]',
  warning: 'bg-[#fef0d4] text-[#7a4b00] dark:bg-[#62460b] dark:text-[#ffdd99]',
  neutral: 'bg-[#e6e9ef] text-[#3f4450] dark:bg-[#34363a] dark:text-[#eeeeee]',
};

export function AdminStatusBadge({ label, tone = 'neutral' }: AdminStatusBadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-bold leading-tight',
        TONE_MAP[tone],
      ].join(' ')}
    >
      {label}
    </span>
  );
}
