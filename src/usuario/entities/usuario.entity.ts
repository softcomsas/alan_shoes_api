import { Column, Entity, OneToMany } from "typeorm";
import { Pedido } from '../../pedidos/entities/pedido.entity';
import { Carrito } from '../../carrito/entities/carrito.entity';

@Entity()
export class Usuario {
    @Column({primary: true, generated:true})
    id: number;

    @Column()
    nombre: string;

    @Column()
    apellidos:string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    telefono: string;

    @Column()
    direccion: string;

    @Column()
    role: string;

    @Column({ type: 'longblob', nullable: true })
    img: Buffer;

    @OneToMany(() => Pedido, pedido => pedido.usuario)
    pedidos: Pedido[];

    @OneToMany(() => Carrito, carrito => carrito.usuario)
    carritos: Carrito[];
}