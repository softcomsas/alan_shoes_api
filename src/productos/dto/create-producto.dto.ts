import { IsString, IsNotEmpty, IsOptional, IsNumber, IsBoolean, IsDateString } from "class-validator";

export class CreateProductoDto {

	@IsString()
	@IsNotEmpty()
	nombre: string;

	@IsNumber()
	precio: number;

	@IsString()
	@IsOptional()
	descripcion?: string;

    @IsString()
    @IsNotEmpty()
    genero: string;

    @IsNumber()
    @IsNotEmpty()
    cantidad: number;

	@IsString()
	@IsNotEmpty()
	numeroCalzado: string;

	@IsString()
	@IsNotEmpty()
	categoria:string;

	@IsString()
	@IsNotEmpty()
	color: string;

	@IsBoolean()
	@IsOptional()
	activo?: boolean;

	@IsString()
	@IsNotEmpty()
	moneda: string;

	@IsDateString()
	@IsNotEmpty()
	fechaPublicacion: string;
}
