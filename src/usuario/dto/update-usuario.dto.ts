import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";
export class UpdateUsuarioDto {
    @IsString()
    @IsOptional()
    nombre?: string;

    @IsOptional()
    @IsString()
    @MinLength(3)
    apellidos:string;
        
    @IsString()
    @IsOptional()
    password?: string;
    
    @IsString()
    @IsOptional()
    telefono?: string;
    
    @IsString()
    @IsOptional()
    direccion?: string;

    @IsString()
    @IsOptional()
    img?:Buffer;
}
