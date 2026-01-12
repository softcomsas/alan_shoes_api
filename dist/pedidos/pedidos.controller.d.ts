import { PedidosService } from './pedidos.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
export declare class PedidosController {
    private readonly pedidosService;
    constructor(pedidosService: PedidosService);
    create(createPedidoDto: CreatePedidoDto): Promise<import("./entities/pedido.entity").Pedido>;
    findAll(): Promise<import("./entities/pedido.entity").Pedido[]>;
    findOne(id: string): Promise<import("./entities/pedido.entity").Pedido | null>;
    update(id: string, updatePedidoDto: UpdatePedidoDto): Promise<import("./entities/pedido.entity").Pedido | null>;
    remove(id: string): Promise<{
        id: number;
    } & import("./entities/pedido.entity").Pedido>;
}
