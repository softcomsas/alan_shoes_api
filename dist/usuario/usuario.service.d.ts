import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
export declare class UsuarioService {
    private readonly usuarioRepositoy;
    constructor(usuarioRepositoy: Repository<Usuario>);
    updateProfileImage(id: number, img: Buffer): Promise<Usuario | null>;
    findOneByEmailWithPassword(email: string): Promise<Usuario | null>;
    findOneByEmail(email: string): Promise<Usuario | null>;
    create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario>;
    findAll(): Promise<Usuario[]>;
    findOne(id: number): Promise<Usuario | null>;
    update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario | null>;
    remove(id: number): Promise<{
        id: number;
    } & Usuario>;
}
