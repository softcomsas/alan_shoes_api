import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { JwtService } from '@nestjs/jwt';
import { ChatService } from './chat.service';
export declare class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private readonly jwtService;
    private readonly chatService;
    server: Server;
    private socketsByUser;
    constructor(jwtService: JwtService, chatService: ChatService);
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
    handleJoin(payload: {
        conversationId: number;
    }, client: Socket): void;
    handleLeave(payload: {
        conversationId: number;
    }, client: Socket): void;
    handleSendMessage(payload: {
        conversationId: number;
        content: string;
    }, client: Socket): Promise<void>;
}
