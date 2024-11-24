'use client';

import { Convidado, Evento, eventos } from '@/core';
import { use, useEffect, useState } from 'react';

const PaginaAdminEvento = (props: any) => {
  const params: any = use(props.params);
  const id = params.todos[0];
  const [evento, setEvento] = useState<Evento | undefined>(undefined);
  const [senha, setSenha] = useState<string | null>(params.todos[1] ?? null);

  const presentes = evento?.convidados.filter((c) => c.confirmado).length ?? [];
  const ausentes = evento?.convidados.filter((c) => !c.confirmado).length ?? [];

  const totalGeral = evento?.convidados.reduce(
    (total: number, convidado: Convidado) => {
      return total + convidado.qtdeAcompanhantes + 1;
    },
    0
  );

  useEffect(() => {
    carregarEvento();
  }, [id, senha]);

  const carregarEvento = () => {
    const evento: Evento = eventos.find(
      (ev) => ev.id === id && ev.senha === senha
    );

    setEvento(evento ?? null);
  };

  return evento ? (
    <div className='flex flex-col'>
      <span>{evento.nome}</span>
    </div>
  ) : null;
};

export default PaginaAdminEvento;
