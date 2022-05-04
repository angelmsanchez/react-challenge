export interface PageResponseInterface<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}
