import Convidado from '../model/Convidado';

const validarConvidado = (convidado: Partial<Convidado>): string[] => {
  const erros: string[] = [];

  if (!convidado.nome) {
    erros.push('O nome do convidado é obrigatório.');
  }

  if (!convidado.email) {
    erros.push('O email do convidado é obrigatório.');
  }

  return erros;
};

export default validarConvidado;
