import { config } from 'dotenv';
config({ path: '.env' });

export const getEnvVariables = (key: string) => {
  const value = process.env[key];
  if (!value) throw new Error(`Env variable ${key} not found`);
  return value;
};
