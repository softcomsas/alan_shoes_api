import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {

  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepositoy: Repository<Usuario>
  ){}


  async updateProfileImage(id: number, img: Buffer): Promise<Usuario | null> {
    await this.usuarioRepositoy.update(id, { img });
    return await this.usuarioRepositoy.findOneBy({ id });
  }

  async findOneByEmailWithPassword(email: string): Promise<Usuario | null> {
    return await this.usuarioRepositoy.createQueryBuilder('usuario')
      .addSelect('usuario.password')
      .where('usuario.email = :email', { email })
      .getOne();
  }

  async findOneByEmail(email: string): Promise<Usuario | null> {
    return await this.usuarioRepositoy.findOneBy({ email });
  }

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const usuario = this.usuarioRepositoy.create(createUsuarioDto);
    return await this.usuarioRepositoy.save(usuario);
  }

  async findAll(): Promise<Usuario[]> {
    return await this.usuarioRepositoy.find();
  }

  async findOne(id: number): Promise<Usuario | null> {
    return await this.usuarioRepositoy.findOneBy({ id });
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario | null> {
    await this.usuarioRepositoy.update(id, updateUsuarioDto);
    return await this.usuarioRepositoy.findOneBy({ id });
  }

  async remove(id: number) {
    return await this.usuarioRepositoy.softRemove({id});
  }
}
