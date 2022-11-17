import PropTypes from 'prop-types';
import { MovieLink } from './MovieLink/MovieLink';
import { MoviesListStyled } from './MoviesList.styled';

export const MoviesList = ({ moviesData }) => {
  return (
    <MoviesListStyled>
      {moviesData.map(({ id, original_title, poster_path }) => (
        <MovieLink
          key={id}
          movieId={id}
          posterPath={poster_path}
          title={original_title}
        />
      ))}
    </MoviesListStyled>
  );
};

MoviesList.propTypes = {
  moviesData: PropTypes.array.isRequired,
};
