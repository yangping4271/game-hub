import { useFetch } from './useFetch';

export const useGenres = () => {
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
  const { data: genres, error, isLoading } = useFetch<string[]>(`${apiUrl}/genres`, []);
  return { genres, error, isLoading };
} 