import { CarritoService } from './carrito.service';
import { CreateCarritoDto } from './dto/create-carrito.dto';
import { UpdateCarritoDto } from './dto/update-carrito.dto';
export declare class CarritoController {
    private readonly carritoService;
    constructor(carritoService: CarritoService);
    create(createCarritoDto: CreateCarritoDto): Promise<import("./entities/carrito.entity").Carrito>;
    findAll(): Promise<import("./entities/carrito.entity").Carrito[]>;
    findOne(id: string): Promise<import("./entities/carrito.entity").Carrito | null>;
    update(id: string, updateCarritoDto: UpdateCarritoDto): Promise<import("./entities/carrito.entity").Carrito | null>;
    getByUsuario(usuarioId: number): Promise<import("./entities/carrito.entity").Carrito[]>;
    remove(id: string): Promise<{
        id: number;
    } & import("./entities/carrito.entity").Carrito>;
}
