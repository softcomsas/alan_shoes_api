import { CanActivate, ExecutionContext } from '@nestjs/common';
import { ChatService } from '../chat.service';
export declare class ConversationParticipantGuard implements CanActivate {
    private readonly chatService;
    constructor(chatService: ChatService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
