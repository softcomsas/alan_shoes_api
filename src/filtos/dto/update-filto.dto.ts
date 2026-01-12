import { PartialType } from '@nestjs/mapped-types';
import { CreateFiltoDto } from './create-filto.dto';

export class UpdateFiltoDto extends PartialType(CreateFiltoDto) {}
