import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EventosModule } from './eventos/eventos.module';
import { DbModule } from './db/db.module';

@Module({
  controllers: [AppController],
  imports: [EventosModule, DbModule],
})
export class AppModule {}
