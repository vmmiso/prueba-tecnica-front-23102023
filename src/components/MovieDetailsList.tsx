import { MovieDetails } from '../interfaces';

interface Props {
  movie: MovieDetails;
}

export const MovieDetailsList = ({ movie }: Props) => {
  return (
    <ul>
      <li>
        <b>budget:</b> {movie.budget}
      </li>
      <li>
        <b>homepage:</b> {movie.homepage}
      </li>
      <li>
        <b>id:</b> {movie.id}
      </li>
      <li>
        <b>imdb_id:</b> {movie.imdb_id}
      </li>
      <li>
        <b>original_language:</b> {movie.original_language}
      </li>
      <li>
        <b>original_title:</b> {movie.original_title}
      </li>
      <li>
        <b>overview:</b> {movie.overview}
      </li>
      <li>
        <b>popularity:</b> {movie.popularity}
      </li>
      <li>
        <b>poster_path:</b> {movie.poster_path}
      </li>
      <li>
        <b>release_date:</b> {movie.release_date}
      </li>
      <li>
        <b>revenue:</b> {movie.revenue}
      </li>
      <li>
        <b>runtime:</b> {movie.runtime}
      </li>
      <li>
        <b>status:</b> {movie.status}
      </li>
      <li>
        <b>tagline:</b> {movie.tagline}
      </li>
      <li>
        <b>title:</b> {movie.title}
      </li>
      <li>
        <b>video:</b> {movie.video}
      </li>
      <li>
        <b>vote_average:</b> {movie.vote_average}
      </li>
      <li>
        <b>vote_count:</b> {movie.vote_count}
      </li>
    </ul>
  );
};
