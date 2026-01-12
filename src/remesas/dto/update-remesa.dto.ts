import { PartialType } from '@nestjs/mapped-types';
import { CreateRemesaDto } from './create-remesa.dto';

export class UpdateRemesaDto extends PartialType(CreateRemesaDto) {}
