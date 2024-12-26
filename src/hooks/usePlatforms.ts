import { Game } from '../models/Game';
import { useFetch } from './useFetch';

export const usePlatforms = () => {
  const { data: games, error, isLoading } = useFetch<Game[]>('http://localhost:3000/api/games', []);
  
  // 获取所有不重复的平台
  const platforms = Array.from(new Set(games.map(game => game.platform).filter(Boolean)));
  
  return { platforms, error, isLoading };
} 