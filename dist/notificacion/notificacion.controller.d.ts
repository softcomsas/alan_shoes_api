import { NotificacionService } from './notificacion.service';
import { CreateNotificacionDto } from './dto/create-notificacion.dto';
import { UpdateNotificacionDto } from './dto/update-notificacion.dto';
export declare class NotificacionController {
    private readonly notificacionService;
    constructor(notificacionService: NotificacionService);
    create(createNotificacionDto: CreateNotificacionDto): Promise<import("./entities/notificacion.entity").Notificacion>;
    notificarNuevaPublicacion(body: {
        mensaje: string;
        productoId?: number;
    }): Promise<{
        success: boolean;
        total: number;
    }>;
    notificarNuevaPromocion(body: {
        mensaje: string;
        promocionId: number;
    }): Promise<{
        success: boolean;
        total: number;
    }>;
    notificarAdminsNuevoPedido(dto: {
        mensaje: string;
        pedidoId: number;
    }): Promise<{
        success: boolean;
        total: number;
    }>;
    notificarAdminsNuevoChat(body: {
        mensaje: string;
        conversationId: number;
    }): Promise<{
        success: boolean;
        total: number;
    }>;
    findAll(): Promise<import("./entities/notificacion.entity").Notificacion[]>;
    findOne(id: string): Promise<import("./entities/notificacion.entity").Notificacion | null>;
    update(id: string, updateNotificacionDto: UpdateNotificacionDto): Promise<import("./entities/notificacion.entity").Notificacion | null>;
    remove(id: string): Promise<import("./entities/notificacion.entity").Notificacion>;
}
