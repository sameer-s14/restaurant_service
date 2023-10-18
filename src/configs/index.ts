import { getEnvVariables } from './../utils/common.utils';
export const configs = {
  DATABASE: {
    type: getEnvVariables('DATABASE_TYPE'),
    host: <string>getEnvVariables('DATABASE_HOST'),
    port: <number>+getEnvVariables('DATABASE_PORT'),
    username: <string>getEnvVariables('DATABASE_USER'),
    password: <string>getEnvVariables('DATABASE_PASSWORD'),
    database: <string>getEnvVariables('DATABASE_NAME'),
  },
};
