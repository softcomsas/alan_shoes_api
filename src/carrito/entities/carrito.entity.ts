import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, DeleteDateColumn } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { Producto } from '../../productos/entities/producto.entity';

@Entity('carritos')
export class Carrito {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	cantidad: number;

	@ManyToOne(() => Usuario, usuario => usuario.carritos, { eager: true })
	usuario: Usuario;

	@ManyToOne(() => Producto, producto => producto.carritos, { eager: true })
	producto: Producto;

	@DeleteDateColumn()
    deleteAT: Date;
}
