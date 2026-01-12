

import { Module } from '@nestjs/common';
import { CarritoService } from './carrito.service';
import { CarritoController } from './carrito.controller';
import { UsuarioModule } from '../usuario/usuario.module';
import { ProductosModule } from '../productos/productos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioService } from '../usuario/usuario.service';
import { ProductosService } from '../productos/productos.service';
import { Carrito } from './entities/carrito.entity';

@Module({
  imports: [
    UsuarioModule,
    ProductosModule,
    TypeOrmModule.forFeature([Carrito])
  ],
  controllers: [CarritoController],
  providers: [
    CarritoService, 
    UsuarioService, 
    ProductosService
  ],
})
export class CarritoModule {}
