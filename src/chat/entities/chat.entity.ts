import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { ChatMessage } from './chat-message.entity';


@Entity('conversations')
export class Conversation {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	userId: number;

	@Column({ nullable: true })
	adminId?: number;

	@Column({ nullable: true })
	subject?: string;

	@Column({ default: 'open' })
	status: 'open' | 'closed' | 'pending';

	@Column({ default: false })
	deletedByUser: boolean;

	@Column({ default: false })
	deletedByAdmin: boolean;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@OneToMany(() => ChatMessage, (m) => m.conversation, { cascade: true })
	messages: ChatMessage[];

	@DeleteDateColumn()
	deleteAT: Date;
}
