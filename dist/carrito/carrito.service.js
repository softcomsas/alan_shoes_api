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
exports.CarritoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const carrito_entity_1 = require("./entities/carrito.entity");
const usuario_entity_1 = require("../usuario/entities/usuario.entity");
const producto_entity_1 = require("../productos/entities/producto.entity");
let CarritoService = class CarritoService {
    carritoRepository;
    usuarioRepository;
    productoRepository;
    constructor(carritoRepository, usuarioRepository, productoRepository) {
        this.carritoRepository = carritoRepository;
        this.usuarioRepository = usuarioRepository;
        this.productoRepository = productoRepository;
    }
    async create(createCarritoDto) {
        const usuario = await this.usuarioRepository.findOneBy({ id: createCarritoDto.usuarioId });
        const producto = await this.productoRepository.findOneBy({ id: createCarritoDto.productoId });
        if (!usuario || !producto) {
            throw new common_1.BadRequestException('Usuario o producto no encontrado');
        }
        const carrito = this.carritoRepository.create({
            cantidad: createCarritoDto.cantidad,
            usuario,
            producto,
        });
        return await this.carritoRepository.save(carrito);
    }
    async findAll() {
        return await this.carritoRepository.find();
    }
    async findOne(id) {
        return await this.carritoRepository.findOneBy({ id });
    }
    async update(id, updateCarritoDto) {
        await this.carritoRepository.update(id, updateCarritoDto);
        return await this.carritoRepository.findOneBy({ id });
    }
    async findByUsuarioId(usuarioId) {
        const usuario = await this.usuarioRepository.findOneBy({ id: usuarioId });
        if (!usuario) {
            throw new common_1.BadRequestException('Usuario no encontrado');
        }
        return await this.carritoRepository.find({
            where: { usuario: { id: usuarioId } },
            relations: ['producto', 'usuario'],
            order: { id: 'DESC' },
        });
    }
    async remove(id) {
        return await this.carritoRepository.softRemove({ id });
    }
};
exports.CarritoService = CarritoService;
exports.CarritoService = CarritoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(carrito_entity_1.Carrito)),
    __param(1, (0, typeorm_1.InjectRepository)(usuario_entity_1.Usuario)),
    __param(2, (0, typeorm_1.InjectRepository)(producto_entity_1.Producto)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], CarritoService);
//# sourceMappingURL=carrito.service.js.map