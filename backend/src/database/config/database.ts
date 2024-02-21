import { Dialect, Options } from 'sequelize';

const config: Options = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '123456',
  database: process.env.DB_NAME || 'RECIPES_APP',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  dialect: process.env.DB_DIALECT as Dialect || 'mysql',
  logging: false,
};

export = config;
