import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PromocionesService } from './promociones.service';
import { CreatePromocioneDto } from './dto/create-promocione.dto';
import { UpdatePromocioneDto } from './dto/update-promocione.dto';

@Controller('promociones')
export class PromocionesController {
  constructor(private readonly promocionesService: PromocionesService) {}


  @Post()
  async create(@Body() createPromocioneDto: CreatePromocioneDto) {
    return await this.promocionesService.create(createPromocioneDto);
  }


  @Get()
  async findAll() {
    return await this.promocionesService.findAll();
  }


  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.promocionesService.findOne(Number(id));
  }


  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePromocioneDto: UpdatePromocioneDto) {
    return await this.promocionesService.update(Number(id), updatePromocioneDto);
  }


  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.promocionesService.remove(Number(id));
  }
}
