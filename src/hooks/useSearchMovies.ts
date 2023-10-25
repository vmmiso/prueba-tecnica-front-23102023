import { useQuery } from '@tanstack/react-query';

import api from '../api/themoviedb';
import { MoviesPage } from '../interfaces';

async function fetchSearchMovies(query: string, page: number) {
  const { data } = await api.get<MoviesPage>(
    `/search/movie?query=${query}&include_adult=false&language=es-ES&page=${page}`,
  );
  return data;
}

export function useFetchSearchMovies(query: string, page: number) {
  return useQuery<MoviesPage, Error>({
    queryKey: ['searchMovies', query, page],
    queryFn: () => fetchSearchMovies(query, page),
  });
}
