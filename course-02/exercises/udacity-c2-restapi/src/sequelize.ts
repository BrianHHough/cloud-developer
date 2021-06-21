// the library from npm
import {Sequelize} from 'sequelize-typescript';
// import configs from config file
import { config } from './config/config';

// specifiy we want config.postgress items from that variable in the config.ts file 
const c = config.dev;

// Instantiate new Sequelize instance!
export const sequelize = new Sequelize({
  "username": c.username,
  "password": c.password,
  "database": c.database,
  "host":     c.host,

  dialect: 'postgres',
  storage: ':memory:',
});

