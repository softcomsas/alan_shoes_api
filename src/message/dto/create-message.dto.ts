import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateMessageDto {
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsOptional()
  subject?: string;
}
