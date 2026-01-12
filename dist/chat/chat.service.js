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
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const chat_entity_1 = require("./entities/chat.entity");
const chat_message_entity_1 = require("./entities/chat-message.entity");
let ChatService = class ChatService {
    convRepo;
    msgRepo;
    constructor(convRepo, msgRepo) {
        this.convRepo = convRepo;
        this.msgRepo = msgRepo;
    }
    async createConversation(userId, subject, initialMessage) {
        const conv = this.convRepo.create({ userId, subject, status: 'open' });
        const saved = await this.convRepo.save(conv);
        const msg = this.msgRepo.create({
            conversationId: saved.id,
            senderId: userId,
            senderRole: 'user',
            content: initialMessage,
        });
        await this.msgRepo.save(msg);
        return this.findOneConversation(saved.id);
    }
    async sendMessage(conversationId, senderId, senderRole, content) {
        const conv = await this.convRepo.findOne({ where: { id: conversationId } });
        if (!conv)
            throw new common_1.NotFoundException('Conversation not found');
        if (senderRole === 'user' && conv.userId !== senderId) {
            throw new common_1.ForbiddenException();
        }
        const message = this.msgRepo.create({
            conversationId,
            senderId,
            senderRole,
            content,
        });
        const saved = await this.msgRepo.save(message);
        conv.updatedAt = new Date();
        await this.convRepo.save(conv);
        return saved;
    }
    async findUserConversations(userId) {
        return this.convRepo.find({ where: { userId, deletedByUser: false, deletedByAdmin: false }, relations: ['messages'], order: { updatedAt: 'DESC' } });
    }
    async findAllConversations() {
        return this.convRepo.find({ where: { deletedByAdmin: false }, relations: ['messages'], order: { updatedAt: 'DESC' } });
    }
    async findOneConversation(id) {
        return this.convRepo.findOne({ where: { id }, relations: ['messages'] });
    }
    async getMessages(conversationId) {
        return this.msgRepo.find({ where: { conversationId }, order: { createdAt: 'ASC' } });
    }
    async assignAdmin(conversationId, adminId) {
        const conv = await this.convRepo.findOne({ where: { id: conversationId } });
        if (!conv)
            throw new common_1.NotFoundException('Conversation not found');
        conv.adminId = adminId;
        await this.convRepo.save(conv);
        return conv;
    }
    async userDeleteConversation(conversationId, userId) {
        const conv = await this.convRepo.findOne({ where: { id: conversationId } });
        if (!conv)
            throw new common_1.NotFoundException('Conversation not found');
        if (conv.userId !== userId)
            throw new common_1.ForbiddenException();
        conv.deletedByUser = true;
        await this.convRepo.save(conv);
        return { success: true };
    }
    async adminDeleteConversation(conversationId, adminId) {
        const conv = await this.convRepo.findOne({ where: { id: conversationId } });
        if (!conv)
            throw new common_1.NotFoundException('Conversation not found');
        conv.deletedByAdmin = true;
        conv.status = 'closed';
        await this.convRepo.save(conv);
        return { success: true };
    }
};
exports.ChatService = ChatService;
exports.ChatService = ChatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(chat_entity_1.Conversation)),
    __param(1, (0, typeorm_1.InjectRepository)(chat_message_entity_1.ChatMessage)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ChatService);
//# sourceMappingURL=chat.service.js.map