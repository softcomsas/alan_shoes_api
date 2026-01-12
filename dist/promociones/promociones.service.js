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
exports.PromocionesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const promocione_entity_1 = require("./entities/promocione.entity");
let PromocionesService = class PromocionesService {
    promocioneRepository;
    constructor(promocioneRepository) {
        this.promocioneRepository = promocioneRepository;
    }
    async create(createPromocioneDto) {
        const promocion = this.promocioneRepository.create(createPromocioneDto);
        return await this.promocioneRepository.save(promocion);
    }
    async findAll() {
        return await this.promocioneRepository.find();
    }
    async findOne(id) {
        const promo = await this.promocioneRepository.findOneBy({ id });
        if (!promo)
            throw new common_1.NotFoundException('Promoción no encontrada');
        return promo;
    }
    async update(id, updatePromocioneDto) {
        const promo = await this.promocioneRepository.findOneBy({ id });
        if (!promo)
            throw new common_1.NotFoundException('Promoción no encontrada');
        Object.assign(promo, updatePromocioneDto);
        return await this.promocioneRepository.save(promo);
    }
    async remove(id) {
        const promo = await this.promocioneRepository.findOneBy({ id });
        if (!promo)
            throw new common_1.NotFoundException('Promoción no encontrada');
        return await this.promocioneRepository.softRemove(promo);
    }
};
exports.PromocionesService = PromocionesService;
exports.PromocionesService = PromocionesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(promocione_entity_1.Promocione)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PromocionesService);
//# sourceMappingURL=promociones.service.js.map