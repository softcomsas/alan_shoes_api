import { CreateRemesaDto } from './dto/create-remesa.dto';
import { UpdateRemesaDto } from './dto/update-remesa.dto';
export declare class RemesasService {
    create(createRemesaDto: CreateRemesaDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateRemesaDto: UpdateRemesaDto): string;
    remove(id: number): string;
}
