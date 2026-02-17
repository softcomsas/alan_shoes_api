import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>
  ) {}

  async create(createProductoDto: CreateProductoDto, img?: Buffer): Promise<Producto> {
    const producto = this.productoRepository.create({
      ...createProductoDto,
      img: img ?? null,
    });
    return await this.productoRepository.save(producto);
  }

  async findAll(): Promise<Producto[]> {
    return await this.productoRepository.find({
      take: 30,
    });
  }

  async findOne(id: number): Promise<Producto | null> {
    return await this.productoRepository.findOneBy({ id });
  }

  async update(id: number, updateProductoDto: UpdateProductoDto): Promise<Producto | null> {
    await this.productoRepository.update(id, updateProductoDto);
    return await this.productoRepository.findOneBy({ id });
  }

  async remove(id: number) {
    return await this.productoRepository.softRemove({ id });
  }

  async uploadImage(id: number, imageBuffer: Buffer): Promise<Producto> {
    
    const producto = await this.productoRepository.findOneBy({ id });
    if (!producto) {
      throw new NotFoundException(`Producto con id ${id} no encontrado`);
    }
    producto.img = imageBuffer;
    return await this.productoRepository.save(producto);
  }

  // -------------------------------
  // 🔥 NUEVAS FUNCIONES PARA ZAPATOS
  // -------------------------------

  // 1. Traer todos los productos de categoría "Zapatos"
  async findAllZapatos(): Promise<Producto[]> {
    return await this.productoRepository.find({
      where: { categoria: 'Zapatos' },
    });
  }

  // 2. Traer solo los zapatos activos
  async findZapatosActivos(): Promise<Producto[]> {
    return await this.productoRepository.find({
      where: { categoria: 'Zapatos', activo: true },
    });
  }

  // 3. Buscar zapatos por color
  async findZapatosByColor(color: string): Promise<Producto[]> {
    return await this.productoRepository.find({
      where: { categoria: 'Zapatos', color },
    });
  }

  // 4. Buscar zapatos por talla (numeroCalzado)
  async findZapatosByTalla(numeroCalzado: string): Promise<Producto[]> {
    return await this.productoRepository.find({
      where: { categoria: 'Zapatos', numeroCalzado },
    });
  }

  // -------------------------------
  // 🔥 NUEVA FUNCIÓN PARA ELECTRODOMÉSTICOS
  // -------------------------------

  async findAllElectrodomesticos(): Promise<Producto[]> {
    return await this.productoRepository.find({
      where: { categoria: 'electrodomesticos' },
    });
  }

  // -------------------------------
  // 🔥 NUEVA FUNCIÓN PARA ALIMENTOS
  // -------------------------------

  async findAllAlimentos(): Promise<Producto[]> {
    return await this.productoRepository.find({
      where: { categoria: 'alimentos' },
    });
  }

  // -------------------------------
  // 🔥 NUEVA FUNCIÓN PARA Ropa de mujer
  // -------------------------------
  async findAllRopaParaMujer(): Promise<Producto[]> {
    return await this.productoRepository.find({
      where: { categoria: 'ropaParaMujer' },
    });
  }

  // -------------------------------
  // 🔥 NUEVA FUNCIÓN PARA Ropa de Hombre
  // -------------------------------
  async findAllRopaParaHombre(): Promise<Producto[]> {
    return await this.productoRepository.find({
      where: { categoria: 'ropaParaHombre' },
    });
  }

  // -------------------------------
  // 🔥 NUEVA FUNCIÓN PARA Ropa de kid
  // -------------------------------
  async findAllRopaParaKid(): Promise<Producto[]> {
    return await this.productoRepository.find({
      where: { categoria: 'ropaParaKid' },
    });
  }

  // -------------------------------
  // 🔥 NUEVA FUNCIÓN PARA Assesorios
  // -------------------------------
  async findAllAssesorios(): Promise<Producto[]> {
    return await this.productoRepository.find({
      where: { categoria: 'assesorios' },
    });
  }

  // -------------------------------
  // 🔥 NUEVA FUNCIÓN PARA Juguetes
  // -------------------------------
  async findAllJuguetes(): Promise<Producto[]> {
    return await this.productoRepository.find({
      where: { categoria: 'juguetes' },
    });
  }

  // -------------------------------
  // 🔥 NUEVA FUNCIÓN PARA Belleza
  // -------------------------------
  async findAllJoyeria(): Promise<Producto[]> {
    return await this.productoRepository.find({
      where: { categoria: 'joyeria' },
    });
  }
  async findAllBelleza(): Promise<Producto[]> {
    return await this.productoRepository.find({
      where: { categoria: 'belleza' },
    });
  }

  // -------------------------------
  // 🔥 NUEVA FUNCIÓN PARA Telefonos
  // -------------------------------
  async findAllTelefonos(): Promise<Producto[]> {
    return await this.productoRepository.find({
      where: { categoria: 'telefonos' },
    });
  }

  // -------------------------------
  // 🔥 NUEVA FUNCIÓN PARA Maternidad
  // -------------------------------
  async findAllMaternidad(): Promise<Producto[]> {
    return await this.productoRepository.find({
      where: { categoria: 'maternidad' },
    });
  }

  // -------------------------------
  // 🔥 NUEVA FUNCIÓN PARA Bebes
  // -------------------------------
  async findAllBebes(): Promise<Producto[]> {
    return await this.productoRepository.find({
      where: { categoria: 'bebes' },
    });
  }

  // -------------------------------
  // 🔥 NUEVA FUNCIÓN PARA Muebles
  // -------------------------------
  async findAllMuebles(): Promise<Producto[]> {
    return await this.productoRepository.find({
      where: { categoria: 'muebles' },
    });
  }

  // -------------------------------
  // 🔥 NUEVA FUNCIÓN PARA Perfumeria
  // -------------------------------
  async findAllPerfumeria(): Promise<Producto[]> {
    return await this.productoRepository.find({
      where: { categoria: 'perfumeria' },
    });
  }

  // -------------------------------
  // 🔥 NUEVA FUNCIÓN PARA Hogar
  // -------------------------------
  async findAllHogar(): Promise<Producto[]> {
    return await this.productoRepository.find({
      where: { categoria: 'hogar' },
    });
  }

  // -------------------------------
  // 🔥 NUEVA FUNCIÓN PARA Trasporte
  // -------------------------------
  async findAllTrasporte(): Promise<Producto[]> {
    return await this.productoRepository.find({
      where: { categoria: 'trasporte' },
    });
  }

  // -------------------------------
  // 🔥 NUEVA FUNCIÓN PARA Aseo
  // -------------------------------
  async findAllAseo(): Promise<Producto[]> {
    return await this.productoRepository.find({
      where: { categoria: 'aseo' },
    });
  }

  // -------------------------------
  // 🔥 NUEVA FUNCIÓN PARA Alimentos y bebidas
  // -------------------------------
  async findAllAlimentosYBebidas(): Promise<Producto[]> {
    return await this.productoRepository.find({
      where: { categoria: 'alimentosYBebidas' },
    });
  }  

}
