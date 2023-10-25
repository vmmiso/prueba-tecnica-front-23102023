import { Pagination } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { MoviesPreviewGrid } from '../components';
import { SearchForm } from '../components/SearchForm';
import { useFetchSearchMovies } from '../hooks';

const SearchMoviesPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const pageParam = searchParams.get('page') || '1';
  const page = /^\d+$/.test(pageParam) ? parseInt(pageParam) : 1;
  const query = searchParams.get('query') || '';

  const { data: moviesData, isLoading, isError } = useFetchSearchMovies(query, page);

  function handlePageChange(event: React.ChangeEvent<unknown>, value: number) {
    event.preventDefault();
    navigate({
      pathname: '/search',
      search: `?query=${query}&page=${value}`,
    });
  }

  if (isLoading) return <div>Loading...</div>;

  if (isError || !moviesData) return <div>Error</div>;

  return (
    <>
      <h2 className='text-xl font-bold'>Search movies</h2>
      <SearchForm query={query} autoFocus />
      {query !== '' && (
        <>
          <MoviesPreviewGrid movies={moviesData.results} className='my-4' />{' '}
          {moviesData.total_pages !== 1 && (
            <div className='flex justify-center'>
              <Pagination
                onChange={handlePageChange}
                count={moviesData.total_pages}
                variant='outlined'
                shape='rounded'
                page={moviesData.page}
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default SearchMoviesPage;
