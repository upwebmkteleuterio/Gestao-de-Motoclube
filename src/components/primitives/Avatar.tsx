export interface AvatarProps {
  name: string;
  src?: string | null;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  rounded?: 'full' | 'square';
  className?: string;
}

export function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0) return 'MC';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

const sizeMap = {
  sm: 'w-9 h-9 text-xs',
  md: 'w-12 h-12 text-sm',
  lg: 'w-14 h-14 text-base',
  xl: 'w-20 h-20 text-lg',
};

export function Avatar({
  name,
  src,
  size = 'md',
  rounded = 'square',
  className = '',
}: AvatarProps) {
  return (
    <span
      aria-hidden="true"
      className={[
        'relative inline-grid place-items-center overflow-hidden bg-[#32363e] font-bold text-white shrink-0 select-none',
        rounded === 'full' ? 'rounded-full' : 'rounded-[11px]',
        sizeMap[size],
        className,
      ].join(' ')}
    >
      <span>{getInitials(name)}</span>
      {src ? (
        <img
          src={src}
          alt={name}
          referrerPolicy="no-referrer"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}
    </span>
  );
}
