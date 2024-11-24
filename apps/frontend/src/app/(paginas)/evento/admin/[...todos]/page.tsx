'use client';

import DashboardEvento from '@/components/evento/DashboardEvento';
import FormSenhaEvento from '@/components/evento/FormSenhaEvento';
import { Convidado, Evento, eventos } from 'core';
import { use, useEffect, useState } from 'react';

const PaginaAdminEvento = (props: any) => {
  const params: any = use(props.params);
  const id = params.todos[0];
  const [evento, setEvento] = useState<Evento | undefined>(undefined);
  const [senha, setSenha] = useState<string | null>(params.todos[1] ?? null);

  const presentes: Convidado[] =
    evento?.convidados.filter((c) => c.confirmado) ?? [];
  const ausentes: Convidado[] =
    evento?.convidados.filter((c) => !c.confirmado) ?? [];

  const totalGeral =
    presentes.reduce((total: number, convidado: Convidado) => {
      return total + convidado.qtdeAcompanhantes + 1;
    }, 0) ?? 0;

  useEffect(() => {
    carregarEvento();
  }, [id, senha]);

  const carregarEvento = () => {
    const evento = eventos.find((ev) => ev.id === id && ev.senha === senha);
    setEvento(evento);
  };

  return (
    <div className='flex flex-col items-center'>
      {evento ? (
        <DashboardEvento
          evento={evento}
          presentes={presentes}
          ausentes={ausentes}
          totalGeral={totalGeral}
        />
      ) : (
        <FormSenhaEvento />
      )}
    </div>
  );
};

export default PaginaAdminEvento;
