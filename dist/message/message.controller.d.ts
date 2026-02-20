import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
    create(createMessageDto: CreateMessageDto): Promise<import("./entities/message.entity").Message>;
    findAll(): Promise<import("./entities/message.entity").Message[]>;
    findOne(id: string): Promise<import("./entities/message.entity").Message>;
    update(id: string, updateMessageDto: UpdateMessageDto): Promise<import("./entities/message.entity").Message>;
    remove(id: string): Promise<import("./entities/message.entity").Message>;
}
