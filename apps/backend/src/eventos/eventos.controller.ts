import { Controller, Get } from '@nestjs/common';
import { Data, Evento, eventos } from 'core';

@Controller('eventos')
export class EventosController {
  constructor() {}

  @Get()
  async buscarEventos() {
    return eventos.map(this.serializar);
  }

  private serializar(evento: Evento) {
    return {
      ...evento,
      data: Data.formatar(evento.data),
    };
  }

  private deserializar(evento: any): Evento {
    return {
      ...evento,
      data: Data.desformatar(evento.data),
    };
  }
}
