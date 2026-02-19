import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './entities/message.entity';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  async create(createMessageDto: CreateMessageDto) {
    const message = this.messageRepository.create(createMessageDto);
    return await this.messageRepository.save(message);
  }

  async findAll() {
    return await this.messageRepository.find({ order: { createdAt: 'DESC' } });
  }

  async findOne(id: number) {
    const message = await this.messageRepository.findOneBy({ id });
    if (!message) {
      throw new NotFoundException(`Message with id ${id} not found`);
    }
    return message;
  }

  async update(id: number, updateMessageDto: UpdateMessageDto) {
    const message = await this.findOne(id);
    Object.assign(message, updateMessageDto);
    return await this.messageRepository.save(message);
  }

  async remove(id: number) {
    const message = await this.findOne(id);
    return await this.messageRepository.remove(message);
  }
}
