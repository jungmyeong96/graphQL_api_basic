"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeORMConfig = void 0;
exports.typeORMConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '504201',
    database: 'proj_emp',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true
};
//# sourceMappingURL=typeorm.config.js.map