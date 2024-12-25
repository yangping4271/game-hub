import { useState, useEffect } from 'react';

export const useGenres = () => {
  const [genres, setGenres] = useState<string[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchGenres = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:3000/api/genres');
        const data = await response.json();
        setGenres(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGenres();
  }, []);

  return { genres, error, isLoading };
} 