import { config } from 'dotenv';
config({ path: '.env' });

export const getEnvVariables = (key: string) => {
  const value = process.env[key];
  if (!value) throw new Error(`Env variable ${key} not found`);
  return value;
};

export function setSuccessResponse(data: unknown = null, message = 'Success') {
  return {
    status: true,
    message,
    data,
  };
}

export function setErrorResponse(message = 'Error', data = null) {
  return {
    status: false,
    message,
    data,
  };
}

export function setInitialResponse() {
  return {
    status: false,
    message: '',
    data: null,
  };
}
