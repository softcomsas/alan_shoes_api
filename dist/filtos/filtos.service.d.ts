import { Repository } from 'typeorm';
import { Producto } from '../productos/entities/producto.entity';
import { Usuario } from '../usuario/entities/usuario.entity';
export declare class FiltosService {
    private readonly productoRepository;
    private readonly usuarioRepository;
    constructor(productoRepository: Repository<Producto>, usuarioRepository: Repository<Usuario>);
    filtrarPorColor(color: string): Promise<Producto[]>;
    filtrarPorNumeroCalzado(numero: number): Promise<Producto[]>;
    filtrarPorFechaPublicacionDesde(fecha: string): Promise<Producto[]>;
    filtrarPorNombre(nombres: string[]): Promise<Producto[]>;
    filtrarPorPrecio(min: number, max: number): Promise<Producto[]>;
    filtrarPorGenero(genero: string): Promise<Producto[]>;
    filtrarUsuariosPorNombreOTelefono(valor: string): Promise<Usuario[]>;
}
