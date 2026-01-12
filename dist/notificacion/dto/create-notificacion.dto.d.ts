declare class PushKeysDto {
    p256dh: string;
    auth: string;
}
export declare class CreateNotificacionDto {
    mensaje: string;
    usuarioId?: number;
    pedidoId?: number;
    productoId?: number;
    endpoint?: string;
    expirationTime?: number;
    keys?: PushKeysDto;
}
export {};
