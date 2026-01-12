"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiltosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const producto_entity_1 = require("../productos/entities/producto.entity");
const usuario_entity_1 = require("../usuario/entities/usuario.entity");
let FiltosService = class FiltosService {
    productoRepository;
    usuarioRepository;
    constructor(productoRepository, usuarioRepository) {
        this.productoRepository = productoRepository;
        this.usuarioRepository = usuarioRepository;
    }
    async filtrarPorColor(color) {
        return await this.productoRepository.find({
            where: { color: (0, typeorm_2.ILike)(`%${color}%`) },
        });
    }
    async filtrarPorNumeroCalzado(numero) {
        return await this.productoRepository.find({
            where: { numeroCalzado: (0, typeorm_2.ILike)(`%${numero}%`) },
        });
    }
    async filtrarPorFechaPublicacionDesde(fecha) {
        const fechaDate = new Date(fecha);
        return await this.productoRepository.find({
            where: { fechaPublicacion: (0, typeorm_2.MoreThanOrEqual)(fechaDate) },
        });
    }
    async filtrarPorNombre(nombres) {
        if (!nombres || nombres.length === 0)
            return [];
        const where = nombres.map(nombre => ({ nombre: (0, typeorm_2.ILike)(`%${nombre}%`) }));
        return await this.productoRepository.find({ where });
    }
    async filtrarPorPrecio(min, max) {
        let where = {};
        if (min !== undefined && max !== undefined) {
            where.precio = (0, typeorm_2.Between)(min, max);
        }
        else if (min !== undefined) {
            where.precio = (0, typeorm_2.MoreThanOrEqual)(min);
        }
        else if (max !== undefined) {
            where.precio = (0, typeorm_2.LessThanOrEqual)(max);
        }
        return await this.productoRepository.find({ where });
    }
    async filtrarPorGenero(genero) {
        return await this.productoRepository.find({
            where: { genero: genero.toLowerCase() },
        });
    }
    async filtrarUsuariosPorNombreOTelefono(valor) {
        return await this.usuarioRepository.find({
            where: [
                { nombre: (0, typeorm_2.ILike)(`%${valor}%`) },
                { telefono: (0, typeorm_2.ILike)(`%${valor}%`) }
            ]
        });
    }
};
exports.FiltosService = FiltosService;
exports.FiltosService = FiltosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(producto_entity_1.Producto)),
    __param(1, (0, typeorm_1.InjectRepository)(usuario_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], FiltosService);
//# sourceMappingURL=filtos.service.js.map