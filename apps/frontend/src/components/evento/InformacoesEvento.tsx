import { Evento } from '@/core';

export interface InformacoesEventoProps {
  evento: Evento;
}

const InformacoesEvento = (props: InformacoesEventoProps) => {
  return (
    <div>
      <span>{props.evento.nome}</span>
    </div>
  );
};

export default InformacoesEvento;
