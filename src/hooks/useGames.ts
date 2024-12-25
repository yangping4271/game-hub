import { Game } from '../models/Game';
import { useFetch } from './useFetch';

export const useGames = () => {
  const { data: games, error, isLoading } = useFetch<Game[]>('http://localhost:3000/api/games', []);
  return { games, error, isLoading };
} 