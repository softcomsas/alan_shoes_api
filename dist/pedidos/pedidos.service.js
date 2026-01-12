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
exports.PedidosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pedido_entity_1 = require("./entities/pedido.entity");
const usuario_entity_1 = require("../usuario/entities/usuario.entity");
const producto_entity_1 = require("../productos/entities/producto.entity");
let PedidosService = class PedidosService {
    pedidoRepository;
    usuarioRepository;
    productoRepository;
    constructor(pedidoRepository, usuarioRepository, productoRepository) {
        this.pedidoRepository = pedidoRepository;
        this.usuarioRepository = usuarioRepository;
        this.productoRepository = productoRepository;
    }
    async create(createPedidoDto) {
        const usuario = await this.usuarioRepository.findOneBy({ id: createPedidoDto.usuario });
        const producto = await this.productoRepository.findOneBy({ id: createPedidoDto.producto });
        if (!usuario || !producto) {
            throw new common_1.BadRequestException('Usuario o producto no encontrado');
        }
        const pedido = this.pedidoRepository.create({
            cantidad: createPedidoDto.cantidad,
            usuario,
            producto,
        });
        return await this.pedidoRepository.save(pedido);
    }
    async findAll() {
        return await this.pedidoRepository.find();
    }
    async findOne(id) {
        return await this.pedidoRepository.findOneBy({ id });
    }
    async update(id, updatePedidoDto) {
        await this.pedidoRepository.update(id, updatePedidoDto);
        return await this.pedidoRepository.findOneBy({ id });
    }
    async remove(id) {
        return await this.pedidoRepository.softRemove({ id });
    }
};
exports.PedidosService = PedidosService;
exports.PedidosService = PedidosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pedido_entity_1.Pedido)),
    __param(1, (0, typeorm_1.InjectRepository)(usuario_entity_1.Usuario)),
    __param(2, (0, typeorm_1.InjectRepository)(producto_entity_1.Producto)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], PedidosService);
//# sourceMappingURL=pedidos.service.js.map