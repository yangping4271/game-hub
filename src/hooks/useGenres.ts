import { useFetch } from './useFetch';

export const useGenres = () => {
  const { data: genres, error, isLoading } = useFetch<string[]>('http://localhost:3000/api/genres', []);
  return { genres, error, isLoading };
} 