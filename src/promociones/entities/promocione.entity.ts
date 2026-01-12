import { Entity, PrimaryGeneratedColumn, Column, OneToMany, DeleteDateColumn } from 'typeorm';
import { Notificacion } from '../../notificacion/entities/notificacion.entity';

@Entity('promociones')
export class Promocione {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	titulo: string;

	@Column('text')
	descripcion: string;

	@Column({ type: 'date' })
	fechaInicio: Date;

	@Column({ type: 'date' })
	fechaFin: Date;

	@Column({ type: 'float', nullable: true })
	descuento: number;

	@OneToMany(() => Notificacion, notificacion => notificacion.promocion)
	notificaciones: Notificacion[];

	@DeleteDateColumn()
	deleteAT: Date;
}
