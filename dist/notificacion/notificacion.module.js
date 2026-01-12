"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificacionModule = void 0;
const common_1 = require("@nestjs/common");
const notificacion_service_1 = require("./notificacion.service");
const notificacion_controller_1 = require("./notificacion.controller");
const typeorm_1 = require("@nestjs/typeorm");
const notificacion_entity_1 = require("./entities/notificacion.entity");
const usuario_entity_1 = require("../usuario/entities/usuario.entity");
const pedido_entity_1 = require("../pedidos/entities/pedido.entity");
const producto_entity_1 = require("../productos/entities/producto.entity");
const carrito_entity_1 = require("../carrito/entities/carrito.entity");
const usuario_service_1 = require("../usuario/usuario.service");
const pedidos_service_1 = require("../pedidos/pedidos.service");
const productos_service_1 = require("../productos/productos.service");
const carrito_service_1 = require("../carrito/carrito.service");
const push_notification_service_1 = require("./push-notification.service");
const promocione_entity_1 = require("../promociones/entities/promocione.entity");
const promociones_service_1 = require("../promociones/promociones.service");
const chat_entity_1 = require("../chat/entities/chat.entity");
const chat_service_1 = require("../chat/chat.service");
const chat_message_entity_1 = require("../chat/entities/chat-message.entity");
const userSubscripcion_entity_1 = require("./entities/userSubscripcion.entity");
let NotificacionModule = class NotificacionModule {
};
exports.NotificacionModule = NotificacionModule;
exports.NotificacionModule = NotificacionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([notificacion_entity_1.Notificacion, usuario_entity_1.Usuario, pedido_entity_1.Pedido, producto_entity_1.Producto, carrito_entity_1.Carrito, promocione_entity_1.Promocione, chat_entity_1.Conversation, chat_message_entity_1.ChatMessage, userSubscripcion_entity_1.UserSubscription]),
        ],
        controllers: [notificacion_controller_1.NotificacionController],
        providers: [
            notificacion_service_1.NotificacionService,
            usuario_service_1.UsuarioService,
            pedidos_service_1.PedidosService,
            productos_service_1.ProductosService,
            carrito_service_1.CarritoService,
            push_notification_service_1.PushNotificationService,
            promociones_service_1.PromocionesService,
            chat_service_1.ChatService
        ],
    })
], NotificacionModule);
//# sourceMappingURL=notificacion.module.js.map