import { Usuario } from '../../usuario/entities/usuario.entity';
import { Producto } from '../../productos/entities/producto.entity';
export declare class Pedido {
    id: number;
    cantidad: number;
    usuario: Usuario;
    producto: Producto;
    deleteAT: Date;
}
