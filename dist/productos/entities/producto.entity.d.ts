import { Pedido } from '../../pedidos/entities/pedido.entity';
import { Carrito } from '../../carrito/entities/carrito.entity';
export declare class Producto {
    id: number;
    nombre: string;
    precio: number;
    descripcion?: string;
    genero?: string;
    cantidad: number;
    color?: string;
    categoria: string;
    numeroCalzado?: string;
    fechaPublicacion: Date;
    activo: boolean;
    img?: Buffer | null;
    moneda: string;
    pedidos: Pedido[];
    carritos: Carrito[];
    deleteAT: Date;
}
