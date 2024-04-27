import axios, { AxiosInstance } from 'axios';

/**
 * This factory function returns an Axios instance that is
 * configured to interact with the backend APIs.
 */
export function createAPIClient(): AxiosInstance {
  const client = axios.create({
    xsrfHeaderName: 'X-CSRFToken', // Django CSRF Header
    xsrfCookieName: 'csrftoken', // Django CSRF Cookie
  });

  return client;
}
