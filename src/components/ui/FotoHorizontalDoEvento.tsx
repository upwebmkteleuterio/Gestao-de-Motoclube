import { useEffect, useState, type ChangeEvent } from 'react';
import { Image as ImageIcon, Trash2, Upload } from 'lucide-react';

export interface FotoHorizontalDoEventoProps {
  imagemAtual?: string | null;
  disabled?: boolean;
  onSelectFile?: (file: File | null, previewUrl: string | null) => void;
}

export function FotoHorizontalDoEvento({
  imagemAtual = null,
  disabled = false,
  onSelectFile,
}: FotoHorizontalDoEventoProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(imagemAtual);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    setPreviewUrl(imagemAtual ?? null);
    if (!imagemAtual) {
      setFeedback('');
    }
  }, [imagemAtual]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setFeedback('Selecione um arquivo de imagem válido.');
      e.target.value = '';
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const nextUrl = typeof reader.result === 'string' ? reader.result : URL.createObjectURL(file);
      setPreviewUrl(nextUrl);
      setFeedback('Imagem selecionada.');
      onSelectFile?.(file, nextUrl);
    };
    reader.readAsDataURL(file);
  };

  const handleRemove = () => {
    setPreviewUrl(null);
    setFeedback('');
    onSelectFile?.(null, null);
  };

  return (
    <div className="grid gap-1.5">
      <div className="flex items-center gap-2 text-sm font-bold text-[#111318] dark:text-[#f6f7f9]">
        <span>Foto do evento</span>
        <small className="rounded-full bg-[#eceef2] dark:bg-[#3c3f46] px-2 py-0.5 text-[11px] font-normal text-[#5c6270] dark:text-[#bfc2cb]">
          opcional
        </small>
      </div>
      <div className="flex flex-wrap items-center gap-3.5">
        <span className="grid aspect-[2.3] w-[45%] min-w-[130px] place-items-center overflow-hidden rounded-[9px] border border-dashed border-[#9ca3af] dark:border-[#c4c4cb] bg-[#eceef2] dark:bg-[#22252a] text-[#5c6270] dark:text-[#bfc2cb]">
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Prévia da foto do evento"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover"
            />
          ) : (
            <Upload className="h-5 w-5" />
          )}
        </span>
        <div className="flex flex-wrap items-center gap-2">
          <label
            className={[
              'inline-flex min-h-[40px] items-center gap-2 rounded-[10px] border border-[#d7dbe3] dark:border-[#e0e1e5] px-3 py-2 text-sm font-bold transition-colors',
              disabled
                ? 'cursor-not-allowed opacity-60'
                : 'cursor-pointer hover:bg-[#eceef2] dark:hover:bg-[#30343e]',
            ].join(' ')}
          >
            <ImageIcon className="h-4 w-4 text-[#ff344c]" />
            {previewUrl ? 'Alterar imagem' : 'Escolher imagem'}
            <input
              type="file"
              accept="image/*"
              disabled={disabled}
              onChange={handleChange}
              className="sr-only"
            />
          </label>
          {previewUrl && (
            <button
              type="button"
              disabled={disabled}
              onClick={handleRemove}
              className="inline-flex min-h-[40px] items-center gap-1.5 rounded-[10px] border border-[#d7dbe3] dark:border-[#42454e] px-3 py-2 text-xs font-semibold text-[#5c6270] dark:text-[#bfc2cb] hover:bg-[#eceef2] dark:hover:bg-[#30343e] disabled:opacity-60 transition-colors"
            >
              <Trash2 className="h-3.5 w-3.5" />
              Remover
            </button>
          )}
        </div>
      </div>
      {feedback && (
        <small role="status" className="text-xs text-[#5c6270] dark:text-[#bfc2cb]">
          {feedback}
        </small>
      )}
    </div>
  );
}
