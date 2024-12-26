import { Game } from '../models/Game';
import { useFetch } from './useFetch';

export interface SortOption {
  value: keyof Game;
  order: 'asc' | 'desc';
}

export const useGames = (
  selectedGenre?: string, 
  selectedPlatform?: string,
  sortBy?: SortOption,
  searchText?: string
) => {
  const { data: games, error, isLoading } = useFetch<Game[]>('http://localhost:3000/api/games', []);
  
  let filteredGames = games.filter(game => {
    if (selectedGenre && game.genre !== selectedGenre) return false;
    if (selectedPlatform && !game.platform?.split(',').map(p => p.trim()).includes(selectedPlatform)) return false;
    if (searchText && !game.name.toLowerCase().includes(searchText.toLowerCase())) return false;
    return true;
  });

  // 排序
  if (sortBy) {
    filteredGames = [...filteredGames].sort((a, b) => {
      const aValue = a[sortBy.value];
      const bValue = b[sortBy.value];
      
      if (!aValue && !bValue) return 0;
      if (!aValue) return 1;
      if (!bValue) return -1;
      
      const modifier = sortBy.order === 'asc' ? 1 : -1;
      return aValue < bValue ? -1 * modifier : 1 * modifier;
    });
  }
    
  return { games: filteredGames, error, isLoading };
} 