import { Module } from '@nestjs/common';
import { NotificacionService } from './notificacion.service';
import { NotificacionController } from './notificacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notificacion } from './entities/notificacion.entity';
import { Usuario } from '../usuario/entities/usuario.entity';
import { Pedido } from '../pedidos/entities/pedido.entity';
import { Producto } from '../productos/entities/producto.entity';
import { Carrito } from '../carrito/entities/carrito.entity';
import { UsuarioService } from '../usuario/usuario.service';
import { PedidosService } from '../pedidos/pedidos.service';
import { ProductosService } from '../productos/productos.service';
import { CarritoService } from '../carrito/carrito.service';
import { PushNotificationService } from './push-notification.service';
import { Promocione } from '../promociones/entities/promocione.entity';
import { PromocionesService } from '../promociones/promociones.service';
import { Conversation } from 'src/chat/entities/chat.entity';
import { ChatService } from 'src/chat/chat.service';
import { ChatMessage } from 'src/chat/entities/chat-message.entity';
import { UserSubscription } from './entities/userSubscripcion.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Notificacion, Usuario, Pedido, Producto, Carrito, Promocione, Conversation, ChatMessage, UserSubscription] ),
  ],
  controllers: [NotificacionController],
  providers: [
    NotificacionService, 
    UsuarioService, 
    PedidosService, 
    ProductosService, 
    CarritoService, 
    PushNotificationService,
    PromocionesService,
    ChatService
  ],
})
export class NotificacionModule {}
