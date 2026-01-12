import { Injectable } from '@nestjs/common';
import { CreateRemesaDto } from './dto/create-remesa.dto';
import { UpdateRemesaDto } from './dto/update-remesa.dto';

@Injectable()
export class RemesasService {
  create(createRemesaDto: CreateRemesaDto) {
    return 'This action adds a new remesa';
  }

  findAll() {
    return `This action returns all remesas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} remesa`;
  }

  update(id: number, updateRemesaDto: UpdateRemesaDto) {
    return `This action updates a #${id} remesa`;
  }

  remove(id: number) {
    return `This action removes a #${id} remesa`;
  }
}
