import { Game } from '../models/Game';
import { useFetch } from './useFetch';

export const useGames = (selectedGenre?: string, selectedPlatform?: string) => {
  const { data: games, error, isLoading } = useFetch<Game[]>('http://localhost:3000/api/games', []);
  
  const filteredGames = games.filter(game => {
    if (selectedGenre && game.genre !== selectedGenre) return false;
    if (selectedPlatform && !game.platform?.split(',').map(p => p.trim()).includes(selectedPlatform)) return false;
    return true;
  });
    
  return { games: filteredGames, error, isLoading };
} 