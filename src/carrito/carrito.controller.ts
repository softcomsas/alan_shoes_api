import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CarritoService } from './carrito.service';
import { CreateCarritoDto } from './dto/create-carrito.dto';
import { UpdateCarritoDto } from './dto/update-carrito.dto';

@Controller('carrito')
export class CarritoController {
  constructor(private readonly carritoService: CarritoService) {}

  @Post()
  async create(@Body() createCarritoDto: CreateCarritoDto) {
    return await this.carritoService.create(createCarritoDto);
  }

  @Get()
  async findAll() {
    return await this.carritoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.carritoService.findOne(Number(id));
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCarritoDto: UpdateCarritoDto) {
    return await this.carritoService.update(Number(id), updateCarritoDto);
  }

  @Get('usuario/:usuarioId')
  async getByUsuario(
    @Param('usuarioId', ParseIntPipe) usuarioId: number
  ) {
    return await this.carritoService.findByUsuarioId(usuarioId);
  }


  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.carritoService.remove(Number(id));
  }
}
