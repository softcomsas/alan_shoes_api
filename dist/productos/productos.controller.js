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
exports.ProductosController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const productos_service_1 = require("./productos.service");
const create_producto_dto_1 = require("./dto/create-producto.dto");
const update_producto_dto_1 = require("./dto/update-producto.dto");
let ProductosController = class ProductosController {
    productosService;
    constructor(productosService) {
        this.productosService = productosService;
    }
    async create(createProductoDto, file) {
        return await this.productosService.create(createProductoDto, file?.buffer);
    }
    async uploadImage(id, file) {
        return await this.productosService.uploadImage(Number(id), file.buffer);
    }
    async findAll() {
        return await this.productosService.findAll();
    }
    async findOne(id) {
        return await this.productosService.findOne(Number(id));
    }
    async update(id, updateProductoDto) {
        return await this.productosService.update(Number(id), updateProductoDto);
    }
    async remove(id) {
        return await this.productosService.remove(Number(id));
    }
    async findAllZapatos() {
        return this.productosService.findAllZapatos();
    }
    async findZapatosActivos() {
        return this.productosService.findZapatosActivos();
    }
    async findZapatosByColor(color) {
        return this.productosService.findZapatosByColor(color);
    }
    async findZapatosByTalla(numeroCalzado) {
        return this.productosService.findZapatosByTalla(numeroCalzado);
    }
    async findAllElectrodomesticos() {
        return this.productosService.findAllElectrodomesticos();
    }
    async findAllAlimentos() {
        return this.productosService.findAllAlimentos();
    }
    async findAllRopaParaMujer() {
        return this.productosService.findAllRopaParaMujer();
    }
    async findAllRopaParaHombre() {
        return this.productosService.findAllRopaParaHombre();
    }
    async findAllRopaParaKid() {
        return this.productosService.findAllRopaParaKid();
    }
    async findAllAssesorios() {
        return this.productosService.findAllAssesorios();
    }
    async findAllJuguetes() {
        return this.productosService.findAllJuguetes();
    }
    async findAllJoyeria() {
        return this.productosService.findAllJoyeria();
    }
    async findAllBelleza() {
        return this.productosService.findAllBelleza();
    }
    async findAllTelefonos() {
        return this.productosService.findAllTelefonos();
    }
    async findAllMaternidad() {
        return this.productosService.findAllMaternidad();
    }
    async findAllBebes() {
        return this.productosService.findAllBebes();
    }
    async findAllMuebles() {
        return this.productosService.findAllMuebles();
    }
    async findAllPerfumeria() {
        return this.productosService.findAllPerfumeria();
    }
    async findAllHogar() {
        return this.productosService.findAllHogar();
    }
    async findAllTrasporte() {
        return this.productosService.findAllTrasporte();
    }
    async findAllAseo() {
        return this.productosService.findAllAseo();
    }
    async findAllAlimentosYBebidas() {
        return this.productosService.findAllAlimentosYBebidas();
    }
};
exports.ProductosController = ProductosController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('img')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_producto_dto_1.CreateProductoDto, Object]),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "create", null);
__decorate([
    (0, common_1.Post)(':id/upload-image'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('img')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "uploadImage", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_producto_dto_1.UpdateProductoDto]),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('categoria/zapatos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "findAllZapatos", null);
__decorate([
    (0, common_1.Get)('categoria/zapatos/activos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "findZapatosActivos", null);
__decorate([
    (0, common_1.Get)('categoria/zapatos/color/:color'),
    __param(0, (0, common_1.Param)('color')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "findZapatosByColor", null);
__decorate([
    (0, common_1.Get)('categoria/zapatos/talla/:numeroCalzado'),
    __param(0, (0, common_1.Param)('numeroCalzado')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "findZapatosByTalla", null);
__decorate([
    (0, common_1.Get)('categoria/electrodomesticos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "findAllElectrodomesticos", null);
__decorate([
    (0, common_1.Get)('categoria/alimentos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "findAllAlimentos", null);
__decorate([
    (0, common_1.Get)('categoria/ropa-mujer'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "findAllRopaParaMujer", null);
__decorate([
    (0, common_1.Get)('categoria/ropa-hombre'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "findAllRopaParaHombre", null);
__decorate([
    (0, common_1.Get)('categoria/ropa-kid'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "findAllRopaParaKid", null);
__decorate([
    (0, common_1.Get)('categoria/accesorios'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "findAllAssesorios", null);
__decorate([
    (0, common_1.Get)('categoria/juguetes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "findAllJuguetes", null);
__decorate([
    (0, common_1.Get)('categoria/joyeria'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "findAllJoyeria", null);
__decorate([
    (0, common_1.Get)('categoria/belleza'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "findAllBelleza", null);
__decorate([
    (0, common_1.Get)('categoria/telefonos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "findAllTelefonos", null);
__decorate([
    (0, common_1.Get)('categoria/maternidad'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "findAllMaternidad", null);
__decorate([
    (0, common_1.Get)('categoria/bebes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "findAllBebes", null);
__decorate([
    (0, common_1.Get)('categoria/muebles'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "findAllMuebles", null);
__decorate([
    (0, common_1.Get)('categoria/perfumeria'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "findAllPerfumeria", null);
__decorate([
    (0, common_1.Get)('categoria/hogar'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "findAllHogar", null);
__decorate([
    (0, common_1.Get)('categoria/transporte'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "findAllTrasporte", null);
__decorate([
    (0, common_1.Get)('categoria/aseo'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "findAllAseo", null);
__decorate([
    (0, common_1.Get)('categoria/alimentos-bebidas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "findAllAlimentosYBebidas", null);
exports.ProductosController = ProductosController = __decorate([
    (0, common_1.Controller)('productos'),
    __metadata("design:paramtypes", [productos_service_1.ProductosService])
], ProductosController);
//# sourceMappingURL=productos.controller.js.map