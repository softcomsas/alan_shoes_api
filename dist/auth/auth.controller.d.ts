import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<import("../usuario/entities/usuario.entity").Usuario>;
    login(loginDto: LoginDto): Promise<{
        token: string;
        email: string;
        role: string;
        ok: boolean;
        id: number;
    }>;
}
