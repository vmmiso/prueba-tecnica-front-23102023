import { useQuery } from '@tanstack/react-query';

import api from '../api/themoviedb';
import { MovieDetails } from '../interfaces';

async function fetchMovieDetails(id: string) {
  const { data } = await api.get<MovieDetails>(`/movie/${id}?language=es-ES`);
  return data;
}

export function useFetchMovieDetails(id: string) {
  return useQuery<MovieDetails, Error>({
    queryKey: ['movieDetails', id],
    queryFn: () => fetchMovieDetails(id),
  });
}
