import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import { apiConfig } from './api.config';

const api = axios.create(apiConfig);

/**
 *
 * @template T - type.
 * @param {AxiosResponse<T>} response - axios response.
 * @returns {T} - expected object.
 */
const success = <T>(response: AxiosResponse<T>): T => {
  return response.data;
};

const error = (err: AxiosError<Error>): AxiosError<Error> => {
  if (err.response?.status === 401 || err.response?.status === 403) {
  }

  throw err;
};

/**
 * HTTP GET method, used to fetch data `statusCode`: 200.
 *
 * @access public
 * @template T - `TYPE`: expected object.
 * @param {string} url - endpoint you want to reach.
 * @param {AxiosRequestConfig} [config] - axios request configuration.
 * @returns {Promise<T>} HTTP `axios` response payload.
 */
export const get = <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  return api.get(url, config).then(success).catch(error);
};

/**
 * HTTP POST method `statusCode`: 201 Created.
 *
 * @access public
 * @template T - `TYPE`: expected object.
 * @template B - `BODY`: body request object.
 * @param {string} url - endpoint you want to reach.
 * @param {B} data - payload to be send as the `request body`,
 * @param {AxiosRequestConfig} [config] - axios request configuration.
 * @returns {Promise<T>} - HTTP [axios] response payload.
 */
export const post = <T, B>(
  url: string,
  data?: B,
  config?: AxiosRequestConfig
): Promise<T> => {
  return api.post(url, data, config).then(success).catch(error);
};

/**
 * HTTP PUT method.
 *
 * @access public
 * @template T - `TYPE`: expected object.
 * @template B - `BODY`: body request object.
 * @param {string} url - endpoint you want to reach.
 * @param {B} data - payload to be send as the `request body`,
 * @param {AxiosRequestConfig} [config] - axios request configuration.
 * @returns {Promise<T>} - HTTP [axios] response payload.
 */
export const put = <T, B>(
  url: string,
  data?: B,
  config?: AxiosRequestConfig
): Promise<T> => {
  return api.put(url, data, config).then(success).catch(error);
};

/**
 * HTTP DELETE method, `statusCode`: 204 No Content.
 *
 * @access public
 * @template T - `TYPE`: expected object.
 * @param {string} url - endpoint you want to reach.
 * @param {AxiosRequestConfig} [config] - axios request configuration.
 * @returns {Promise<T>} - HTTP [axios] response payload.
 */
export const del = <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  return api.delete(url, config).then(success).catch(error);
};
