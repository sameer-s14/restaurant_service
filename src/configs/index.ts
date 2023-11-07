import { getEnvVariables } from './../utils/common.utils';
export const configs = {
  DATABASE: {
    type: getEnvVariables('DB_TYPE') as 'postgres',
    host: getEnvVariables('DB_HOST'),
    port: +getEnvVariables('DB_PORT'),
    username: getEnvVariables('DB_USER'),
    password: getEnvVariables('DB_PASSWORD'),
    database: getEnvVariables('DB_NAME'),
  },
};
