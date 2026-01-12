
import { Module } from '@nestjs/common';
import { FiltosService } from './filtos.service';
import { FiltosController } from './filtos.controller';
import { UsuarioModule } from '../usuario/usuario.module';
import { PedidosModule } from '../pedidos/pedidos.module';
import { ProductosModule } from '../productos/productos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from '../usuario/entities/usuario.entity';
import { Pedido } from '../pedidos/entities/pedido.entity';
import { Producto } from '../productos/entities/producto.entity';
import { UsuarioService } from '../usuario/usuario.service';
import { PedidosService } from '../pedidos/pedidos.service';
import { ProductosService } from '../productos/productos.service';

@Module({
  imports: [
    UsuarioModule,
    PedidosModule,
    ProductosModule,
    TypeOrmModule.forFeature([Usuario, Pedido, Producto])
  ],
  controllers: [FiltosController],
  providers: [
    FiltosService, 
    UsuarioService, 
    PedidosService, 
    ProductosService    
  ],
})
export class FiltosModule {}
