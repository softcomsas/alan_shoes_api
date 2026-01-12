import { ChatService } from './chat.service';
import { CreateConversationDto } from './dto/create-chat.dto';
import { SendMessageDto } from './dto/send-message.dto';
export declare class ChatController {
    private readonly chatService;
    constructor(chatService: ChatService);
    createConversation(req: any, body: CreateConversationDto): Promise<import("./entities/chat.entity").Conversation | null>;
    userDelete(req: any, id: string): Promise<{
        success: boolean;
    } | {
        message: string;
    }>;
    sendMessage(req: any, id: string, body: SendMessageDto): Promise<import("./entities/chat-message.entity").ChatMessage>;
    listConversations(req: any): Promise<import("./entities/chat.entity").Conversation[]>;
    getMessages(req: any, id: string): Promise<import("./entities/chat-message.entity").ChatMessage[]>;
    assignAdmin(id: string, body: {
        adminId: number;
    }): Promise<import("./entities/chat.entity").Conversation>;
    adminDelete(id: string, req: any): Promise<{
        success: boolean;
    }>;
}
