import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const DATABASE_CONFIG_CONSTANTS = {
  retryAttempts: 3,
  retryDelay: 3000,
  entities: [],
  migrationsTableName: 'migrations', //-only if you need migration table name different from "migrations".
  migrations: ['dist/database/migrations/*.js'], // - list of migrations need to be loaded by TypeORM
  namingStrategy: new SnakeNamingStrategy(),
};

export const ENV_FILE_PATH = '.env';

export const enum ENTITIES {
  RESTAURANT = 'restaurant',
  USER = 'user',
}
