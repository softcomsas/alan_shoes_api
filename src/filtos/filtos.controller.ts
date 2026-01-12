import { Controller, Get, Query } from '@nestjs/common';
import { FiltosService } from './filtos.service';
import { CreateFiltoDto } from './dto/create-filto.dto';
import { UpdateFiltoDto } from './dto/update-filto.dto';

@Controller('filtos')
export class FiltosController {
  constructor(private readonly filtosService: FiltosService) {}

  @Get('color')
  async filtrarPorColor(@Query('color') color: string) {
    return await this.filtosService.filtrarPorColor(color);
  }

  @Get('numero-calzado')
  async filtrarPorNumeroCalzado(@Query('numero') numero: number) {
    return await this.filtosService.filtrarPorNumeroCalzado(numero);
  }

  @Get('fecha-publicacion')
  async filtrarPorFechaPublicacionDesde(@Query('fecha') fecha: string) {
    return await this.filtosService.filtrarPorFechaPublicacionDesde(fecha);
  }

  @Get('nombre')
  async filtrarPorNombre(@Query('nombres') nombres: string) {
    const nombresArr = nombres ? nombres.split(',').map(n => n.trim()) : [];
    return await this.filtosService.filtrarPorNombre(nombresArr);
  }

  @Get('precio')
  async filtrarPorPrecio(@Query('min') min: number, @Query('max') max: number) {
    return await this.filtosService.filtrarPorPrecio(min, max);
  }

  @Get('genero')
  async filtrarPorGenero(@Query('genero') genero: string) {
    return await this.filtosService.filtrarPorGenero(genero);
  }

  @Get('usuario')
  async filtrarUsuariosPorNombreOTelefono(@Query('valor') valor: string) {
    return await this.filtosService.filtrarUsuariosPorNombreOTelefono(valor);
  }
}
