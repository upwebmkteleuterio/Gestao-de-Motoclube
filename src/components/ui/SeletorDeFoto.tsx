import { useEffect, useState, type ChangeEvent } from 'react';
import { Plus, Trash2, Upload } from 'lucide-react';
import { Avatar } from '../primitives';

export interface SeletorDeFotoProps {
  rotulo?: string;
  urlAtual?: string | null;
  nomeFallback?: string;
  textoBotao?: string;
  onSelectFile?: (file: File | null, previewUrl: string | null) => void;
}

export function SeletorDeFoto({
  rotulo = 'Foto',
  urlAtual = null,
  nomeFallback = 'MC',
  textoBotao,
  onSelectFile,
}: SeletorDeFotoProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(urlAtual);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    setPreviewUrl(urlAtual ?? null);
    if (!urlAtual) {
      setFeedback('');
    }
  }, [urlAtual]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setFeedback('Selecione um arquivo de imagem.');
      e.target.value = '';
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const nextUrl = typeof reader.result === 'string' ? reader.result : URL.createObjectURL(file);
      setPreviewUrl(nextUrl);
      setFeedback('Foto selecionada.');
      onSelectFile?.(file, nextUrl);
    };
    reader.readAsDataURL(file);
  };

  const handleRemove = () => {
    setPreviewUrl(null);
    setFeedback('');
    onSelectFile?.(null, null);
  };

  const buttonLabel = textoBotao ?? (previewUrl ? 'Alterar foto' : 'Adicionar foto');

  return (
    <div className="grid gap-1.5">
      <div className="text-sm font-bold text-[#111318] dark:text-[#f6f7f9]">
        {rotulo} <small className="font-normal text-[#5c6270] dark:text-[#bfc2cb]">(opcional)</small>
      </div>
      <div className="flex flex-wrap items-center gap-3.5">
        <span className="grid h-[66px] w-[70px] place-items-center rounded-[11px] border border-dashed border-[#9ca3af] dark:border-[#c4c4cb] text-[#5c6270] dark:text-[#bfc2cb]">
          {previewUrl || nomeFallback ? (
            <Avatar name={nomeFallback || 'MC'} src={previewUrl} className="h-[54px] w-[58px]" />
          ) : (
            <Upload className="h-5 w-5" />
          )}
        </span>
        <label className="inline-flex min-h-[40px] cursor-pointer items-center gap-1.5 rounded-[10px] border border-[#d7dbe3] dark:border-[#e0e1e5] bg-transparent px-3 py-2 text-sm font-bold hover:bg-[#eceef2] dark:hover:bg-[#30343e] transition-colors">
          <Plus className="h-4 w-4" />
          {buttonLabel}
          <input type="file" accept="image/*" onChange={handleChange} className="sr-only" />
        </label>
        {previewUrl && (
          <button
            type="button"
            onClick={handleRemove}
            className="inline-flex min-h-[40px] items-center gap-1.5 rounded-[10px] border border-[#d7dbe3] dark:border-[#42454e] px-3 py-2 text-xs font-semibold text-[#5c6270] dark:text-[#bfc2cb] hover:bg-[#eceef2] dark:hover:bg-[#30343e] transition-colors"
          >
            <Trash2 className="h-3.5 w-3.5" />
            Remover
          </button>
        )}
      </div>
      {feedback && (
        <small role="status" className="text-xs text-[#5c6270] dark:text-[#bfc2cb]">
          {feedback}
        </small>
      )}
    </div>
  );
}
