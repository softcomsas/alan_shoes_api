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
exports.NotificacionController = void 0;
const common_1 = require("@nestjs/common");
const notificacion_service_1 = require("./notificacion.service");
const create_notificacion_dto_1 = require("./dto/create-notificacion.dto");
const update_notificacion_dto_1 = require("./dto/update-notificacion.dto");
let NotificacionController = class NotificacionController {
    notificacionService;
    constructor(notificacionService) {
        this.notificacionService = notificacionService;
    }
    async create(createNotificacionDto) {
        return await this.notificacionService.create(createNotificacionDto);
    }
    async notificarNuevaPublicacion(body) {
        return await this.notificacionService.notificarNuevaPublicacion(body.mensaje, body.productoId);
    }
    async notificarNuevaPromocion(body) {
        return await this.notificacionService.notificarNuevaPromocion(body.mensaje, body.promocionId);
    }
    async notificarAdminsNuevoPedido(dto) {
        return this.notificacionService.notificarAdminsNuevoPedido(dto.mensaje, dto.pedidoId);
    }
    async notificarAdminsNuevoChat(body) {
        return this.notificacionService.notificarAdminsNuevoChat(body.mensaje, body.conversationId);
    }
    async findAll() {
        return await this.notificacionService.findAll();
    }
    async findOne(id) {
        return await this.notificacionService.findOne(Number(id));
    }
    async update(id, updateNotificacionDto) {
        return await this.notificacionService.update(Number(id), updateNotificacionDto);
    }
    async remove(id) {
        return await this.notificacionService.remove(Number(id));
    }
};
exports.NotificacionController = NotificacionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_notificacion_dto_1.CreateNotificacionDto]),
    __metadata("design:returntype", Promise)
], NotificacionController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('publicacion'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificacionController.prototype, "notificarNuevaPublicacion", null);
__decorate([
    (0, common_1.Post)('promocion'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificacionController.prototype, "notificarNuevaPromocion", null);
__decorate([
    (0, common_1.Post)('pedido'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificacionController.prototype, "notificarAdminsNuevoPedido", null);
__decorate([
    (0, common_1.Post)('chat'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificacionController.prototype, "notificarAdminsNuevoChat", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotificacionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificacionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_notificacion_dto_1.UpdateNotificacionDto]),
    __metadata("design:returntype", Promise)
], NotificacionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificacionController.prototype, "remove", null);
exports.NotificacionController = NotificacionController = __decorate([
    (0, common_1.Controller)('notificacion'),
    __metadata("design:paramtypes", [notificacion_service_1.NotificacionService])
], NotificacionController);
//# sourceMappingURL=notificacion.controller.js.map