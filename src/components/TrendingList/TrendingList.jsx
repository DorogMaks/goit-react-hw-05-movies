import PropTypes from 'prop-types';
import { MovieLink } from './MovieLink/MovieLink';

export const TrendingList = ({ moviesData }) => {
  return (
    <ul>
      {moviesData.map(({ id, original_title, poster_path }) => (
        <MovieLink
          key={id}
          movieId={id}
          posterPath={poster_path}
          title={original_title}
        />
      ))}
    </ul>
  );
};

TrendingList.propTypes = {
  moviesData: PropTypes.array.isRequired,
};
