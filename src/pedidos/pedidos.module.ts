import { Module } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { PedidosController } from './pedidos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from './entities/pedido.entity';
import { UsuarioModule } from '../usuario/usuario.module';
import { ProductosModule } from '../productos/productos.module';
import { UsuarioService } from 'src/usuario/usuario.service';
import { ProductosService } from 'src/productos/productos.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pedido]),
    UsuarioModule,
    ProductosModule,
  ],
  controllers: [PedidosController],
  providers: [PedidosService, UsuarioService, ProductosService],
})
export class PedidosModule {}
