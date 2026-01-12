/* eslint-disable prefer-const */
import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';

import { RegisterDto } from './dto/register.dto';

import * as bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/usuario/usuario.service';


@Injectable()
export class AuthService {

    constructor(
        private readonly usuariosService: UsuarioService,
        private readonly jwtService: JwtService
    ){}

    async register(registerDto: RegisterDto){
        const user = await this.usuariosService.findOneByEmail(registerDto.email);
        if(user){
            throw new BadRequestException('User already exists');
        }

        registerDto.password = await bcryptjs.hash(registerDto.password, 10);

        return await this.usuariosService.create(registerDto);
    }

    
    async login(loginDto: LoginDto){
                
        const user = await this.usuariosService.findOneByEmailWithPassword(loginDto.email);
        if(!user){
            throw new UnauthorizedException('email no correcto');
        }

        const isPasswordUser = await bcryptjs.compare(loginDto.password, user.password)
        if(!isPasswordUser){
            throw new UnauthorizedException('password no correcto');
        }

        const payload = {sub: user.id, role: user.role, email: user.email};
        const token = await this.jwtService.signAsync(payload);

        if(token){
            loginDto.ok = true;
        }else{
            loginDto.ok = false;
        }

        const ok = loginDto.ok;
        const email = loginDto.email;
        const role = payload.role;
        const id = user.id;

        return {
            token,
            email,
            role,
            ok,
            id
        };
    }
}
