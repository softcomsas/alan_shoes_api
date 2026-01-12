import { DataSource } from 'typeorm';
import { join } from 'path';

export default new DataSource({
  type: 'mysql',
  host: 'b9vxllwktrradnra2dvv-mysql.services.clever-cloud.com',
  port: 3306,
  username: 'udxccuapv7oltnjr',
  password: 'Q8Uxvx0Ipb6UbtpW3VSz',
  database: 'b9vxllwktrradnra2dvv',
  entities: [join(__dirname, 'src/**/*.entity{.ts,.js}')],
  migrations: [join(__dirname, 'src/migrations/*{.ts,.js}')],
  synchronize: false, // 👈 nunca en producción
  extra: {
    ssl: { rejectUnauthorized: false },
    connectionLimit: 2,
    waitForConnections: true,
    queueLimit: 0,
  },
});
