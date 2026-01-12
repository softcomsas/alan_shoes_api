import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';
import { ChatService } from '../chat.service';

@Injectable()
export class ConversationParticipantGuard implements CanActivate {
  constructor(private readonly chatService: ChatService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const user = req.user;
    const conversationId = Number(req.params?.id ?? req.body?.conversationId);
    if (!conversationId) return false;

    const conv = await this.chatService.findOneConversation(conversationId);
    if (!conv) return false;

    // admins can access
    if (user?.role === 'admin') return true;

    // user must be owner
    if (conv.userId === (user?.sub ?? user?.id ?? user?.userId)) return true;

    throw new ForbiddenException();
  }
}
