import { Controller, Post, Body, UseGuards, Request, Param, Get, Put, Delete } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateConversationDto } from './dto/create-chat.dto';
import { SendMessageDto } from './dto/send-message.dto';
import { AuthGuard } from '../auth/guard/auth.guard';
import { RolesGuard } from '../auth/guard/role.guard';
import { ConversationParticipantGuard } from './guards/conversation-participant.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../common/enums/roles';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  //@UseGuards(AuthGuard)
  @Post('conversations')
  async createConversation(@Request() req: any, @Body() body: CreateConversationDto) {
    const userId = req.user?.sub ?? req.user?.id ?? req.user?.userId;
    return this.chatService.createConversation(userId, body.subject, body.message);
  }

  // User deletes conversation for themselves (admin still sees it)
  @UseGuards(AuthGuard)
  @Delete('conversations/:id')
  async userDelete(@Request() req: any, @Param('id') id: string) {
    const userId = req.user?.sub ?? req.user?.id ?? req.user?.userId;
    const role = req.user?.role as Role;
    if (role === Role.Admin) {
      // Admins must use admin delete endpoint
      return { message: 'Admins must use admin delete endpoint' };
    }
    return this.chatService.userDeleteConversation(Number(id), userId);
  }

  //@UseGuards(AuthGuard, ConversationParticipantGuard)
  @Post('conversations/:id/messages')
  async sendMessage(@Request() req: any, @Param('id') id: string, @Body() body: SendMessageDto) {
    const userId = req.user?.sub ?? req.user?.id ?? req.user?.userId;
    const role = req.user?.role as 'user' | 'admin';
    return this.chatService.sendMessage(Number(id), userId, role, body.message);
  }

  //@UseGuards(AuthGuard)
  @Get('conversations')
  async listConversations(@Request() req: any) {
    const userId = req.user?.sub ?? req.user?.id ?? req.user?.userId;
    const role = req.user?.role as Role;
    if (role === Role.Admin) return this.chatService.findAllConversations();
    return this.chatService.findUserConversations(userId);
  }

  //@UseGuards(AuthGuard, ConversationParticipantGuard)
  @Get('conversations/:id/messages')
  async getMessages(@Request() req: any, @Param('id') id: string) {
    const userId = req.user?.sub ?? req.user?.id ?? req.user?.userId;
    const role = req.user?.role as Role;
    const conv = await this.chatService.findOneConversation(Number(id));
    if (!conv) return [];
    if (role === Role.Admin || conv.userId === userId) {
      return this.chatService.getMessages(Number(id));
    }
    return [];
  }

  //@UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Put('conversations/:id/assign')
  async assignAdmin(@Param('id') id: string, @Body() body: { adminId: number }) {
    return this.chatService.assignAdmin(Number(id), body.adminId);
  }

  // Admin deletes conversation for everyone
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Delete('conversations/:id/admin')
  async adminDelete(@Param('id') id: string, @Request() req: any) {
    const adminId = req.user?.sub ?? req.user?.id ?? req.user?.userId;
    return this.chatService.adminDeleteConversation(Number(id), adminId);
  }
}
