import { useState, useEffect } from 'react';
import { Game } from '../models/Game';

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchGames = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:3000/api/games');
        const data = await response.json();
        setGames(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGames();
  }, []);

  return { games, error, isLoading };
} 