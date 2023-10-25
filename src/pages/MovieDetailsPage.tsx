import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { apiImagesBackdropPath } from '../api/themoviedb';
import { MovieDetailsList, RatingForm } from '../components';
import AddFavoriteButton from '../components/AddFavoriteButton';
import { useFetchMovieDetails } from '../hooks';
import { useMoviesStore } from '../store/movies';

const ValidateMovie = () => {
  const { id } = useParams();
  if (id && /^\d+$/.test(id)) return <MovieDetailsPage id={id} />;
  return <div>Invalid user id</div>;
};

interface MovieDetailsProps {
  id: string;
}

const MovieDetailsPage = ({ id }: MovieDetailsProps) => {
  const { data: movie, isLoading, isError } = useFetchMovieDetails(id);
  const addVisited = useMoviesStore((state) => state.addVisited);

  useEffect(() => {
    addVisited(Number(id));
  }, [id, addVisited]);

  if (isLoading) return <div>Loading...</div>;

  if (isError || !movie) return <div>Error</div>;

  return (
    <>
      <img
        src={apiImagesBackdropPath + movie.backdrop_path}
        alt={movie.title}
        className='h-[20vh] w-full object-cover'
      />
      <h2 className='text-2xl font-bold underline'>{movie.title}</h2>
      <MovieDetailsList movie={movie} />
      <hr className='my-2' />
      <p>Your personal rating:</p>
      <RatingForm movieId={movie.id} />
      <AddFavoriteButton movieId={movie.id} />
    </>
  );
};

export default ValidateMovie;
