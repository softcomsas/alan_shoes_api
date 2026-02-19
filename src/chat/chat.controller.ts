import { Controller, Post, Body, UseGuards, Request, Param, Get, Put, Delete, BadRequestException } from '@nestjs/common';
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

  // ==========================================
  // MOST SPECIFIC ROUTES FIRST
  // ==========================================

  // Admin delete (more specific than :id)
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Delete('conversations/:id/admin')
  async adminDelete(@Param('id') id: string, @Request() req: any) {
    const adminId = req.user?.sub ?? req.user?.id ?? req.user?.userId;
    return this.chatService.adminDeleteConversation(Number(id), adminId);
  }

  // Assign admin (more specific than :id)
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Put('conversations/:id/assign')
  async assignAdmin(@Param('id') id: string, @Body() body: { adminId: number }) {
    if (!body.adminId) {
      throw new BadRequestException('Admin ID is required');
    }
    return this.chatService.assignAdmin(Number(id), body.adminId);
  }

  // Get messages (more specific than :id)
  @Get('conversations/:id/messages')
  async getMessages(@Request() req: any, @Param('id') id: string) {
    const userId = req.user?.sub ?? req.user?.id ?? req.user?.userId ?? 1;
    const role = req.user?.role as Role;
    const conv = await this.chatService.findOneConversation(Number(id));
    if (!conv) return [];
    if (role === Role.Admin || conv.userId === userId) {
      return this.chatService.getMessages(Number(id));
    }
    return [];
  }

  // Send message (more specific than :id)
  @Post('conversations/:id/messages')
  async sendMessage(@Request() req: any, @Param('id') id: string, @Body() body: SendMessageDto) {
    if (!body.message || body.message.trim() === '') {
      throw new BadRequestException('Message is required and cannot be empty');
    }
    const userId = req.user?.sub ?? req.user?.id ?? req.user?.userId ?? 1;
    const role = (req.user?.role ?? 'user') as 'user' | 'admin';
    return this.chatService.sendMessage(Number(id), userId, role, body.message);
  }

  // ==========================================
  // LESS SPECIFIC ROUTES
  // ==========================================

  // Get specific conversation
  @Get('conversations/:id')
  async getConversation(@Request() req: any, @Param('id') id: string) {
    const userId = req.user?.sub ?? req.user?.id ?? req.user?.userId ?? 1;
    const role = req.user?.role as Role;
    const conv = await this.chatService.findOneConversation(Number(id));
    if (!conv) {
      throw new BadRequestException('Conversation not found');
    }
    if (role === Role.Admin || conv.userId === userId) {
      return conv;
    }
    throw new BadRequestException('Unauthorized to access this conversation');
  }

  // User delete conversation
  @UseGuards(AuthGuard)
  @Delete('conversations/:id')
  async userDelete(@Request() req: any, @Param('id') id: string) {
    const userId = req.user?.sub ?? req.user?.id ?? req.user?.userId;
    if (!userId) {
      throw new BadRequestException('User ID is required');
    }
    const role = req.user?.role as Role;
    if (role === Role.Admin) {
      throw new BadRequestException('Admins must use admin delete endpoint');
    }
    return this.chatService.userDeleteConversation(Number(id), userId);
  }

  // ==========================================
  // BASE ROUTES (LEAST SPECIFIC)
  // ==========================================

  // List all conversations
  @Get('conversations')
  async listConversations(@Request() req: any) {
    const userId = req.user?.sub ?? req.user?.id ?? req.user?.userId ?? 1;
    const role = req.user?.role as Role;
    if (role === Role.Admin) return this.chatService.findAllConversations();
    return this.chatService.findUserConversations(userId);
  }

  // Create conversation
  @Post('conversations')
  async createConversation(@Request() req: any, @Body() body: CreateConversationDto) {
    if (!body.message || body.message.trim() === '') {
      throw new BadRequestException('Message is required and cannot be empty');
    }
    const userId = req.user?.sub ?? req.user?.id ?? req.user?.userId ?? 1;
    return this.chatService.createConversation(userId, body.subject, body.message);
  }
}
