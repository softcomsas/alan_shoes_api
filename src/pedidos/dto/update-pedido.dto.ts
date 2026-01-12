import { IsNumber, IsOptional, IsPositive } from "class-validator";


export class UpdatePedidoDto {
    @IsNumber()
    @IsPositive()
    @IsOptional()
    cantidad: number;

    @IsNumber()
    @IsPositive()
    usuarioId: number;

    @IsNumber()
    @IsPositive()
    productoId: number;
}
