import { Pedido } from '../../pedidos/entities/pedido.entity';
import { Carrito } from '../../carrito/entities/carrito.entity';
export declare class Usuario {
    id: number;
    nombre: string;
    apellidos: string;
    email: string;
    password: string;
    telefono: string;
    direccion: string;
    role: string;
    img: Buffer;
    pedidos: Pedido[];
    carritos: Carrito[];
}
