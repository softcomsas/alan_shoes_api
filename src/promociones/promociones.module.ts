import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PromocionesService } from './promociones.service';
import { PromocionesController } from './promociones.controller';
import { Promocione } from './entities/promocione.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Promocione])],
  controllers: [PromocionesController],
  providers: [PromocionesService],
  exports: [
    TypeOrmModule,
    PromocionesService
  ],
})
export class PromocionesModule {}
