import { useState, type ChangeEvent } from 'react';
import { Shield, Upload } from 'lucide-react';

export interface SeletorEPreviaDeLogoProps {
  nomeClube: string;
  logoUrlAtual?: string | null;
  corDestaqueHex?: string;
  onChangeLogo?: (file: File | null, previewUrl: string | null) => void;
}

const MAX_BYTES = 5 * 1024 * 1024;

export function SeletorEPreviaDeLogo({
  nomeClube,
  logoUrlAtual = null,
  corDestaqueHex = '#ED343B',
  onChangeLogo,
}: SeletorEPreviaDeLogoProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(logoUrlAtual);
  const [errorMsg, setErrorMsg] = useState('');

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (!file) return;
    if (!['image/png', 'image/jpeg'].includes(file.type)) {
      setErrorMsg('Use apenas arquivos PNG ou JPG.');
      e.target.value = '';
      return;
    }
    if (file.size > MAX_BYTES) {
      setErrorMsg('A imagem deve ter até 5 MB.');
      e.target.value = '';
      return;
    }
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    setErrorMsg('');
    onChangeLogo?.(file, url);
  };

  const handleRemove = () => {
    setPreviewUrl(null);
    setErrorMsg('');
    onChangeLogo?.(null, null);
  };

  return (
    <div className="grid gap-4">
      <section className="grid gap-2">
        <h2 className="text-base font-bold">Logo</h2>
        <div className="grid grid-cols-[90px_1fr] items-center gap-3.5">
          <span
            className="grid h-[84px] place-items-center overflow-hidden rounded-[12px] border border-[#d7dbe3] dark:border-[#3b3d43] bg-white dark:bg-gradient-to-br dark:from-[#181a1d] dark:to-[#141619]"
            style={{ color: corDestaqueHex }}
          >
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Logo do motoclube"
                referrerPolicy="no-referrer"
                className="h-full w-full object-contain p-1"
              />
            ) : (
              <Shield className="h-12 w-12" />
            )}
          </span>
          <div className="grid justify-items-start gap-1.5">
            <label className="inline-flex min-h-[36px] cursor-pointer items-center gap-2 rounded-[8px] border border-[#d7dbe3] dark:border-[#67686d] bg-white dark:bg-[#181a1d] px-4 py-1.5 text-sm font-bold hover:bg-[#eceef2] dark:hover:bg-[#2a2d34]">
              <Upload className="h-4 w-4 text-[#ff283e]" />
              Alterar logo
              <input
                type="file"
                accept="image/png,image/jpeg"
                onChange={handleFile}
                className="sr-only"
              />
            </label>
            <button
              type="button"
              onClick={handleRemove}
              className="text-xs font-semibold text-[#ff283e] underline"
            >
              Remover
            </button>
            <small className="text-xs text-[#5c6270] dark:text-[#bfc2cb]">
              PNG ou JPG • até 5 MB
            </small>
            {errorMsg && (
              <output role="alert" className="text-xs text-[#dc2626] dark:text-[#ff6371]">
                {errorMsg}
              </output>
            )}
          </div>
        </div>
      </section>

      <section className="grid gap-2">
        <h2 className="text-base font-bold">Prévia</h2>
        <div className="flex min-h-[60px] items-center gap-3.5 rounded-[10px] border border-[#d7dbe3] dark:border-[#3b3d43] bg-white dark:bg-gradient-to-br dark:from-[#181a1e] dark:to-[#15171a] px-3.5 py-2">
          <span
            className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden"
            style={{ color: corDestaqueHex }}
          >
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Prévia da logo"
                referrerPolicy="no-referrer"
                className="h-full w-full object-contain"
              />
            ) : (
              <Shield className="h-9 w-9" />
            )}
          </span>
          <strong className="flex-1 truncate border-l border-[#9ca3af] dark:border-[#999ba2] py-1 pl-3.5 text-sm font-bold">
            {nomeClube}
          </strong>
          <span
            className="rounded-[6px] px-3.5 py-1.5 text-xs font-bold text-white"
            style={{ backgroundColor: corDestaqueHex }}
          >
            Exemplo
          </span>
        </div>
      </section>
    </div>
  );
}
