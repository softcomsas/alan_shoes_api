import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateProductoDto {
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    nombre?: string;

    @IsNumber()
    @IsOptional()
    precio?: number;

    @IsString()
    @IsOptional()
    descripcion?: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    genero?: string;

    @IsString()
	@IsNotEmpty()
    @IsOptional()
    categoria?:string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    numeroCalzado?: string;

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    cantidad?: number;

    @IsString()
	@IsNotEmpty()
    @IsOptional()
	color?: string;

    @IsDateString()
    @IsNotEmpty()
    @IsOptional()
    fechaPublicacion?: string;

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    canidad?: number;

    @IsString()
	@IsNotEmpty()
	@IsOptional()
	moneda?: string;

    @IsBoolean()
    @IsOptional()
    activo?: boolean;
}
