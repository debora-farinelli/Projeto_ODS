import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DoacoesController } from './doacoes/doacoes.controller';
import { DoacoesModule } from './doacoes/doacoes.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:neymar@projetoods.khpzd.mongodb.net/?retryWrites=true&w=majority&appName=ProjetoODS'),
    UsersModule,
    DoacoesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}