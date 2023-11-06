import { config } from 'dotenv';
import { IResponse } from 'src/interface';
config({ path: '.env' });

export const getEnvVariables = (key: string) => {
  const value = process.env[key];
  if (!value) throw new Error(`Env variable ${key} not found`);
  return value;
};

export function setSuccessResponse(
  data = null,
  message = 'Success',
): IResponse {
  return {
    status: true,
    message,
    data,
  };
}

export function setErrorResponse(message = 'Error', data = null): IResponse {
  return {
    status: false,
    message,
    data,
  };
}

export function setInitialResponse(): IResponse {
  return {
    status: false,
    message: '',
    data: null,
  };
}
