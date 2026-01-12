import { Transform } from "class-transformer";
import { IsEmail, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class RegisterDto{
    @Transform(({value})=> value.trim())
    @IsString()
    @MinLength(3)
    nombre:string;

    @Transform(({value})=> value.trim())
    @IsString()
    @MinLength(3)
    apellidos:string;

    @IsEmail()
    email:string;

    @Transform(({value})=> value.trim())
    @IsString()
    @MaxLength(8)
    telefono:string;
    
    @Transform(({value})=> value.trim())
    @IsString()
    @MinLength(6)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
    password:string;

    @IsString()
    direccion: string;
   
    @IsString()
    @IsOptional()
    img?:Buffer;

    @IsString()
    role: string;

}