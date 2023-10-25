import { useMoviesStore } from '../store/movies';

interface Props {
  movieId: number;
}

const AddFavoriteButton = ({ movieId }: Props) => {
  const handleFavorite = useMoviesStore((state) => state.handleFavorite);
  const favorites = useMoviesStore((state) => state.favorites);
  const isFavorite = favorites.includes(movieId);

  return (
    <button
      className={`mt-4 rounded px-1 ${isFavorite ? 'bg-slate-200' : 'bg-slate-400 text-white'}`}
      onClick={() => handleFavorite(movieId)}
    >
      {isFavorite ? 'Del fav' : 'Add fav'}
    </button>
  );
};

export default AddFavoriteButton;
