import { IsInt, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreatePedidoDto {
	@IsNumber()
	@IsPositive()
	cantidad: number;

	@IsNumber()
	@IsPositive()
	usuario: number;

	@IsNumber()
	@IsPositive()
	producto: number;

}
