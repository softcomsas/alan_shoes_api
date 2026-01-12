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
exports.ChatController = void 0;
const common_1 = require("@nestjs/common");
const chat_service_1 = require("./chat.service");
const create_chat_dto_1 = require("./dto/create-chat.dto");
const send_message_dto_1 = require("./dto/send-message.dto");
const auth_guard_1 = require("../auth/guard/auth.guard");
const role_guard_1 = require("../auth/guard/role.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const roles_1 = require("../common/enums/roles");
let ChatController = class ChatController {
    chatService;
    constructor(chatService) {
        this.chatService = chatService;
    }
    async createConversation(req, body) {
        const userId = req.user?.sub ?? req.user?.id ?? req.user?.userId;
        return this.chatService.createConversation(userId, body.subject, body.message);
    }
    async userDelete(req, id) {
        const userId = req.user?.sub ?? req.user?.id ?? req.user?.userId;
        const role = req.user?.role;
        if (role === roles_1.Role.Admin) {
            return { message: 'Admins must use admin delete endpoint' };
        }
        return this.chatService.userDeleteConversation(Number(id), userId);
    }
    async sendMessage(req, id, body) {
        const userId = req.user?.sub ?? req.user?.id ?? req.user?.userId;
        const role = req.user?.role;
        return this.chatService.sendMessage(Number(id), userId, role, body.message);
    }
    async listConversations(req) {
        const userId = req.user?.sub ?? req.user?.id ?? req.user?.userId;
        const role = req.user?.role;
        if (role === roles_1.Role.Admin)
            return this.chatService.findAllConversations();
        return this.chatService.findUserConversations(userId);
    }
    async getMessages(req, id) {
        const userId = req.user?.sub ?? req.user?.id ?? req.user?.userId;
        const role = req.user?.role;
        const conv = await this.chatService.findOneConversation(Number(id));
        if (!conv)
            return [];
        if (role === roles_1.Role.Admin || conv.userId === userId) {
            return this.chatService.getMessages(Number(id));
        }
        return [];
    }
    async assignAdmin(id, body) {
        return this.chatService.assignAdmin(Number(id), body.adminId);
    }
    async adminDelete(id, req) {
        const adminId = req.user?.sub ?? req.user?.id ?? req.user?.userId;
        return this.chatService.adminDeleteConversation(Number(id), adminId);
    }
};
exports.ChatController = ChatController;
__decorate([
    (0, common_1.Post)('conversations'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_chat_dto_1.CreateConversationDto]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "createConversation", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)('conversations/:id'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "userDelete", null);
__decorate([
    (0, common_1.Post)('conversations/:id/messages'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, send_message_dto_1.SendMessageDto]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "sendMessage", null);
__decorate([
    (0, common_1.Get)('conversations'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "listConversations", null);
__decorate([
    (0, common_1.Get)('conversations/:id/messages'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "getMessages", null);
__decorate([
    (0, roles_decorator_1.Roles)(roles_1.Role.Admin),
    (0, common_1.Put)('conversations/:id/assign'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "assignAdmin", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(roles_1.Role.Admin),
    (0, common_1.Delete)('conversations/:id/admin'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "adminDelete", null);
exports.ChatController = ChatController = __decorate([
    (0, common_1.Controller)('chat'),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], ChatController);
//# sourceMappingURL=chat.controller.js.map