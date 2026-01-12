import { PushNotificationService } from './push-notification.service';
import { Repository } from 'typeorm';
import { CreateNotificacionDto } from './dto/create-notificacion.dto';
import { UpdateNotificacionDto } from './dto/update-notificacion.dto';
import { Notificacion } from './entities/notificacion.entity';
import { Promocione } from '../promociones/entities/promocione.entity';
import { Usuario } from '../usuario/entities/usuario.entity';
import { Pedido } from '../pedidos/entities/pedido.entity';
import { Producto } from '../productos/entities/producto.entity';
import { Conversation } from 'src/chat/entities/chat.entity';
export declare class NotificacionService {
    private readonly notificacionRepository;
    private readonly usuarioRepository;
    private readonly pedidoRepository;
    private readonly productoRepository;
    private readonly promocioneRepository;
    private readonly chatRepository;
    private readonly pushNotificationService;
    constructor(notificacionRepository: Repository<Notificacion>, usuarioRepository: Repository<Usuario>, pedidoRepository: Repository<Pedido>, productoRepository: Repository<Producto>, promocioneRepository: Repository<Promocione>, chatRepository: Repository<Conversation>, pushNotificationService: PushNotificationService);
    notificarNuevaPublicacion(mensaje: string, productoId?: number): Promise<{
        success: boolean;
        total: number;
    }>;
    notificarNuevaPromocion(mensaje: string, promocionId: number): Promise<{
        success: boolean;
        total: number;
    }>;
    notificarAdminsNuevoPedido(mensaje: string, pedidoId: number): Promise<{
        success: boolean;
        total: number;
    }>;
    notificarAdminsNuevoChat(mensaje: string, conversationId: number): Promise<{
        success: boolean;
        total: number;
    }>;
    create(createNotificacionDto: CreateNotificacionDto): Promise<Notificacion>;
    findAll(): Promise<Notificacion[]>;
    findOne(id: number): Promise<Notificacion | null>;
    update(id: number, updateNotificacionDto: UpdateNotificacionDto): Promise<Notificacion | null>;
    remove(id: number): Promise<Notificacion>;
}
