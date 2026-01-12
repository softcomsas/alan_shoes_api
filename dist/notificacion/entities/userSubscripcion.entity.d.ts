import { Usuario } from '../../usuario/entities/usuario.entity';
export declare class UserSubscription {
    id: number;
    usuario: Usuario;
    endpoint: string;
    p256dh: string;
    auth: string;
    createdAt: Date;
}
