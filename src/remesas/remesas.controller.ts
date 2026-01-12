import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RemesasService } from './remesas.service';
import { CreateRemesaDto } from './dto/create-remesa.dto';
import { UpdateRemesaDto } from './dto/update-remesa.dto';

@Controller('remesas')
export class RemesasController {
  constructor(private readonly remesasService: RemesasService) {}

  @Post()
  create(@Body() createRemesaDto: CreateRemesaDto) {
    return this.remesasService.create(createRemesaDto);
  }

  @Get()
  findAll() {
    return this.remesasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.remesasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRemesaDto: UpdateRemesaDto) {
    return this.remesasService.update(+id, updateRemesaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.remesasService.remove(+id);
  }
}
