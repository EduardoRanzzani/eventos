import { Id } from '../../shared';
import Convidado from '../model/Convidado';

const criarConvidadoVazio = (): Partial<Convidado> => {
  return {
    id: Id.novo(),
    nome: '',
    email: '',
    confirmado: true,
    possuiAcompanhantes: false,
    qtdeAcompanhantes: 0,
  };
};

export default criarConvidadoVazio;
