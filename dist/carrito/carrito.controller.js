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
exports.CarritoController = void 0;
const common_1 = require("@nestjs/common");
const carrito_service_1 = require("./carrito.service");
const create_carrito_dto_1 = require("./dto/create-carrito.dto");
const update_carrito_dto_1 = require("./dto/update-carrito.dto");
let CarritoController = class CarritoController {
    carritoService;
    constructor(carritoService) {
        this.carritoService = carritoService;
    }
    async create(createCarritoDto) {
        return await this.carritoService.create(createCarritoDto);
    }
    async findAll() {
        return await this.carritoService.findAll();
    }
    async findOne(id) {
        return await this.carritoService.findOne(Number(id));
    }
    async update(id, updateCarritoDto) {
        return await this.carritoService.update(Number(id), updateCarritoDto);
    }
    async getByUsuario(usuarioId) {
        return await this.carritoService.findByUsuarioId(usuarioId);
    }
    async remove(id) {
        return await this.carritoService.remove(Number(id));
    }
};
exports.CarritoController = CarritoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_carrito_dto_1.CreateCarritoDto]),
    __metadata("design:returntype", Promise)
], CarritoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarritoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarritoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_carrito_dto_1.UpdateCarritoDto]),
    __metadata("design:returntype", Promise)
], CarritoController.prototype, "update", null);
__decorate([
    (0, common_1.Get)('usuario/:usuarioId'),
    __param(0, (0, common_1.Param)('usuarioId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CarritoController.prototype, "getByUsuario", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarritoController.prototype, "remove", null);
exports.CarritoController = CarritoController = __decorate([
    (0, common_1.Controller)('carrito'),
    __metadata("design:paramtypes", [carrito_service_1.CarritoService])
], CarritoController);
//# sourceMappingURL=carrito.controller.js.map