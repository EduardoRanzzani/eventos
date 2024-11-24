import { Evento } from '@/core';
import InformacoesEvento from './InformacoesEvento';

export interface DashboardEventoProps {
  evento: Evento;
}

const DashboardEvento = (props: DashboardEventoProps) => {
  return (
    <div>
      <div>
        <InformacoesEvento evento={props.evento} />
      </div>
    </div>
  );
};

export default DashboardEvento;
