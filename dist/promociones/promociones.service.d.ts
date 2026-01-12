import { Repository } from 'typeorm';
import { CreatePromocioneDto } from './dto/create-promocione.dto';
import { UpdatePromocioneDto } from './dto/update-promocione.dto';
import { Promocione } from './entities/promocione.entity';
export declare class PromocionesService {
    private readonly promocioneRepository;
    constructor(promocioneRepository: Repository<Promocione>);
    create(createPromocioneDto: CreatePromocioneDto): Promise<Promocione>;
    findAll(): Promise<Promocione[]>;
    findOne(id: number): Promise<Promocione>;
    update(id: number, updatePromocioneDto: UpdatePromocioneDto): Promise<Promocione>;
    remove(id: number): Promise<Promocione>;
}
