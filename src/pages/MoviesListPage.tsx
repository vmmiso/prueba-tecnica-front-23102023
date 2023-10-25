import Pagination from '@mui/material/Pagination';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { MoviesPreviewGrid } from '../components';
import { useFetchPopularMovies } from '../hooks';
import { useMoviesStore } from '../store/movies';

const MoviesListPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const pageParam = searchParams.get('page') || '1';
  const page = /^\d+$/.test(pageParam) ? parseInt(pageParam) : 1;
  const recentlyVisited = useMoviesStore((state) => state.recentlyVisited);
  const { data: popularMoviesData, isLoading, isError } = useFetchPopularMovies(page);

  function handlePageChange(event: React.ChangeEvent<unknown>, value: number) {
    event.preventDefault();
    navigate({
      pathname: '/',
      search: `?page=${value}`,
    });
  }

  if (isLoading) return <div>Loading...</div>;

  if (isError || !popularMoviesData) return <div>Error</div>;

  return (
    <>
      <h2 className='text-xl font-bold'>Popular movies</h2>
      <MoviesPreviewGrid movies={popularMoviesData.results} className='my-4' />
      <div className='flex justify-center'>
        <Pagination
          onChange={handlePageChange}
          count={500}
          variant='outlined'
          shape='rounded'
          page={popularMoviesData.page}
        />
      </div>
      {recentlyVisited.length > 0 && (
        <>
          <h2 className='text-xl font-bold'>Recently visited movies</h2>
          {/* TODO: fetch data */}
          {recentlyVisited
            .slice(0)
            .reverse()
            .map((movieId) => movieId + ', ')}
        </>
      )}
    </>
  );
};

export default MoviesListPage;
