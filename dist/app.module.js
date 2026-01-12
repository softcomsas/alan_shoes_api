"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const usuario_module_1 = require("./usuario/usuario.module");
const carrito_module_1 = require("./carrito/carrito.module");
const pedidos_module_1 = require("./pedidos/pedidos.module");
const productos_module_1 = require("./productos/productos.module");
const filtos_module_1 = require("./filtos/filtos.module");
const notificacion_module_1 = require("./notificacion/notificacion.module");
const promociones_module_1 = require("./promociones/promociones.module");
const auth_module_1 = require("./auth/auth.module");
const chat_module_1 = require("./chat/chat.module");
const remesas_module_1 = require("./remesas/remesas.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const message_module_1 = require("./message/message.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: "mysql",
                host: "bm9qa41mphdu6egdwhz5-mysql.services.clever-cloud.com",
                port: 21809,
                username: "uxtmgqn9jltgi212",
                password: "CWFmDIiIDIict0Wmlx2",
                database: "bm9qa41mphdu6egdwhz5",
                autoLoadEntities: true,
                synchronize: true,
                extra: {
                    ssl: { rejectUnauthorized: false },
                    connectionLimit: 2,
                    waitForConnections: true,
                    queueLimit: 0,
                },
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'public'),
                exclude: ['/\/alanShoes\/api/'],
            }),
            usuario_module_1.UsuarioModule,
            carrito_module_1.CarritoModule,
            pedidos_module_1.PedidosModule,
            productos_module_1.ProductosModule,
            filtos_module_1.FiltosModule,
            notificacion_module_1.NotificacionModule,
            promociones_module_1.PromocionesModule,
            auth_module_1.AuthModule,
            chat_module_1.ChatModule,
            remesas_module_1.RemesasModule,
            message_module_1.MessageModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map