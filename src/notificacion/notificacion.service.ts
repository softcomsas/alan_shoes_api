import { Injectable, NotFoundException } from '@nestjs/common';
import { PushNotificationService } from './push-notification.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNotificacionDto } from './dto/create-notificacion.dto';
import { UpdateNotificacionDto } from './dto/update-notificacion.dto';
import { Notificacion } from './entities/notificacion.entity';
import { Promocione } from '../promociones/entities/promocione.entity';
import { Usuario } from '../usuario/entities/usuario.entity';
import { Pedido } from '../pedidos/entities/pedido.entity';
import { Producto } from '../productos/entities/producto.entity';
import { Conversation } from 'src/chat/entities/chat.entity';

@Injectable()
export class NotificacionService {
  constructor(
    @InjectRepository(Notificacion)
    private readonly notificacionRepository: Repository<Notificacion>,

    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,

    @InjectRepository(Pedido)
    private readonly pedidoRepository: Repository<Pedido>,

    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,

    @InjectRepository(Promocione)
    private readonly promocioneRepository: Repository<Promocione>,

    @InjectRepository(Conversation)
    private readonly chatRepository: Repository<Conversation>,

    private readonly pushNotificationService: PushNotificationService,
  ) {}

  /**
   * Envía una notificación a todos los usuarios cuando hay una nueva publicación/producto
   * @param mensaje Mensaje de la notificación
   * @param productoId Opcional: id del producto relacionado
  */

  async notificarNuevaPublicacion(mensaje: string, productoId?: number) {
  const usuarios = await this.usuarioRepository.find();

  // Buscar el producto si se pasa el id
  const producto = productoId
    ? await this.productoRepository.findOneBy({ id: productoId })
    : null;

  for (const usuario of usuarios) {
    const notificacion = new Notificacion();
    notificacion.mensaje = mensaje;
    notificacion.usuario = usuario;
    if (producto) {
      notificacion.producto = producto;
    }

    // 👉 Si el usuario tiene suscripción push guardada en su perfil
    if ((usuario as any).endpoint && (usuario as any).p256dh && (usuario as any).auth) {
      notificacion.endpoint = (usuario as any).endpoint;
      notificacion.expirationTime = (usuario as any).expirationTime;
      notificacion.p256dh = (usuario as any).p256dh;
      notificacion.auth = (usuario as any).auth;
    }

    const saved = await this.notificacionRepository.save(notificacion);

    // 👉 Enviar notificación push si hay datos de suscripción
    if (saved.endpoint && saved.p256dh && saved.auth) {
      await this.pushNotificationService.sendPushNotification(
        {
          endpoint: saved.endpoint,
          expirationTime: saved.expirationTime,
          keys: {
            p256dh: saved.p256dh,
            auth: saved.auth,
          },
        },
        {
          title: '¡Nuevo producto disponible!',
          body: mensaje,
          data: { productoId },
        },
      );
    }
  }

  return { success: true, total: usuarios.length };
}


  /**
   * Envía una notificación a todos los usuarios cuando hay una nueva promoción
   * @param mensaje Mensaje de la notificación
   * @param promocionId id de la promoción relacionada
   */
  async notificarNuevaPromocion(mensaje: string, promocionId: number) {
    const usuarios = await this.usuarioRepository.find();
    const promocion = await this.promocioneRepository.findOneBy({ id: promocionId });
    for (const usuario of usuarios) {
      const notificacion = new Notificacion();
      notificacion.mensaje = mensaje;
      notificacion.usuario = usuario;
      notificacion.promocion = promocion;
      await this.notificacionRepository.save(notificacion);
      if ((usuario as any).pushSubscription) {
        await this.pushNotificationService.sendPushNotification(
          (usuario as any).pushSubscription,
          {
            title: '¡Nueva promoción disponible!',
            body: mensaje,
            data: { promocionId },
          },
        );
      }
    }
    return { success: true, total: usuarios.length };
  }


  /**
 * Envía una notificación a todos los administradores cuando hay un nuevo pedido
 * @param mensaje Mensaje de la notificación
 * @param pedidoId id del pedido relacionado
 */
  async notificarAdminsNuevoPedido(mensaje: string, pedidoId: number) {
  // Buscar todos los usuarios con rol admin
  const admins = await this.usuarioRepository.find({ where: { role: 'admin' } });
  const pedido = await this.pedidoRepository.findOneBy({ id: pedidoId });

  for (const admin of admins) {
    const notificacion = new Notificacion();
    notificacion.mensaje = mensaje.trim();
    notificacion.usuario = admin;
    notificacion.pedido = pedido;

    // 👉 Si el admin ya tiene suscripción guardada en la entidad Usuario
    if ((admin as any).endpoint && (admin as any).p256dh && (admin as any).auth) {
      notificacion.endpoint = (admin as any).endpoint;
      notificacion.expirationTime = (admin as any).expirationTime;
      notificacion.p256dh = (admin as any).p256dh;
      notificacion.auth = (admin as any).auth;
    }

    const saved = await this.notificacionRepository.save(notificacion);

    // 👉 Enviar notificación push si hay datos de suscripción
    if (saved.endpoint && saved.p256dh && saved.auth) {
      await this.pushNotificationService.sendPushNotification(
        {
          endpoint: saved.endpoint,
          expirationTime: saved.expirationTime,
          keys: {
            p256dh: saved.p256dh,
            auth: saved.auth,
          },
        },
        {
          title: '📦 Nuevo pedido recibido',
          body: mensaje,
          data: { pedidoId },
        },
      );
    }
  }

  return { success: true, total: admins.length };
}


