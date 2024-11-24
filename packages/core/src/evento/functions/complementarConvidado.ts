import Convidado from '../model/Convidado';
import validarConvidado from './validarConvidado';

const complementarConvidado = (convidado: Partial<Convidado>): Convidado => {
  const erros = validarConvidado(convidado);

  if (erros.length) {
    throw new Error(erros.join('\n'));
  }

  const qtdeAcompanhantes = convidado.qtdeAcompanhantes ?? 0;
  const temAcompanhantes =
    convidado.possuiAcompanhantes ??
    (false && convidado.confirmado && qtdeAcompanhantes > 0);

  const convidadoAtualizado = {
    ...convidado,
    possuiAcompanhantes: temAcompanhantes,
    qtdeAcompanhantes: temAcompanhantes ? qtdeAcompanhantes : 0,
  } as Convidado;

  return convidadoAtualizado;
};

export default complementarConvidado;
