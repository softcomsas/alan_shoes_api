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
exports.Notificacion = void 0;
const typeorm_1 = require("typeorm");
const usuario_entity_1 = require("../../usuario/entities/usuario.entity");
const pedido_entity_1 = require("../../pedidos/entities/pedido.entity");
const producto_entity_1 = require("../../productos/entities/producto.entity");
const promocione_entity_1 = require("../../promociones/entities/promocione.entity");
let Notificacion = class Notificacion {
    id;
    mensaje;
    fecha;
    usuario;
    pedido;
    producto;
    promocion;
    endpoint;
    expirationTime;
    p256dh;
    auth;
};
exports.Notificacion = Notificacion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Notificacion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'Nueva Notificación' }),
    __metadata("design:type", String)
], Notificacion.prototype, "mensaje", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Notificacion.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, { eager: true, nullable: true }),
    __metadata("design:type", Object)
], Notificacion.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pedido_entity_1.Pedido, { eager: true, nullable: true }),
    __metadata("design:type", Object)
], Notificacion.prototype, "pedido", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => producto_entity_1.Producto, { eager: true, nullable: true }),
    __metadata("design:type", Object)
], Notificacion.prototype, "producto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => promocione_entity_1.Promocione, { eager: true, nullable: true }),
    __metadata("design:type", Object)
], Notificacion.prototype, "promocion", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Notificacion.prototype, "endpoint", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], Notificacion.prototype, "expirationTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Notificacion.prototype, "p256dh", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Notificacion.prototype, "auth", void 0);
exports.Notificacion = Notificacion = __decorate([
    (0, typeorm_1.Entity)('notificaciones')
], Notificacion);
//# sourceMappingURL=notificacion.entity.js.map