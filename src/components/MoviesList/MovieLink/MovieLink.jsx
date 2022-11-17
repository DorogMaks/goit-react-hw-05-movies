import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import noPoster from 'images/no-poster.jpg';
import { MovieImage, MovieItem, MovieLinkStyled } from './MovieLink.styled';

export const MovieLink = ({ movieId, posterPath, title }) => {
  const location = useLocation();
  const movieLink = `/movies/${movieId}`;
  const poster = `https://image.tmdb.org/t/p/w500${posterPath}`;

  return (
    <MovieItem>
      <MovieLinkStyled to={movieLink} state={{ from: location }}>
        <MovieImage src={posterPath ? poster : noPoster} alt={title} />
        {title}
      </MovieLinkStyled>
    </MovieItem>
  );
};

MovieLink.propTypes = {
  movieId: PropTypes.number.isRequired,
  posterPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
