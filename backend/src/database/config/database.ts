import { Dialect, Options } from 'sequelize';

const config: Options = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '123456',
  database: 'RECIPES_APP',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  dialect: process.env.DB_DIALECT as Dialect || 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

export = config;
