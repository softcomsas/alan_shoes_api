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
exports.NotificacionService = void 0;
const common_1 = require("@nestjs/common");
const push_notification_service_1 = require("./push-notification.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const notificacion_entity_1 = require("./entities/notificacion.entity");
const promocione_entity_1 = require("../promociones/entities/promocione.entity");
const usuario_entity_1 = require("../usuario/entities/usuario.entity");
const pedido_entity_1 = require("../pedidos/entities/pedido.entity");
const producto_entity_1 = require("../productos/entities/producto.entity");
const chat_entity_1 = require("../chat/entities/chat.entity");
let NotificacionService = class NotificacionService {
    notificacionRepository;
    usuarioRepository;
    pedidoRepository;
    productoRepository;
    promocioneRepository;
    chatRepository;
    pushNotificationService;
    constructor(notificacionRepository, usuarioRepository, pedidoRepository, productoRepository, promocioneRepository, chatRepository, pushNotificationService) {
        this.notificacionRepository = notificacionRepository;
        this.usuarioRepository = usuarioRepository;
        this.pedidoRepository = pedidoRepository;
        this.productoRepository = productoRepository;
        this.promocioneRepository = promocioneRepository;
        this.chatRepository = chatRepository;
        this.pushNotificationService = pushNotificationService;
    }
    async notificarNuevaPublicacion(mensaje, productoId) {
        const usuarios = await this.usuarioRepository.find();
        const producto = productoId
            ? await this.productoRepository.findOneBy({ id: productoId })
            : null;
        for (const usuario of usuarios) {
            const notificacion = new notificacion_entity_1.Notificacion();
            notificacion.mensaje = mensaje;
            notificacion.usuario = usuario;
            if (producto) {
                notificacion.producto = producto;
            }
            if (usuario.endpoint && usuario.p256dh && usuario.auth) {
                notificacion.endpoint = usuario.endpoint;
                notificacion.expirationTime = usuario.expirationTime;
                notificacion.p256dh = usuario.p256dh;
                notificacion.auth = usuario.auth;
            }
            const saved = await this.notificacionRepository.save(notificacion);
            if (saved.endpoint && saved.p256dh && saved.auth) {
                await this.pushNotificationService.sendPushNotification({
                    endpoint: saved.endpoint,
                    expirationTime: saved.expirationTime,
                    keys: {
                        p256dh: saved.p256dh,
                        auth: saved.auth,
                    },
                }, {
                    title: '¡Nuevo producto disponible!',
                    body: mensaje,
                    data: { productoId },
                });
            }
        }
        return { success: true, total: usuarios.length };
    }
    async notificarNuevaPromocion(mensaje, promocionId) {
        const usuarios = await this.usuarioRepository.find();
        const promocion = await this.promocioneRepository.findOneBy({ id: promocionId });
        for (const usuario of usuarios) {
            const notificacion = new notificacion_entity_1.Notificacion();
            notificacion.mensaje = mensaje;
            notificacion.usuario = usuario;
            notificacion.promocion = promocion;
            await this.notificacionRepository.save(notificacion);
            if (usuario.pushSubscription) {
                await this.pushNotificationService.sendPushNotification(usuario.pushSubscription, {
                    title: '¡Nueva promoción disponible!',
                    body: mensaje,
                    data: { promocionId },
                });
            }
        }
        return { success: true, total: usuarios.length };
    }
    async notificarAdminsNuevoPedido(mensaje, pedidoId) {
        const admins = await this.usuarioRepository.find({ where: { role: 'admin' } });
        const pedido = await this.pedidoRepository.findOneBy({ id: pedidoId });
        for (const admin of admins) {
            const notificacion = new notificacion_entity_1.Notificacion();
            notificacion.mensaje = mensaje.trim();
            notificacion.usuario = admin;
            notificacion.pedido = pedido;
            if (admin.endpoint && admin.p256dh && admin.auth) {
                notificacion.endpoint = admin.endpoint;
                notificacion.expirationTime = admin.expirationTime;
                notificacion.p256dh = admin.p256dh;
                notificacion.auth = admin.auth;
            }
            const saved = await this.notificacionRepository.save(notificacion);
            if (saved.endpoint && saved.p256dh && saved.auth) {
                await this.pushNotificationService.sendPushNotification({
                    endpoint: saved.endpoint,
                    expirationTime: saved.expirationTime,
                    keys: {
                        p256dh: saved.p256dh,
                        auth: saved.auth,
                    },
                }, {
                    title: '📦 Nuevo pedido recibido',
                    body: mensaje,
                    data: { pedidoId },
                });
            }
        }
        return { success: true, total: admins.length };
    }
    async notificarAdminsNuevoChat(mensaje, conversationId) {
        const admins = await this.usuarioRepository.find({ where: { role: 'admin' } });
        const conversation = await this.chatRepository.findOne({ where: { id: conversationId } });
        for (const admin of admins) {
            const notificacion = new notificacion_entity_1.Notificacion();
            notificacion.mensaje = mensaje;
            notificacion.usuario = admin;
            notificacion.conversation = conversation;
            await this.notificacionRepository.save(notificacion);
            if (admin.pushSubscription) {
                await this.pushNotificationService.sendPushNotification(admin.pushSubscription, {
                    title: '💬 Nuevo chat iniciado',
                    body: mensaje,
                    data: { conversationId },
                });
            }
        }
        return { success: true, total: admins.length };
    }
    async create(createNotificacionDto) {
        const notificacion = new notificacion_entity_1.Notificacion();
        notificacion.mensaje = createNotificacionDto.mensaje;
        if (createNotificacionDto.usuarioId) {
            notificacion.usuario = await this.usuarioRepository.findOneBy({ id: createNotificacionDto.usuarioId });
        }
        if (createNotificacionDto.pedidoId) {
            notificacion.pedido = await this.pedidoRepository.findOneBy({ id: createNotificacionDto.pedidoId });
        }
        if (createNotificacionDto.productoId) {
            notificacion.producto = await this.productoRepository.findOneBy({ id: createNotificacionDto.productoId });
        }
        if (createNotificacionDto.endpoint) {
            notificacion.endpoint = createNotificacionDto.endpoint;
        }
        if (createNotificacionDto.expirationTime) {
            notificacion.expirationTime = createNotificacionDto.expirationTime;
        }
        if (createNotificacionDto.keys) {
            notificacion.p256dh = createNotificacionDto.keys.p256dh;
            notificacion.auth = createNotificacionDto.keys.auth;
        }
        const saved = await this.notificacionRepository.save(notificacion);
        if (saved.endpoint && saved.p256dh && saved.auth) {
            await this.pushNotificationService.sendPushNotification({
                endpoint: saved.endpoint,
                expirationTime: saved.expirationTime,
                keys: {
                    p256dh: saved.p256dh,
                    auth: saved.auth,
                },
            }, {
                title: 'Nueva notificación',
                body: saved.mensaje,
                data: { id: saved.id },
            });
        }
        return saved;
    }
    async findAll() {
        return await this.notificacionRepository.find();
    }
    async findOne(id) {
        return await this.notificacionRepository.findOneBy({ id });
    }
    async update(id, updateNotificacionDto) {
        const notificacion = await this.notificacionRepository.findOneBy({ id });
        if (!notificacion)
            throw new common_1.NotFoundException('Notificación no encontrada');
        if (updateNotificacionDto.mensaje)
            notificacion.mensaje = updateNotificacionDto.mensaje;
        if (updateNotificacionDto.usuarioId) {
            notificacion.usuario = await this.usuarioRepository.findOneBy({ id: updateNotificacionDto.usuarioId });
        }
        if (updateNotificacionDto.pedidoId) {
            notificacion.pedido = await this.pedidoRepository.findOneBy({ id: updateNotificacionDto.pedidoId });
        }
        if (updateNotificacionDto.productoId) {
            notificacion.producto = await this.productoRepository.findOneBy({ id: updateNotificacionDto.productoId });
        }
        return await this.notificacionRepository.save(notificacion);
    }
    async remove(id) {
        const notificacion = await this.notificacionRepository.findOneBy({ id });
        if (!notificacion)
            throw new common_1.NotFoundException('Notificación no encontrada');
        return await this.notificacionRepository.softRemove(notificacion);
    }
};
exports.NotificacionService = NotificacionService;
exports.NotificacionService = NotificacionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(notificacion_entity_1.Notificacion)),
    __param(1, (0, typeorm_1.InjectRepository)(usuario_entity_1.Usuario)),
    __param(2, (0, typeorm_1.InjectRepository)(pedido_entity_1.Pedido)),
    __param(3, (0, typeorm_1.InjectRepository)(producto_entity_1.Producto)),
    __param(4, (0, typeorm_1.InjectRepository)(promocione_entity_1.Promocione)),
    __param(5, (0, typeorm_1.InjectRepository)(chat_entity_1.Conversation)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        push_notification_service_1.PushNotificationService])
], NotificacionService);
//# sourceMappingURL=notificacion.service.js.map