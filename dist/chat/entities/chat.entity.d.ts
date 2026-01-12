import { ChatMessage } from './chat-message.entity';
export declare class Conversation {
    id: number;
    userId: number;
    adminId?: number;
    subject?: string;
    status: 'open' | 'closed' | 'pending';
    deletedByUser: boolean;
    deletedByAdmin: boolean;
    createdAt: Date;
    updatedAt: Date;
    messages: ChatMessage[];
    deleteAT: Date;
}
