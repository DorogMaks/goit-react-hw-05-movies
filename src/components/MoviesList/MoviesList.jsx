import PropTypes from 'prop-types';
import { MovieLink } from './MovieLink/MovieLink';

export const MoviesList = ({ moviesData }) => {
  return (
    <ul>
      {moviesData.map(({ id, original_title, poster_path }) => (
        <MovieLink
          key={id}
          movieId={id}
          poster={poster_path}
          title={original_title}
        />
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  moviesData: PropTypes.array.isRequired,
};
