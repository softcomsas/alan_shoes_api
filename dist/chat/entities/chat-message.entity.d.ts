import { Conversation } from './chat.entity';
export declare class ChatMessage {
    id: number;
    conversation: Conversation;
    conversationId: number;
    senderId: number;
    senderRole: 'user' | 'admin';
    content: string;
    createdAt: Date;
    read: boolean;
}
