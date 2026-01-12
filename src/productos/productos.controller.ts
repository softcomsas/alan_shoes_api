import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}


  @Post()
  @UseInterceptors(FileInterceptor('img'))
  async create(
    @Body() createProductoDto: CreateProductoDto,
    @UploadedFile() file?: Express.Multer.File
  ) {
    return await this.productosService.create(createProductoDto, file?.buffer);
  }

  @Post(':id/upload-image')
  @UseInterceptors(FileInterceptor('img'))
  async uploadImage(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File
  ) {
    return await this.productosService.uploadImage(Number(id), file.buffer);
  }

  @Get()
  async findAll() {
    return await this.productosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.productosService.findOne(Number(id));
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProductoDto: UpdateProductoDto) {
    return await this.productosService.update(Number(id), updateProductoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.productosService.remove(Number(id));
  }

  // -------------------------------
  // 🔥 ENDPOINTS ESPECÍFICOS
  // -------------------------------

  // Todos los zapatos
  @Get('categoria/zapatos')
  async findAllZapatos(): Promise<Producto[]> {
    return this.productosService.findAllZapatos();
  }

  // Zapatos activos
  @Get('categoria/zapatos/activos')
  async findZapatosActivos(): Promise<Producto[]> {
    return this.productosService.findZapatosActivos();
  }

  // Zapatos por color
  @Get('categoria/zapatos/color/:color')
  async findZapatosByColor(@Param('color') color: string): Promise<Producto[]> {
    return this.productosService.findZapatosByColor(color);
  }

  // Zapatos por talla
  @Get('categoria/zapatos/talla/:numeroCalzado')
  async findZapatosByTalla(
    @Param('numeroCalzado') numeroCalzado: string,
  ): Promise<Producto[]> {
    return this.productosService.findZapatosByTalla(numeroCalzado);
  }

  // Todos los electrodomésticos
  @Get('categoria/electrodomesticos')
  async findAllElectrodomesticos(): Promise<Producto[]> {
    return this.productosService.findAllElectrodomesticos();
  }

  // Todos los alimentos
  @Get('categoria/alimentos')
  async findAllAlimentos(): Promise<Producto[]> {
    return this.productosService.findAllAlimentos();
  }

  // Ropa para mujer
  @Get('categoria/ropa-mujer')
  async findAllRopaParaMujer(): Promise<Producto[]> {
    return this.productosService.findAllRopaParaMujer();
  }

  // Ropa para hombre
  @Get('categoria/ropa-hombre')
  async findAllRopaParaHombre(): Promise<Producto[]> {
    return this.productosService.findAllRopaParaHombre();
  }

  // Ropa para niños
  @Get('categoria/ropa-kid')
  async findAllRopaParaKid(): Promise<Producto[]> {
    return this.productosService.findAllRopaParaKid();
  }

  // Accesorios
  @Get('categoria/accesorios')
  async findAllAssesorios(): Promise<Producto[]> {
    return this.productosService.findAllAssesorios();
  }

  // Juguetes
  @Get('categoria/juguetes')
  async findAllJuguetes(): Promise<Producto[]> {
    return this.productosService.findAllJuguetes();
  }

  // Joyería
  @Get('categoria/joyeria')
  async findAllJoyeria(): Promise<Producto[]> {
    return this.productosService.findAllJoyeria();
  }

  // Belleza
  @Get('categoria/belleza')
  async findAllBelleza(): Promise<Producto[]> {
    return this.productosService.findAllBelleza();
  }

  // Teléfonos
  @Get('categoria/telefonos')
  async findAllTelefonos(): Promise<Producto[]> {
    return this.productosService.findAllTelefonos();
  }

  // Maternidad
  @Get('categoria/maternidad')
  async findAllMaternidad(): Promise<Producto[]> {
    return this.productosService.findAllMaternidad();
  }

  // Bebés
  @Get('categoria/bebes')
  async findAllBebes(): Promise<Producto[]> {
    return this.productosService.findAllBebes();
  }

  // Muebles
  @Get('categoria/muebles')
  async findAllMuebles(): Promise<Producto[]> {
    return this.productosService.findAllMuebles();
  }

  // Perfumería
  @Get('categoria/perfumeria')
  async findAllPerfumeria(): Promise<Producto[]> {
    return this.productosService.findAllPerfumeria();
  }

  // Hogar
  @Get('categoria/hogar')
  async findAllHogar(): Promise<Producto[]> {
    return this.productosService.findAllHogar();
  }

  // Transporte
  @Get('categoria/transporte')
  async findAllTrasporte(): Promise<Producto[]> {
    return this.productosService.findAllTrasporte();
  }

  // Aseo
  @Get('categoria/aseo')
  async findAllAseo(): Promise<Producto[]> {
    return this.productosService.findAllAseo();
  }

  // Alimentos y bebidas
  @Get('categoria/alimentos-bebidas')
  async findAllAlimentosYBebidas(): Promise<Producto[]> {
    return this.productosService.findAllAlimentosYBebidas();
  }
}
