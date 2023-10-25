import { useQuery } from '@tanstack/react-query';

import api from '../api/themoviedb';
import { MoviesPage } from '../interfaces';

async function fetchMyRatedMovies(page: number) {
  const { data } = await api.get<MoviesPage>(
    `/account/20612109/rated/movies?language=es-ES&page=${page}&sort_by=created_at.asc`,
  );
  return data;
}

export function useFetchMyRatedMovies(page: number) {
  return useQuery<MoviesPage, Error>({
    queryKey: ['myRatedMovies', page],
    queryFn: () => fetchMyRatedMovies(page),
  });
}
