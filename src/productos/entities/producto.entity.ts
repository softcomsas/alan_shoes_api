import { Entity, PrimaryGeneratedColumn, Column, OneToMany, DeleteDateColumn } from 'typeorm';
import { Pedido } from '../../pedidos/entities/pedido.entity';
import { Carrito } from '../../carrito/entities/carrito.entity';

@Entity('productos')
export class Producto {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	nombre: string;

	@Column()
	precio: number;

	@Column({ nullable: true })
	descripcion?: string;

	@Column()
	genero?: string;

	@Column({ default: 0 })
	cantidad: number;

    @Column()
    color?: string;

	@Column()
	categoria:string;

	@Column()
	numeroCalzado?: string;

	@Column({ type: 'date' })
	fechaPublicacion: Date;

	@Column({ default: true })
	activo: boolean;

	@Column({ type: 'longblob', nullable: true })
	img?: Buffer | null;

	@Column()
	moneda: string;

	@OneToMany(() => Pedido, pedido => pedido.producto)
	pedidos: Pedido[];

	@OneToMany(() => Carrito, carrito => carrito.producto)
	carritos: Carrito[];

	@DeleteDateColumn()
    deleteAT: Date;
}

