import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    create(createUsuarioDto: CreateUsuarioDto): Promise<import("./entities/usuario.entity").Usuario>;
    findAll(): Promise<import("./entities/usuario.entity").Usuario[]>;
    findOne(id: number): Promise<import("./entities/usuario.entity").Usuario | null>;
    findOneByEmail(email: string): Promise<import("./entities/usuario.entity").Usuario | null>;
    update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<import("./entities/usuario.entity").Usuario | null>;
    updateProfileImage(id: number, file: Express.Multer.File): Promise<import("./entities/usuario.entity").Usuario | null>;
    remove(id: number): Promise<{
        id: number;
    } & import("./entities/usuario.entity").Usuario>;
}
