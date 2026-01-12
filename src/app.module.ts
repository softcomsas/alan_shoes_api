import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { CarritoModule } from './carrito/carrito.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { ProductosModule } from './productos/productos.module';
import { FiltosModule } from './filtos/filtos.module';
import { NotificacionModule } from './notificacion/notificacion.module';
import { PromocionesModule } from './promociones/promociones.module';
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';
import { RemesasModule } from './remesas/remesas.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MessageModule } from './message/message.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "bm9qa41mphdu6egdwhz5-mysql.services.clever-cloud.com",
      //host: 'localhost',
      port: 21809,
      //port: 3306,
      username: "uxtmgqn9jltgi212",
      //username: 'root',
      password: "CWFmDIiIDIict0Wmlx2",
      //password: '',
      database: "bm9qa41mphdu6egdwhz5",
      //database: 'alan-shoes-db',
      autoLoadEntities: true,
      synchronize: true, // 👈 desactivado
      //migrations: [join(__dirname, 'migrations/*{.ts,.js}')],
      //migrationsRun: true, // 👈 ejecuta migraciones al arrancar
      extra: {
        ssl: {rejectUnauthorized: false}, // requerido por Clever Cloud},
        connectionLimit: 2, // 👈 muy importante
        waitForConnections: true,
        queueLimit: 0,
      },
    }),


    // 👇 Aquí servimos Angular desde la carpeta public
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      exclude: ['/\/alanShoes\/api/'], // 👈 evita que interfiera con tus endpoints
    }),

    UsuarioModule,
    CarritoModule,
    PedidosModule,
    ProductosModule,
    FiltosModule,
    NotificacionModule,
    PromocionesModule,
    AuthModule,
    ChatModule,
    RemesasModule,
    MessageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
