import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';
export declare class ProductosController {
    private readonly productosService;
    constructor(productosService: ProductosService);
    create(createProductoDto: CreateProductoDto, file?: Express.Multer.File): Promise<Producto>;
    uploadImage(id: string, file: Express.Multer.File): Promise<Producto>;
    findAll(): Promise<Producto[]>;
    findOne(id: string): Promise<Producto | null>;
    update(id: string, updateProductoDto: UpdateProductoDto): Promise<Producto | null>;
    remove(id: string): Promise<{
        id: number;
    } & Producto>;
    findAllZapatos(): Promise<Producto[]>;
    findZapatosActivos(): Promise<Producto[]>;
    findZapatosByColor(color: string): Promise<Producto[]>;
    findZapatosByTalla(numeroCalzado: string): Promise<Producto[]>;
    findAllElectrodomesticos(): Promise<Producto[]>;
    findAllAlimentos(): Promise<Producto[]>;
    findAllRopaParaMujer(): Promise<Producto[]>;
    findAllRopaParaHombre(): Promise<Producto[]>;
    findAllRopaParaKid(): Promise<Producto[]>;
    findAllAssesorios(): Promise<Producto[]>;
    findAllJuguetes(): Promise<Producto[]>;
    findAllJoyeria(): Promise<Producto[]>;
    findAllBelleza(): Promise<Producto[]>;
    findAllTelefonos(): Promise<Producto[]>;
    findAllMaternidad(): Promise<Producto[]>;
    findAllBebes(): Promise<Producto[]>;
    findAllMuebles(): Promise<Producto[]>;
    findAllPerfumeria(): Promise<Producto[]>;
    findAllHogar(): Promise<Producto[]>;
    findAllTrasporte(): Promise<Producto[]>;
    findAllAseo(): Promise<Producto[]>;
    findAllAlimentosYBebidas(): Promise<Producto[]>;
}
