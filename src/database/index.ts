import { Address, Restaurants } from 'src/database/entities';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { configs } from 'src/configs';
import { DATABASE_CONFIG_CONSTANTS } from 'src/constants';
import { DataSource, DataSourceOptions } from 'typeorm';

const {
  DATABASE: { type, host, port, username, password, database },
} = configs;

export const dbConfiguration: TypeOrmModuleOptions = {
  type: type,
  host,
  port,
  username,
  password,
  database,
  logging: true,
  ...DATABASE_CONFIG_CONSTANTS,
  entities: [Restaurants, Address],
};

export const connectionSource = new DataSource(
  dbConfiguration as DataSourceOptions,
);
