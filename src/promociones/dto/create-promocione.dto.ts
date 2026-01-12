import { IsString, IsNotEmpty, IsDateString, IsOptional, IsNumber } from 'class-validator';

export class CreatePromocioneDto {
	@IsString()
	@IsNotEmpty()
	titulo: string;

	@IsString()
	@IsNotEmpty()
	descripcion: string;

	@IsDateString()
	fechaInicio: string;

	@IsDateString()
	fechaFin: string;

	@IsNumber()
	@IsOptional()
	descuento?: number;
}
