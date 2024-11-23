import { Module } from '@nestjs/common';
import { DoacaoService } from './shared/doacao.service/doacao.service';
import { DoacoesController } from './doacoes.controller';
import { DoacaoSchema } from './schemas/doacao.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Doacao', schema: DoacaoSchema}])
  ],
  controllers: [DoacoesController],
  providers: [DoacaoService]
})
export class DoacoesModule {}
