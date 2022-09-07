import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';

export function InterceptorService(): void {
  axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      return {
        ...config,
        baseURL: 'https://swapi.dev/api/',
        headers: {
          ...config.headers,
        },
      };
    },
    (error: Record<string, unknown>) => error,
  );

  axios.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      return Promise.reject(error);
    },
  );
}
