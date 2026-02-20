import { ChatService } from './chat.service';
import { CreateConversationDto } from './dto/create-chat.dto';
import { SendMessageDto } from './dto/send-message.dto';
export declare class ChatController {
    private readonly chatService;
    constructor(chatService: ChatService);
    adminDelete(id: string, req: any): Promise<{
        success: boolean;
    }>;
    assignAdmin(id: string, body: {
        adminId: number;
    }): Promise<import("./entities/chat.entity").Conversation>;
    getMessages(req: any, id: string): Promise<import("./entities/chat-message.entity").ChatMessage[]>;
    sendMessage(req: any, id: string, body: SendMessageDto): Promise<import("./entities/chat-message.entity").ChatMessage>;
    getConversation(req: any, id: string): Promise<import("./entities/chat.entity").Conversation>;
    userDelete(req: any, id: string): Promise<{
        success: boolean;
    }>;
    listConversations(req: any): Promise<import("./entities/chat.entity").Conversation[]>;
    createConversation(req: any, body: CreateConversationDto): Promise<import("./entities/chat.entity").Conversation | null>;
}
