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
exports.ChatGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const jwt_1 = require("@nestjs/jwt");
const jwt_constants_1 = require("../auth/constants/jwt.constants");
const chat_service_1 = require("./chat.service");
let ChatGateway = class ChatGateway {
    jwtService;
    chatService;
    server;
    socketsByUser = new Map();
    constructor(jwtService, chatService) {
        this.jwtService = jwtService;
        this.chatService = chatService;
    }
    handleConnection(client) {
        try {
            const raw = client.handshake.auth?.token ?? '';
            const token = raw.replace(/^Bearer\s+/i, '');
            const payload = this.jwtService.verify(token, { secret: jwt_constants_1.jwtConstants.secret });
            const userId = payload.sub ?? payload.id ?? payload.userId;
            const role = payload.role;
            client.data.userId = userId;
            client.data.role = role;
            const set = this.socketsByUser.get(userId) ?? new Set();
            set.add(client.id);
            this.socketsByUser.set(userId, set);
            if (role === 'admin') {
                client.join('admins');
            }
        }
        catch (err) {
            client.disconnect(true);
        }
    }
    handleDisconnect(client) {
        const userId = client.data.userId;
        if (!userId)
            return;
        const set = this.socketsByUser.get(userId);
        if (!set)
            return;
        set.delete(client.id);
        if (set.size === 0)
            this.socketsByUser.delete(userId);
    }
    handleJoin(payload, client) {
        const id = payload.conversationId;
        client.join(`conversation:${id}`);
    }
    handleLeave(payload, client) {
        const id = payload.conversationId;
        client.leave(`conversation:${id}`);
    }
    async handleSendMessage(payload, client) {
        const userId = client.data.userId;
        const role = client.data.role;
        const saved = await this.chatService.sendMessage(payload.conversationId, userId, role, payload.content);
        this.server.to(`conversation:${payload.conversationId}`).emit('message', saved);
        if (role === 'user') {
            this.server.to('admins').emit('newConversationMessage', { conversationId: payload.conversationId, message: saved });
        }
    }
};
exports.ChatGateway = ChatGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ChatGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('joinConversation'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], ChatGateway.prototype, "handleJoin", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('leaveConversation'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], ChatGateway.prototype, "handleLeave", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('sendMessage'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleSendMessage", null);
exports.ChatGateway = ChatGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ namespace: 'chat', cors: true }),
    __metadata("design:paramtypes", [jwt_1.JwtService, chat_service_1.ChatService])
], ChatGateway);
//# sourceMappingURL=chat.gateway.js.map