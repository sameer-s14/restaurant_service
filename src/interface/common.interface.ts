export interface IResponse<T = unknown> {
  status?: boolean;
  message?: string;
  data?: T | unknown;
}

export type ID<T> = T & { id: number };
