import { Repository } from 'typeorm';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';
export declare class ProductosService {
    private readonly productoRepository;
    constructor(productoRepository: Repository<Producto>);
    create(createProductoDto: CreateProductoDto, img?: Buffer): Promise<Producto>;
    findAll(): Promise<Producto[]>;
    findOne(id: number): Promise<Producto | null>;
    update(id: number, updateProductoDto: UpdateProductoDto): Promise<Producto | null>;
    remove(id: number): Promise<{
        id: number;
    } & Producto>;
    uploadImage(id: number, imageBuffer: Buffer): Promise<Producto>;
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
