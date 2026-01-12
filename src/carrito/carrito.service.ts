import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarritoDto } from './dto/create-carrito.dto';
import { UpdateCarritoDto } from './dto/update-carrito.dto';
import { Carrito } from './entities/carrito.entity';
import { Usuario } from '../usuario/entities/usuario.entity';
import { Producto } from '../productos/entities/producto.entity';

@Injectable()
export class CarritoService {
  constructor(
    @InjectRepository(Carrito)
    private readonly carritoRepository: Repository<Carrito>,

    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,

    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
  ) {}

  async create(createCarritoDto: CreateCarritoDto): Promise<Carrito> {
    const usuario = await this.usuarioRepository.findOneBy({ id: createCarritoDto.usuarioId });
    const producto = await this.productoRepository.findOneBy({ id: createCarritoDto.productoId });

    if (!usuario || !producto) {
      throw new BadRequestException('Usuario o producto no encontrado');
    }

    const carrito = this.carritoRepository.create({
      cantidad: createCarritoDto.cantidad,
      usuario,
      producto,
    });
    return await this.carritoRepository.save(carrito);
  }


  async findAll(): Promise<Carrito[]> {
    return await this.carritoRepository.find();
  }


  async findOne(id: number): Promise<Carrito | null> {
    return await this.carritoRepository.findOneBy({ id });
  }


  async update(id: number, updateCarritoDto: UpdateCarritoDto): Promise<Carrito | null> {
    await this.carritoRepository.update(id, updateCarritoDto);
    return await this.carritoRepository.findOneBy({ id });
  }

  async findByUsuarioId(usuarioId: number): Promise<Carrito[]> {
  // Validar que el usuario exista (opcional pero recomendado)
  const usuario = await this.usuarioRepository.findOneBy({ id: usuarioId });
  if (!usuario) {
    throw new BadRequestException('Usuario no encontrado');
  }

  // Traer los items del carrito del usuario con relaciones
  return await this.carritoRepository.find({
    where: { usuario: { id: usuarioId } },
    relations: ['producto', 'usuario'], // quita 'usuario' si no lo necesitas en la respuesta
    order: { id: 'DESC' },
  });
}


  async remove(id: number) {
    return await this.carritoRepository.softRemove({ id });
  }
}
