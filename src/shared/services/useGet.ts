import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { UseFetchInterface } from '../interfaces';

async function get<TResponse>(endPoint: string): Promise<TResponse> {
  const { data } = await axios.get<TResponse>(`${endPoint}`);
  return data;
}

export function useGet<T>(query: string): UseFetchInterface<T> {
  return useQuery<T>(['get', query], () => get<T>(query));
}
