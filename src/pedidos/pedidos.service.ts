
import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Pedido } from './entities/pedido.entity';
import { Usuario } from '../usuario/entities/usuario.entity';
import { Producto } from '../productos/entities/producto.entity';

@Injectable()
export class PedidosService {
  constructor(
    @InjectRepository(Pedido)
    private readonly pedidoRepository: Repository<Pedido>,
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
  ) {}

  async create(createPedidoDto: CreatePedidoDto): Promise<Pedido> {
    const usuario = await this.usuarioRepository.findOneBy({ id: createPedidoDto.usuario });
    const producto = await this.productoRepository.findOneBy({ id: createPedidoDto.producto });

    if (!usuario || !producto) {
      throw new BadRequestException('Usuario o producto no encontrado');
    }

    const pedido = this.pedidoRepository.create({
      cantidad: createPedidoDto.cantidad,
      usuario,
      producto,
    });
    return await this.pedidoRepository.save(pedido);
  }


  async findAll(): Promise<Pedido[]> {
    return await this.pedidoRepository.find();
  }


  async findOne(id: number): Promise<Pedido | null> {
    return await this.pedidoRepository.findOneBy({ id });
  }


  async update(id: number, updatePedidoDto: UpdatePedidoDto): Promise<Pedido | null> {
    await this.pedidoRepository.update(id, updatePedidoDto);
    return await this.pedidoRepository.findOneBy({ id });
  }


  async remove(id: number) {
    return await this.pedidoRepository.softRemove({ id });
  }
}
