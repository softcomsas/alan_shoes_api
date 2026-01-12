import { Repository } from 'typeorm';
import { Conversation } from './entities/chat.entity';
import { ChatMessage } from './entities/chat-message.entity';
export declare class ChatService {
    private readonly convRepo;
    private readonly msgRepo;
    constructor(convRepo: Repository<Conversation>, msgRepo: Repository<ChatMessage>);
    createConversation(userId: number, subject: string | undefined, initialMessage: string): Promise<Conversation | null>;
    sendMessage(conversationId: number, senderId: number, senderRole: 'user' | 'admin', content: string): Promise<ChatMessage>;
    findUserConversations(userId: number): Promise<Conversation[]>;
    findAllConversations(): Promise<Conversation[]>;
    findOneConversation(id: number): Promise<Conversation | null>;
    getMessages(conversationId: number): Promise<ChatMessage[]>;
    assignAdmin(conversationId: number, adminId: number): Promise<Conversation>;
    userDeleteConversation(conversationId: number, userId: number): Promise<{
        success: boolean;
    }>;
    adminDeleteConversation(conversationId: number, adminId: number): Promise<{
        success: boolean;
    }>;
}
