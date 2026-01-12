import { RemesasService } from './remesas.service';
import { CreateRemesaDto } from './dto/create-remesa.dto';
import { UpdateRemesaDto } from './dto/update-remesa.dto';
export declare class RemesasController {
    private readonly remesasService;
    constructor(remesasService: RemesasService);
    create(createRemesaDto: CreateRemesaDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateRemesaDto: UpdateRemesaDto): string;
    remove(id: string): string;
}
