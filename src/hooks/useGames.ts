import { Game } from '../models/Game';
import { useFetch } from './useFetch';

export const useGames = (selectedGenre?: string) => {
  const { data: games, error, isLoading } = useFetch<Game[]>('http://localhost:3000/api/games', []);
  
  const filteredGames = selectedGenre
    ? games.filter(game => game.genre === selectedGenre)
    : games;
    
  return { games: filteredGames, error, isLoading };
} 