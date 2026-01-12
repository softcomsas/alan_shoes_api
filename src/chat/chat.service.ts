import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Conversation } from './entities/chat.entity';
import { ChatMessage } from './entities/chat-message.entity';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Conversation)
    private readonly convRepo: Repository<Conversation>,
    @InjectRepository(ChatMessage)
    private readonly msgRepo: Repository<ChatMessage>,
  ) {}

  async createConversation(userId: number, subject: string | undefined, initialMessage: string) {
    const conv = this.convRepo.create({ userId, subject, status: 'open' });
    const saved = await this.convRepo.save(conv);

    const msg = this.msgRepo.create({
      conversationId: saved.id,
      senderId: userId,
      senderRole: 'user',
      content: initialMessage,
    });
    await this.msgRepo.save(msg);

    return this.findOneConversation(saved.id);
  }

  async sendMessage(conversationId: number, senderId: number, senderRole: 'user' | 'admin', content: string) {
    const conv = await this.convRepo.findOne({ where: { id: conversationId } });
    if (!conv) throw new NotFoundException('Conversation not found');

    if (senderRole === 'user' && conv.userId !== senderId) {
      throw new ForbiddenException();
    }

    const message = this.msgRepo.create({
      conversationId,
      senderId,
      senderRole,
      content,
    });
    const saved = await this.msgRepo.save(message);

    // update conversation timestamp
    conv.updatedAt = new Date();
    await this.convRepo.save(conv);

    return saved;
  }

  async findUserConversations(userId: number) {
    return this.convRepo.find({ where: { userId, deletedByUser: false, deletedByAdmin: false }, relations: ['messages'], order: { updatedAt: 'DESC' } });
  }

  async findAllConversations() {
    // Admins should see conversations even if user marked them deleted, but not those deleted by admin
    return this.convRepo.find({ where: { deletedByAdmin: false }, relations: ['messages'], order: { updatedAt: 'DESC' } });
  }

  async findOneConversation(id: number) {
    return this.convRepo.findOne({ where: { id }, relations: ['messages'] });
  }

  async getMessages(conversationId: number) {
    return this.msgRepo.find({ where: { conversationId }, order: { createdAt: 'ASC' } });
  }

  async assignAdmin(conversationId: number, adminId: number) {
    const conv = await this.convRepo.findOne({ where: { id: conversationId } });
    if (!conv) throw new NotFoundException('Conversation not found');
    conv.adminId = adminId;
    await this.convRepo.save(conv);
    return conv;
  }

  async userDeleteConversation(conversationId: number, userId: number) {
    const conv = await this.convRepo.findOne({ where: { id: conversationId } });
    if (!conv) throw new NotFoundException('Conversation not found');
    if (conv.userId !== userId) throw new ForbiddenException();
    conv.deletedByUser = true;
    await this.convRepo.save(conv);
    return { success: true };
  }

  async adminDeleteConversation(conversationId: number, adminId: number) {
    const conv = await this.convRepo.findOne({ where: { id: conversationId } });
    if (!conv) throw new NotFoundException('Conversation not found');
    conv.deletedByAdmin = true;
    // Optionally set status closed
    conv.status = 'closed';
    await this.convRepo.save(conv);
    return { success: true };
  }
}
