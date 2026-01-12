"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemesasService = void 0;
const common_1 = require("@nestjs/common");
let RemesasService = class RemesasService {
    create(createRemesaDto) {
        return 'This action adds a new remesa';
    }
    findAll() {
        return `This action returns all remesas`;
    }
    findOne(id) {
        return `This action returns a #${id} remesa`;
    }
    update(id, updateRemesaDto) {
        return `This action updates a #${id} remesa`;
    }
    remove(id) {
        return `This action removes a #${id} remesa`;
    }
};
exports.RemesasService = RemesasService;
exports.RemesasService = RemesasService = __decorate([
    (0, common_1.Injectable)()
], RemesasService);
//# sourceMappingURL=remesas.service.js.map