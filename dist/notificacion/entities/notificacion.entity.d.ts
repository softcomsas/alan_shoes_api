import { Usuario } from '../../usuario/entities/usuario.entity';
import { Pedido } from '../../pedidos/entities/pedido.entity';
import { Producto } from '../../productos/entities/producto.entity';
import { Promocione } from '../../promociones/entities/promocione.entity';
export declare class Notificacion {
    id: number;
    mensaje: string;
    fecha: Date;
    usuario: Usuario | null;
    pedido: Pedido | null;
    producto: Producto | null;
    promocion: Promocione | null;
    endpoint?: string;
    expirationTime?: number;
    p256dh?: string;
    auth?: string;
}
