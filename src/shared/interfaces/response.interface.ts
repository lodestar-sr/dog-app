/**
 * Key must be a static string
 * */
export type ResponseInterface<T> = {
  message: T;
  success: boolean;
};
