import { MoviePreview } from '../interfaces';
import { MoviePreviewCard } from './MoviePreviewCard';

interface MoviesPreviewGridProps {
  movies?: MoviePreview[];
  className?: string;
}

export const MoviesPreviewGrid = ({ movies = [], className = '' }: MoviesPreviewGridProps) => {
  if (movies.length === 0) return <span>No hay películas disponibles.</span>;

  return (
    <div className={`flex flex-wrap justify-center gap-2 sm:justify-normal ${className}`}>
      {movies.map((movie) => {
        return <MoviePreviewCard movie={movie} key={movie.id} />;
      })}
    </div>
  );
};
