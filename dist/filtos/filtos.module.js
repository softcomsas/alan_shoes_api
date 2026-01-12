"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiltosModule = void 0;
const common_1 = require("@nestjs/common");
const filtos_service_1 = require("./filtos.service");
const filtos_controller_1 = require("./filtos.controller");
const usuario_module_1 = require("../usuario/usuario.module");
const pedidos_module_1 = require("../pedidos/pedidos.module");
const productos_module_1 = require("../productos/productos.module");
const typeorm_1 = require("@nestjs/typeorm");
const usuario_entity_1 = require("../usuario/entities/usuario.entity");
const pedido_entity_1 = require("../pedidos/entities/pedido.entity");
const producto_entity_1 = require("../productos/entities/producto.entity");
const usuario_service_1 = require("../usuario/usuario.service");
const pedidos_service_1 = require("../pedidos/pedidos.service");
const productos_service_1 = require("../productos/productos.service");
let FiltosModule = class FiltosModule {
};
exports.FiltosModule = FiltosModule;
exports.FiltosModule = FiltosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            usuario_module_1.UsuarioModule,
            pedidos_module_1.PedidosModule,
            productos_module_1.ProductosModule,
            typeorm_1.TypeOrmModule.forFeature([usuario_entity_1.Usuario, pedido_entity_1.Pedido, producto_entity_1.Producto])
        ],
        controllers: [filtos_controller_1.FiltosController],
        providers: [
            filtos_service_1.FiltosService,
            usuario_service_1.UsuarioService,
            pedidos_service_1.PedidosService,
            productos_service_1.ProductosService
        ],
    })
], FiltosModule);
//# sourceMappingURL=filtos.module.js.map