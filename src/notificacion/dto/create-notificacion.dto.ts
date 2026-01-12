import { IsString, IsOptional, IsInt, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class PushKeysDto {
  @IsString()
  p256dh: string;

  @IsString()
  auth: string;
}

export class CreateNotificacionDto {
  @IsString()
  mensaje: string;

  @IsInt()
  @IsOptional()
  usuarioId?: number;

  @IsInt()
  @IsOptional()
  pedidoId?: number;

  @IsInt()
  @IsOptional()
  productoId?: number;

  // 👉 Campos de la suscripción push
  @IsString()
  @IsOptional()
  endpoint?: string;

  @IsInt()
  @IsOptional()
  expirationTime?: number;

  @ValidateNested()
  @Type(() => PushKeysDto)
  @IsOptional()
  keys?: PushKeysDto;
}
