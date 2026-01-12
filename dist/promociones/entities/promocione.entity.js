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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promocione = void 0;
const typeorm_1 = require("typeorm");
const notificacion_entity_1 = require("../../notificacion/entities/notificacion.entity");
let Promocione = class Promocione {
    id;
    titulo;
    descripcion;
    fechaInicio;
    fechaFin;
    descuento;
    notificaciones;
    deleteAT;
};
exports.Promocione = Promocione;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Promocione.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Promocione.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Promocione.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Promocione.prototype, "fechaInicio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Promocione.prototype, "fechaFin", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float', nullable: true }),
    __metadata("design:type", Number)
], Promocione.prototype, "descuento", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => notificacion_entity_1.Notificacion, notificacion => notificacion.promocion),
    __metadata("design:type", Array)
], Promocione.prototype, "notificaciones", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Promocione.prototype, "deleteAT", void 0);
exports.Promocione = Promocione = __decorate([
    (0, typeorm_1.Entity)('promociones')
], Promocione);
//# sourceMappingURL=promocione.entity.js.map