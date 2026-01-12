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
exports.FiltosController = void 0;
const common_1 = require("@nestjs/common");
const filtos_service_1 = require("./filtos.service");
let FiltosController = class FiltosController {
    filtosService;
    constructor(filtosService) {
        this.filtosService = filtosService;
    }
    async filtrarPorColor(color) {
        return await this.filtosService.filtrarPorColor(color);
    }
    async filtrarPorNumeroCalzado(numero) {
        return await this.filtosService.filtrarPorNumeroCalzado(numero);
    }
    async filtrarPorFechaPublicacionDesde(fecha) {
        return await this.filtosService.filtrarPorFechaPublicacionDesde(fecha);
    }
    async filtrarPorNombre(nombres) {
        const nombresArr = nombres ? nombres.split(',').map(n => n.trim()) : [];
        return await this.filtosService.filtrarPorNombre(nombresArr);
    }
    async filtrarPorPrecio(min, max) {
        return await this.filtosService.filtrarPorPrecio(min, max);
    }
    async filtrarPorGenero(genero) {
        return await this.filtosService.filtrarPorGenero(genero);
    }
    async filtrarUsuariosPorNombreOTelefono(valor) {
        return await this.filtosService.filtrarUsuariosPorNombreOTelefono(valor);
    }
};
exports.FiltosController = FiltosController;
__decorate([
    (0, common_1.Get)('color'),
    __param(0, (0, common_1.Query)('color')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FiltosController.prototype, "filtrarPorColor", null);
__decorate([
    (0, common_1.Get)('numero-calzado'),
    __param(0, (0, common_1.Query)('numero')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FiltosController.prototype, "filtrarPorNumeroCalzado", null);
__decorate([
    (0, common_1.Get)('fecha-publicacion'),
    __param(0, (0, common_1.Query)('fecha')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FiltosController.prototype, "filtrarPorFechaPublicacionDesde", null);
__decorate([
    (0, common_1.Get)('nombre'),
    __param(0, (0, common_1.Query)('nombres')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FiltosController.prototype, "filtrarPorNombre", null);
__decorate([
    (0, common_1.Get)('precio'),
    __param(0, (0, common_1.Query)('min')),
    __param(1, (0, common_1.Query)('max')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], FiltosController.prototype, "filtrarPorPrecio", null);
__decorate([
    (0, common_1.Get)('genero'),
    __param(0, (0, common_1.Query)('genero')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FiltosController.prototype, "filtrarPorGenero", null);
__decorate([
    (0, common_1.Get)('usuario'),
    __param(0, (0, common_1.Query)('valor')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FiltosController.prototype, "filtrarUsuariosPorNombreOTelefono", null);
exports.FiltosController = FiltosController = __decorate([
    (0, common_1.Controller)('filtos'),
    __metadata("design:paramtypes", [filtos_service_1.FiltosService])
], FiltosController);
//# sourceMappingURL=filtos.controller.js.map