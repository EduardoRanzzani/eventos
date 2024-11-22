import { Evento } from 'core';
import QRCode from 'react-qr-code';

export interface AcessarViaQrCodeProps {
  evento: Evento;
}

const AcessarViaQrCode = (props: AcessarViaQrCodeProps) => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 border border-zinc-800 px-10 rounded-lg'>
      <span className='text-sm font-light text-zinc-400'>
        Acesse via Mobile
      </span>
      <QRCode
        className='w-32 h-32'
        value={JSON.stringify({
          id: props.evento.id,
          nome: props.evento.nome,
        })}
      />
    </div>
  );
};

export default AcessarViaQrCode;
