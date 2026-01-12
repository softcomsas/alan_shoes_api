import { IsNumber, IsPositive } from 'class-validator';

export class CreateCarritoDto {
	@IsNumber()
	@IsPositive()
	cantidad: number;

	@IsNumber()
	@IsPositive()
	usuarioId: number;

	@IsNumber()
	@IsPositive()
	productoId: number;
}
