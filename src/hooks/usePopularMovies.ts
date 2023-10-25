import { useQuery } from '@tanstack/react-query';

import api from '../api/themoviedb';
import { MoviesPage } from '../interfaces';

async function fetchPopularMovies(page: number) {
  const { data } = await api.get<MoviesPage>(`/movie/popular?language=es-ES&page=${page}`);
  return data;
}

export function useFetchPopularMovies(page: number) {
  return useQuery<MoviesPage, Error>({
    queryKey: ['popularMovies', page],
    queryFn: () => fetchPopularMovies(page),
  });
}
