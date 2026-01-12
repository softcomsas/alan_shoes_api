import { IsNumber, IsOptional, IsPositive } from "class-validator";

export class UpdateCarritoDto {
    @IsNumber()
    @IsPositive()
    @IsOptional()
    cantidad?: number;
}
