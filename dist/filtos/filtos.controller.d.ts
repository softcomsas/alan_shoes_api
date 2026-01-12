import { FiltosService } from './filtos.service';
export declare class FiltosController {
    private readonly filtosService;
    constructor(filtosService: FiltosService);
    filtrarPorColor(color: string): Promise<import("../productos/entities/producto.entity").Producto[]>;
    filtrarPorNumeroCalzado(numero: number): Promise<import("../productos/entities/producto.entity").Producto[]>;
    filtrarPorFechaPublicacionDesde(fecha: string): Promise<import("../productos/entities/producto.entity").Producto[]>;
    filtrarPorNombre(nombres: string): Promise<import("../productos/entities/producto.entity").Producto[]>;
    filtrarPorPrecio(min: number, max: number): Promise<import("../productos/entities/producto.entity").Producto[]>;
    filtrarPorGenero(genero: string): Promise<import("../productos/entities/producto.entity").Producto[]>;
    filtrarUsuariosPorNombreOTelefono(valor: string): Promise<import("../usuario/entities/usuario.entity").Usuario[]>;
}
