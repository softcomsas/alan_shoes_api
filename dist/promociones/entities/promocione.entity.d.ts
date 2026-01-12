import { Notificacion } from '../../notificacion/entities/notificacion.entity';
export declare class Promocione {
    id: number;
    titulo: string;
    descripcion: string;
    fechaInicio: Date;
    fechaFin: Date;
    descuento: number;
    notificaciones: Notificacion[];
    deleteAT: Date;
}
