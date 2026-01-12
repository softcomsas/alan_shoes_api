import { Transform } from "class-transformer";
import { IsEmail, IsString, MinLength, MaxLength, Matches, IsOptional } from "class-validator";

export class CreateUsuarioDto {
    @IsString()
    @MinLength(3)
    nombre: string;

    @Transform(({value})=> value.trim())
    @IsString()
    @MinLength(3)
    apellidos:string;
    
    @IsEmail()
    email: string;
    
    @IsString()
    @MinLength(6)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
    password: string;
    
    @IsString()
    telefono: string;
    
    @IsString()
    direccion: string;

    @IsString()
    role: string;
   
    @IsString()
    @IsOptional()
    img?:Buffer;
}
