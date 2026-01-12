import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { Pedido } from '../../pedidos/entities/pedido.entity';
import { Producto } from '../../productos/entities/producto.entity';
import { Promocione } from '../../promociones/entities/promocione.entity';

@Entity('notificaciones')
export class Notificacion {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({default: 'Nueva Notificación'})
	mensaje: string;

	@Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
	fecha: Date;

	@ManyToOne(() => Usuario, { eager: true, nullable: true })
	usuario: Usuario | null;

	@ManyToOne(() => Pedido, { eager: true, nullable: true })
	pedido: Pedido | null;

	@ManyToOne(() => Producto, { eager: true, nullable: true })
	producto: Producto | null;

	@ManyToOne(() => Promocione, { eager: true, nullable: true })
	promocion: Promocione | null;

	// 👉 Campos para la suscripción push
  	@Column({ nullable: true })
  	endpoint?: string;
	
  	@Column({ type: 'bigint', nullable: true })
  	expirationTime?: number;
	
  	@Column({ nullable: true })
  	p256dh?: string;
	
  	@Column({ nullable: true })
  	auth?: string;
}
