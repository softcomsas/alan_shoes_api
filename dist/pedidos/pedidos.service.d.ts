import { Repository } from 'typeorm';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Pedido } from './entities/pedido.entity';
import { Usuario } from '../usuario/entities/usuario.entity';
import { Producto } from '../productos/entities/producto.entity';
export declare class PedidosService {
    private readonly pedidoRepository;
    private readonly usuarioRepository;
    private readonly productoRepository;
    constructor(pedidoRepository: Repository<Pedido>, usuarioRepository: Repository<Usuario>, productoRepository: Repository<Producto>);
    create(createPedidoDto: CreatePedidoDto): Promise<Pedido>;
    findAll(): Promise<Pedido[]>;
    findOne(id: number): Promise<Pedido | null>;
    update(id: number, updatePedidoDto: UpdatePedidoDto): Promise<Pedido | null>;
    remove(id: number): Promise<{
        id: number;
    } & Pedido>;
}
