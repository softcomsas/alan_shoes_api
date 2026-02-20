import { Repository } from 'typeorm';
import { Message } from './entities/message.entity';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
export declare class MessageService {
    private readonly messageRepository;
    constructor(messageRepository: Repository<Message>);
    create(createMessageDto: CreateMessageDto): Promise<Message>;
    findAll(): Promise<Message[]>;
    findOne(id: number): Promise<Message>;
    update(id: number, updateMessageDto: UpdateMessageDto): Promise<Message>;
    remove(id: number): Promise<Message>;
}
