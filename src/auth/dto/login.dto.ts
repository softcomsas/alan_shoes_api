import { Transform } from "class-transformer";
import { IsBoolean, IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class LoginDto{
    @IsEmail()
    email:string;

    @Transform(({value})=> value.trim())
    @IsString()
    @MinLength(6)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
    password:string;

    @IsBoolean()
    ok: boolean = false;
}