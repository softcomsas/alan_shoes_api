import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, DeleteDateColumn } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { Producto } from '../../productos/entities/producto.entity';

@Entity('pedidos')
export class Pedido {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	cantidad: number;

	@ManyToOne(() => Usuario, usuario => usuario.pedidos, { eager: true })
	usuario: Usuario;

	@ManyToOne(() => Producto, producto => producto.pedidos, { eager: true })
	producto: Producto;

	@DeleteDateColumn()
    deleteAT: Date;
}
