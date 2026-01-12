import { IsInt, IsOptional, IsString } from "class-validator";

export class UpdateNotificacionDto{
    @IsString()
    @IsOptional()
    mensaje?: string;

    @IsInt()
    @IsOptional()
    usuarioId?: number;

    @IsInt()
    @IsOptional()
    pedidoId?: number;

    @IsInt()
    @IsOptional()
    productoId?: number;
}
