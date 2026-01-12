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
exports.ConversationParticipantGuard = void 0;
const common_1 = require("@nestjs/common");
const chat_service_1 = require("../chat.service");
let ConversationParticipantGuard = class ConversationParticipantGuard {
    chatService;
    constructor(chatService) {
        this.chatService = chatService;
    }
    async canActivate(context) {
        const req = context.switchToHttp().getRequest();
        const user = req.user;
        const conversationId = Number(req.params?.id ?? req.body?.conversationId);
        if (!conversationId)
            return false;
        const conv = await this.chatService.findOneConversation(conversationId);
        if (!conv)
            return false;
        if (user?.role === 'admin')
            return true;
        if (conv.userId === (user?.sub ?? user?.id ?? user?.userId))
            return true;
        throw new common_1.ForbiddenException();
    }
};
exports.ConversationParticipantGuard = ConversationParticipantGuard;
exports.ConversationParticipantGuard = ConversationParticipantGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], ConversationParticipantGuard);
//# sourceMappingURL=conversation-participant.guard.js.map