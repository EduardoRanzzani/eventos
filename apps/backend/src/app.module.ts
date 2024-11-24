import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EventosModule } from './eventos/eventos.module';

@Module({
  controllers: [AppController],
  imports: [EventosModule],
})
export class AppModule {}
