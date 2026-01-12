import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
  ParseIntPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  // Crear usuario
  @Post()
  async create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return await this.usuarioService.create(createUsuarioDto);
  }

  // Listar todos los usuarios
  @Get()
  async findAll() {
    return await this.usuarioService.findAll();
  }

  // Buscar usuario por ID
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.usuarioService.findOne(id);
  }

  // Buscar usuario por email
  @Get('email/:email')
  async findOneByEmail(@Param('email') email: string) {
    return await this.usuarioService.findOneByEmail(email);
  }

  // Actualizar usuario (perfil general)
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUsuarioDto: UpdateUsuarioDto,
  ) {
    return await this.usuarioService.update(id, updateUsuarioDto);
  }

  // Actualizar solo la imagen de perfil
  @Patch(':id/imagen')
  @UseInterceptors(FileInterceptor('file'))
  async updateProfileImage(
    @Param('id', ParseIntPipe) id: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return await this.usuarioService.updateProfileImage(id, file.buffer);
  }

  // Eliminar usuario (soft delete)
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.usuarioService.remove(id);
  }
}
