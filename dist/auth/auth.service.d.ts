import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/usuario/usuario.service';
export declare class AuthService {
    private readonly usuariosService;
    private readonly jwtService;
    constructor(usuariosService: UsuarioService, jwtService: JwtService);
    register(registerDto: RegisterDto): Promise<import("../usuario/entities/usuario.entity").Usuario>;
    login(loginDto: LoginDto): Promise<{
        token: string;
        email: string;
        role: string;
        ok: boolean;
        id: number;
    }>;
}
