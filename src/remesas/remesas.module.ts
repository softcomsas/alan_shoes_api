import { Module } from '@nestjs/common';
import { RemesasService } from './remesas.service';
import { RemesasController } from './remesas.controller';

@Module({
  controllers: [RemesasController],
  providers: [RemesasService],
})
export class RemesasModule {}
