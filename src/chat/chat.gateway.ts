import { WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from '../auth/constants/jwt.constants';
import { ChatService } from './chat.service';

@WebSocketGateway({ namespace: 'chat', cors: true })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private socketsByUser = new Map<number, Set<string>>();

  constructor(private readonly jwtService: JwtService, private readonly chatService: ChatService) {}

  handleConnection(client: Socket) {
    try {
      const raw = client.handshake.auth?.token ?? '';
      const token = raw.replace(/^Bearer\s+/i, '');
      const payload: any = this.jwtService.verify(token, { secret: jwtConstants.secret });
      const userId = payload.sub ?? payload.id ?? payload.userId;
      const role = payload.role;

      client.data.userId = userId;
      client.data.role = role;

      const set = this.socketsByUser.get(userId) ?? new Set<string>();
      set.add(client.id);
      this.socketsByUser.set(userId, set);

      if (role === 'admin') {
        client.join('admins');
      }

    } catch (err) {
      client.disconnect(true);
    }
  }

  handleDisconnect(client: Socket) {
    const userId = client.data.userId as number | undefined;
    if (!userId) return;
    const set = this.socketsByUser.get(userId);
    if (!set) return;
    set.delete(client.id);
    if (set.size === 0) this.socketsByUser.delete(userId);
  }

  @SubscribeMessage('joinConversation')
  handleJoin(@MessageBody() payload: { conversationId: number }, @ConnectedSocket() client: Socket) {
    const id = payload.conversationId;
    client.join(`conversation:${id}`);
  }

  @SubscribeMessage('leaveConversation')
  handleLeave(@MessageBody() payload: { conversationId: number }, @ConnectedSocket() client: Socket) {
    const id = payload.conversationId;
    client.leave(`conversation:${id}`);
  }

  @SubscribeMessage('sendMessage')
  async handleSendMessage(@MessageBody() payload: { conversationId: number; content: string }, @ConnectedSocket() client: Socket) {
    const userId = client.data.userId as number;
    const role = client.data.role as 'user' | 'admin';
    const saved = await this.chatService.sendMessage(payload.conversationId, userId, role, payload.content);

    this.server.to(`conversation:${payload.conversationId}`).emit('message', saved);

    if (role === 'user') {
      this.server.to('admins').emit('newConversationMessage', { conversationId: payload.conversationId, message: saved });
    }
  }
}
