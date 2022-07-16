import { PathLike } from 'fs';

export const apiConfig = {
  returnRejectedPromiseOnError: true,
  timeout: 30000,
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  paramsSerializer: (params: PathLike): string => JSON.stringify(params),
};
