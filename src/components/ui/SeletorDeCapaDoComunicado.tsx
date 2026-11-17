import { useState, type ChangeEvent } from 'react';
import { Image as ImageIcon, X } from 'lucide-react';

export interface SeletorDeCapaDoComunicadoProps {
  capaUrlAtual?: string | null;
  onChange?: (file: File | null, previewUrl: string | null) => void;
}

export function SeletorDeCapaDoComunicado({
  capaUrlAtual = null,
  onChange,
}: SeletorDeCapaDoComunicadoProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(capaUrlAtual);
  const [feedback, setFeedback] = useState('');

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setFeedback('Formato de imagem inválido.');
      return;
    }
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    setFeedback('');
    onChange?.(file, url);
  };

  const handleRemove = () => {
    setPreviewUrl(null);
    setFeedback('');
    onChange?.(null, null);
  };

  return (
    <div className="grid gap-1">
      <label className="pl-1 text-sm font-bold">Imagem de capa (opcional)</label>
      <div className="relative flex min-h-[86px] items-center gap-3.5 rounded-[10px] border border-[#d7dbe3] dark:border-[#737477] bg-white dark:bg-[#191b1f] px-3 py-1.5">
        {previewUrl && (
          <div className="relative flex items-center gap-3.5 border-r border-[#d7dbe3] dark:border-[#a4a7ae] pr-3.5">
            <img
              src={previewUrl}
              alt="Prévia da capa"
              referrerPolicy="no-referrer"
              className="h-[73px] w-[96px] rounded-[7px] bg-[#22252b] object-cover"
            />
            <button
              type="button"
              onClick={handleRemove}
              aria-label="Remover capa"
              className="absolute -left-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-black/80 text-white"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        )}
        <label className="mx-auto inline-flex min-h-[32px] cursor-pointer items-center gap-2 rounded-[10px] border border-[#d7dbe3] dark:border-[#f2f3f6] px-3 py-1 text-[13px] font-semibold hover:bg-[#eceef2] dark:hover:bg-[#30343e]">
          <ImageIcon className="h-4 w-4 text-[#ff202f]" />
          Adicionar imagem
          <input
            type="file"
            accept="image/png,image/jpeg,image/webp,image/gif"
            onChange={handleFile}
            className="sr-only"
          />
        </label>
      </div>
      {feedback && (
        <output role="status" className="text-xs text-[#dc2626] dark:text-[#ff8996]">
          {feedback}
        </output>
      )}
    </div>
  );
}
