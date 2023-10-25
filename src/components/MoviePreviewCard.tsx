import { Link } from 'react-router-dom';

import { apiImagesPosterPath } from '../api/themoviedb';
import HeartSvg from '../assets/heart.svg';
import { MoviePreview } from '../interfaces';
import { useMoviesStore } from '../store/movies';

interface Props {
  movie: MoviePreview;
}

export const MoviePreviewCard = ({ movie }: Props) => {
  const favorites = useMoviesStore((state) => state.favorites);
  const isFavorite = favorites.includes(movie.id);

  return (
    <Link to={`/movie/${movie.id}`} title={movie.title}>
      <div className='relative max-w-[185px] rounded-[5px] bg-slate-500 text-center text-white'>
        {isFavorite && (
          <div className='absolute left-0 top-0 h-7 w-7 rounded-[5px] bg-amber-300 p-1'>
            <img src={HeartSvg} alt='Fav' />
          </div>
        )}
        <div className='overflow-hidden rounded-[5px]'>
          <img src={apiImagesPosterPath + movie.poster_path} alt={movie.title} />
        </div>
        <h4 className='w-full overflow-hidden text-ellipsis whitespace-nowrap px-1 font-bold'>
          {movie.title}
        </h4>
        <span className='text-xs'>{movie.release_date}</span>
      </div>
    </Link>
  );
};
