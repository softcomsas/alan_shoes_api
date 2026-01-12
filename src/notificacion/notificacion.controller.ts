import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotificacionService } from './notificacion.service';
import { CreateNotificacionDto } from './dto/create-notificacion.dto';
import { UpdateNotificacionDto } from './dto/update-notificacion.dto';

@Controller('notificacion')
export class NotificacionController {
  constructor(private readonly notificacionService: NotificacionService) {}

  //mensaje: string = "Nuevo pedido";
  @Post()
  async create(@Body() createNotificacionDto: CreateNotificacionDto) {
    return await this.notificacionService.create(createNotificacionDto);
  }

  /**
   * Notifica a todos los usuarios de una nueva publicación/producto
   * Body: { mensaje: string, productoId?: number }
   */
  @Post('publicacion')
  async notificarNuevaPublicacion(
    @Body() body: { mensaje: string; productoId?: number }
  ) {
    return await this.notificacionService.notificarNuevaPublicacion(body.mensaje, body.productoId);
  }

  @Post('promocion')
  async notificarNuevaPromocion(@Body() body: { mensaje: string; promocionId: number }) {
    return await this.notificacionService.notificarNuevaPromocion(body.mensaje, body.promocionId);
  }

    // Notificar admins de nuevo pedido
  @Post('pedido')
  async notificarAdminsNuevoPedido(@Body() dto: {mensaje:string; pedidoId: number },) {    
    return this.notificacionService.notificarAdminsNuevoPedido(dto.mensaje, dto.pedidoId);
  }

  // Notificar admins de nuevo chat
  @Post('chat')
  async notificarAdminsNuevoChat(
    @Body() body: { mensaje: string; conversationId: number },
  ) {
    return this.notificacionService.notificarAdminsNuevoChat(body.mensaje, body.conversationId);
  }

  @Get()
  async findAll() {
    return await this.notificacionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.notificacionService.findOne(Number(id));
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateNotificacionDto: UpdateNotificacionDto) {
    return await this.notificacionService.update(Number(id), updateNotificacionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.notificacionService.remove(Number(id));
  }
}
