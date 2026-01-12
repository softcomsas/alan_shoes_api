import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conversation } from './entities/chat.entity';
import { ChatMessage } from './entities/chat-message.entity';
import { ConversationParticipantGuard } from './guards/conversation-participant.guard';
import { JwtModule } from '@nestjs/jwt';
import { ChatGateway } from './chat.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Conversation, ChatMessage]), JwtModule.register({})],
  controllers: [ChatController],
  providers: [ChatService, ChatGateway, ConversationParticipantGuard],
  exports: [ChatService],
})
export class ChatModule {}
