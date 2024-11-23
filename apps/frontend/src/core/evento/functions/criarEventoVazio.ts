import { Id } from '@/core/shared';
import Evento from '../model/Evento';

const criarEventoVazio = (): Partial<Evento> => {
  return {
    id: Id.novo(),
    nome: '',
    descricao: '',
    data: new Date(),
    local: '',
    publicoEsperado: 1,
    imagem: '',
    imagemBackground: '',
  };
};

export default criarEventoVazio;
