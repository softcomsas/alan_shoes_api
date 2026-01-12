import { PromocionesService } from './promociones.service';
import { CreatePromocioneDto } from './dto/create-promocione.dto';
import { UpdatePromocioneDto } from './dto/update-promocione.dto';
export declare class PromocionesController {
    private readonly promocionesService;
    constructor(promocionesService: PromocionesService);
    create(createPromocioneDto: CreatePromocioneDto): Promise<import("./entities/promocione.entity").Promocione>;
    findAll(): Promise<import("./entities/promocione.entity").Promocione[]>;
    findOne(id: string): Promise<import("./entities/promocione.entity").Promocione>;
    update(id: string, updatePromocioneDto: UpdatePromocioneDto): Promise<import("./entities/promocione.entity").Promocione>;
    remove(id: string): Promise<import("./entities/promocione.entity").Promocione>;
}