  /**
 * Envía una notificación a todos los administradores cuando se crea un nuevo chat de conversación
 * @param mensaje Mensaje de la notificación
 * @param conversationId id de la conversación creada
 */
  async notificarAdminsNuevoChat(mensaje: string, conversationId: number) {
    // Buscar todos los usuarios con rol admin
    const admins = await this.usuarioRepository.find({ where: { role: 'admin' } });
    const conversation = await this.chatRepository.findOne({ where: { id: conversationId } });

    for (const admin of admins) {
      const notificacion = new Notificacion();
      notificacion.mensaje = mensaje;
      notificacion.usuario = admin;
      // puedes guardar la relación con la conversación si tu entidad Notificacion lo soporta
      (notificacion as any).conversation = conversation;

      await this.notificacionRepository.save(notificacion);

      // Si el admin tiene suscripción push, enviar notificación web
      if ((admin as any).pushSubscription) {
        await this.pushNotificationService.sendPushNotification(
          (admin as any).pushSubscription,
          {
            title: '💬 Nuevo chat iniciado',
            body: mensaje,
            data: { conversationId },
          },
        );
      }
    }

    return { success: true, total: admins.length };
  }

  async create(createNotificacionDto: CreateNotificacionDto): Promise<Notificacion> {
    const notificacion = new Notificacion();
    notificacion.mensaje = createNotificacionDto.mensaje;

    if (createNotificacionDto.usuarioId) {
      notificacion.usuario = await this.usuarioRepository.findOneBy({ id: createNotificacionDto.usuarioId });
    }
    if (createNotificacionDto.pedidoId) {
      notificacion.pedido = await this.pedidoRepository.findOneBy({ id: createNotificacionDto.pedidoId });
    }
    if (createNotificacionDto.productoId) {
      notificacion.producto = await this.productoRepository.findOneBy({ id: createNotificacionDto.productoId });
    }

    // 👉 Guardar datos de suscripción push
    if (createNotificacionDto.endpoint) {
      notificacion.endpoint = createNotificacionDto.endpoint;
    }
    if (createNotificacionDto.expirationTime) {
      notificacion.expirationTime = createNotificacionDto.expirationTime;
    }
    if (createNotificacionDto.keys) {
      notificacion.p256dh = createNotificacionDto.keys.p256dh;
      notificacion.auth = createNotificacionDto.keys.auth;
    }

    const saved = await this.notificacionRepository.save(notificacion);

    // 👉 Enviar notificación push si hay datos de suscripción
    if (saved.endpoint && saved.p256dh && saved.auth) {
      await this.pushNotificationService.sendPushNotification(
        {
          endpoint: saved.endpoint,
          expirationTime: saved.expirationTime,
          keys: {
            p256dh: saved.p256dh,
            auth: saved.auth,
          },
        },
        {
          title: 'Nueva notificación',
          body: saved.mensaje,
          data: { id: saved.id },
        },
      );
    }

    return saved;
  }


  async findAll(): Promise<Notificacion[]> {
    return await this.notificacionRepository.find();
  }

  async findOne(id: number): Promise<Notificacion | null> {
    return await this.notificacionRepository.findOneBy({ id });
  }

  async update(id: number, updateNotificacionDto: UpdateNotificacionDto): Promise<Notificacion | null> {
    const notificacion = await this.notificacionRepository.findOneBy({ id });

    if (!notificacion) throw new NotFoundException('Notificación no encontrada');

    if (updateNotificacionDto.mensaje) notificacion.mensaje = updateNotificacionDto.mensaje;

    if (updateNotificacionDto.usuarioId) {
      notificacion.usuario = await this.usuarioRepository.findOneBy({ id: updateNotificacionDto.usuarioId });
    }

    if (updateNotificacionDto.pedidoId) {
      notificacion.pedido = await this.pedidoRepository.findOneBy({ id: updateNotificacionDto.pedidoId });
    }

    if (updateNotificacionDto.productoId) {
      notificacion.producto = await this.productoRepository.findOneBy({ id: updateNotificacionDto.productoId });
    }

    return await this.notificacionRepository.save(notificacion);
  }

  async remove(id: number) {
    const notificacion = await this.notificacionRepository.findOneBy({ id });
    if (!notificacion) throw new NotFoundException('Notificación no encontrada');
    return await this.notificacionRepository.softRemove(notificacion);
  }
}
