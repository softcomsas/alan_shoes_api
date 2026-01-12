"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const path_1 = require("path");
exports.default = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'b9vxllwktrradnra2dvv-mysql.services.clever-cloud.com',
    port: 3306,
    username: 'udxccuapv7oltnjr',
    password: 'Q8Uxvx0Ipb6UbtpW3VSz',
    database: 'b9vxllwktrradnra2dvv',
    entities: [(0, path_1.join)(__dirname, 'src/**/*.entity{.ts,.js}')],
    migrations: [(0, path_1.join)(__dirname, 'src/migrations/*{.ts,.js}')],
    synchronize: false,
    extra: {
        ssl: { rejectUnauthorized: false },
        connectionLimit: 2,
        waitForConnections: true,
        queueLimit: 0,
    },
});
//# sourceMappingURL=ormconfig.js.map