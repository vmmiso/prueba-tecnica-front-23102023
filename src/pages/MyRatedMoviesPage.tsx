import { Pagination } from '@mui/material';
import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { MoviesPreviewGrid } from '../components';
import { useFetchMyRatedMovies } from '../hooks';

const MyRatedMoviesPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const pageParam = searchParams.get('page') || '1';
  const page = /^\d+$/.test(pageParam) ? parseInt(pageParam) : 1;

  const { data: moviesData, isLoading, isError } = useFetchMyRatedMovies(page);

  function handlePageChange(event: React.ChangeEvent<unknown>, value: number) {
    event.preventDefault();
    navigate({
      pathname: '/mylist',
      search: `?page=${value}`,
    });
  }

  if (isLoading) return <div>Loading...</div>;

  if (isError || !moviesData) return <div>Error</div>;

  return (
    <>
      <h2 className='text-xl font-bold'>My rated movies</h2>
      <MoviesPreviewGrid movies={moviesData.results} className='my-4' />
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
  );
};

export default MyRatedMoviesPage;
