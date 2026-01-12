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
exports.ProductosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const producto_entity_1 = require("./entities/producto.entity");
let ProductosService = class ProductosService {
    productoRepository;
    constructor(productoRepository) {
        this.productoRepository = productoRepository;
    }
    async create(createProductoDto, img) {
        const producto = this.productoRepository.create({
            ...createProductoDto,
            img: img ?? null,
        });
        return await this.productoRepository.save(producto);
    }
    async findAll() {
        return await this.productoRepository.find();
    }
    async findOne(id) {
        return await this.productoRepository.findOneBy({ id });
    }
    async update(id, updateProductoDto) {
        await this.productoRepository.update(id, updateProductoDto);
        return await this.productoRepository.findOneBy({ id });
    }
    async remove(id) {
        return await this.productoRepository.softRemove({ id });
    }
    async uploadImage(id, imageBuffer) {
        const producto = await this.productoRepository.findOneBy({ id });
        if (!producto) {
            throw new common_1.NotFoundException(`Producto con id ${id} no encontrado`);
        }
        producto.img = imageBuffer;
        return await this.productoRepository.save(producto);
    }
    async findAllZapatos() {
        return await this.productoRepository.find({
            where: { categoria: 'Zapatos' },
        });
    }
    async findZapatosActivos() {
        return await this.productoRepository.find({
            where: { categoria: 'Zapatos', activo: true },
        });
    }
    async findZapatosByColor(color) {
        return await this.productoRepository.find({
            where: { categoria: 'Zapatos', color },
        });
    }
    async findZapatosByTalla(numeroCalzado) {
        return await this.productoRepository.find({
            where: { categoria: 'Zapatos', numeroCalzado },
        });
    }
    async findAllElectrodomesticos() {
        return await this.productoRepository.find({
            where: { categoria: 'electrodomesticos' },
        });
    }
    async findAllAlimentos() {
        return await this.productoRepository.find({
            where: { categoria: 'alimentos' },
        });
    }
    async findAllRopaParaMujer() {
        return await this.productoRepository.find({
            where: { categoria: 'ropaParaMujer' },
        });
    }
    async findAllRopaParaHombre() {
        return await this.productoRepository.find({
            where: { categoria: 'ropaParaHombre' },
        });
    }
    async findAllRopaParaKid() {
        return await this.productoRepository.find({
            where: { categoria: 'ropaParaKid' },
        });
    }
    async findAllAssesorios() {
        return await this.productoRepository.find({
            where: { categoria: 'assesorios' },
        });
    }
    async findAllJuguetes() {
        return await this.productoRepository.find({
            where: { categoria: 'juguetes' },
        });
    }
    async findAllJoyeria() {
        return await this.productoRepository.find({
            where: { categoria: 'joyeria' },
        });
    }
    async findAllBelleza() {
        return await this.productoRepository.find({
            where: { categoria: 'belleza' },
        });
    }
    async findAllTelefonos() {
        return await this.productoRepository.find({
            where: { categoria: 'telefonos' },
        });
    }
    async findAllMaternidad() {
        return await this.productoRepository.find({
            where: { categoria: 'maternidad' },
        });
    }
    async findAllBebes() {
        return await this.productoRepository.find({
            where: { categoria: 'bebes' },
        });
    }
    async findAllMuebles() {
        return await this.productoRepository.find({
            where: { categoria: 'muebles' },
        });
    }
    async findAllPerfumeria() {
        return await this.productoRepository.find({
            where: { categoria: 'perfumeria' },
        });
    }
    async findAllHogar() {
        return await this.productoRepository.find({
            where: { categoria: 'hogar' },
        });
    }
    async findAllTrasporte() {
        return await this.productoRepository.find({
            where: { categoria: 'trasporte' },
        });
    }
    async findAllAseo() {
        return await this.productoRepository.find({
            where: { categoria: 'aseo' },
        });
    }
    async findAllAlimentosYBebidas() {
        return await this.productoRepository.find({
            where: { categoria: 'alimentosYBebidas' },
        });
    }
};
exports.ProductosService = ProductosService;
exports.ProductosService = ProductosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(producto_entity_1.Producto)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductosService);
//# sourceMappingURL=productos.service.js.map