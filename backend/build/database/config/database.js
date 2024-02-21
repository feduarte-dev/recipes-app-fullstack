"use strict";
// import * as pg from 'pg';
const config = {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '123456',
    database: process.env.DB_NAME || 'RECIPES_APP',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    dialect: process.env.DB_DIALECT || 'mysql',
    // dialectModule: pg,
    logging: false,
};
module.exports = config;
//# sourceMappingURL=database.js.map