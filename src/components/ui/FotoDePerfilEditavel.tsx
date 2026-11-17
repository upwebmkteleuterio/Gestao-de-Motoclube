import { useState, type ChangeEvent } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { Avatar } from '../primitives';

export interface FotoDePerfilEditavelProps {
  nome: string;
  fotoUrlAtual?: string | null;
  onSelectPhoto?: (file: File | null, dataUrl: string | null) => void;
}

export function FotoDePerfilEditavel({
  nome,
  fotoUrlAtual = null,
  onSelectPhoto,
}: FotoDePerfilEditavelProps) {
  const [preview, setPreview] = useState<string | null>(fotoUrlAtual);
  const [message, setMessage] = useState('');

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (!file) return;
    if (!file.type.startsWith('image/') || file.size > 1500000) {
      setMessage('Selecione uma imagem de até 1,5 MB para a prévia.');
      e.target.value = '';
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === 'string' ? reader.result : null;
      setPreview(result);
      setMessage('Foto selecionada.');
      onSelectPhoto?.(file, result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="grid justify-items-center gap-2.5">
      <Avatar name={nome} src={preview} className="h-[96px] w-[96px] rounded-[17px] text-xl" />
      <label className="inline-flex min-h-[38px] cursor-pointer items-center gap-2 rounded-full border border-[#9ca3af] dark:border-[#bfc2cc] px-5 py-1.5 text-sm font-bold hover:bg-[#eceef2] dark:hover:bg-[#282d35]">
        <ImageIcon className="h-4 w-4" />
        Alterar foto
        <input type="file" accept="image/*" onChange={handleFile} className="sr-only" />
      </label>
      {message && (
        <small role="status" className="text-xs text-[#5c6270] dark:text-[#bfc2cb]">
          {message}
        </small>
      )}
    </div>
  );
}
