import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike, Between, MoreThanOrEqual, LessThanOrEqual } from 'typeorm';
import { Producto } from '../productos/entities/producto.entity';
import { Usuario } from '../usuario/entities/usuario.entity';

@Injectable()
export class FiltosService {

  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
    
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}
  
  //Filtos de Productos
  /////////////////////////////////////////////////////////////////////////////////////////////

  // Filtro por color
  async filtrarPorColor(color: string): Promise<Producto[]> {
    return await this.productoRepository.find({
      where: { color: ILike(`%${color}%`) },
    });
  }

  // Filtro por número de calzado
  async filtrarPorNumeroCalzado(numero: number): Promise<Producto[]> {
    return await this.productoRepository.find({
      where: { numeroCalzado: ILike(`%${numero}%`) },
    });
  }

  async filtrarPorFechaPublicacionDesde(fecha: string): Promise<Producto[]> {
    const fechaDate = new Date(fecha);
    return await this.productoRepository.find({
      where: { fechaPublicacion: MoreThanOrEqual(fechaDate) },
    });
  }

  async filtrarPorNombre(nombres: string[]): Promise<Producto[]> {
    if (!nombres || nombres.length === 0) return [];
    const where = nombres.map(nombre => ({ nombre: ILike(`%${nombre}%`) }));
    return await this.productoRepository.find({ where });
  }



  async filtrarPorPrecio(min: number, max: number): Promise<Producto[]> {
    let where: any = {};
    if (min !== undefined && max !== undefined) {
      where.precio = Between(min, max);
    } else if (min !== undefined) {
      where.precio = MoreThanOrEqual(min);
    } else if (max !== undefined) {
      where.precio = LessThanOrEqual(max);
    }
    return await this.productoRepository.find({ where });
  }

  async filtrarPorGenero(genero: string): Promise<Producto[]> {
    return await this.productoRepository.find({
      where: { genero: genero.toLowerCase() },
    });
  }
  //////////////////////////////////////////////////////////////////////////////////////////////

  //Filtro para Usuario
  //////////////////////////////////////////////////////////////////////////////////////////////
  async filtrarUsuariosPorNombreOTelefono(valor: string): Promise<Usuario[]> {
    return await this.usuarioRepository.find({
      where: [
        { nombre: ILike(`%${valor}%`) },
        { telefono: ILike(`%${valor}%`) }
      ]
    });
  }
//////////////////////////////////////////////////////////////////////////////////////////////




}
