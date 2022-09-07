export interface UseFetchInterface<T> {
  data?: T;
  error: unknown;
  isLoading: boolean;
  refetch: () => void;
  status: 'idle' | 'error' | 'loading' | 'success';
}
