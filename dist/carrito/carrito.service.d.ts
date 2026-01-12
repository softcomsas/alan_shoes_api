import { Repository } from 'typeorm';
import { CreateCarritoDto } from './dto/create-carrito.dto';
import { UpdateCarritoDto } from './dto/update-carrito.dto';
import { Carrito } from './entities/carrito.entity';
import { Usuario } from '../usuario/entities/usuario.entity';
import { Producto } from '../productos/entities/producto.entity';
export declare class CarritoService {
    private readonly carritoRepository;
    private readonly usuarioRepository;
    private readonly productoRepository;
    constructor(carritoRepository: Repository<Carrito>, usuarioRepository: Repository<Usuario>, productoRepository: Repository<Producto>);
    create(createCarritoDto: CreateCarritoDto): Promise<Carrito>;
    findAll(): Promise<Carrito[]>;
    findOne(id: number): Promise<Carrito | null>;
    update(id: number, updateCarritoDto: UpdateCarritoDto): Promise<Carrito | null>;
    findByUsuarioId(usuarioId: number): Promise<Carrito[]>;
    remove(id: number): Promise<{
        id: number;
    } & Carrito>;
}
