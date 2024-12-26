import { Game } from '../models/Game';
import { useFetch } from './useFetch';

export const usePlatforms = () => {
  const { data: games, error, isLoading } = useFetch<Game[]>('http://localhost:3000/api/games', []);
  
  // 获取所有平台，处理逗号分隔的情况
  const platforms = Array.from(new Set(
    games
      .flatMap(game => game.platform?.split(',').map(p => p.trim()))
      .filter(Boolean)
  )).sort();
  
  return { platforms, error, isLoading };
} 