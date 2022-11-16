import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import noPoster from '../../../images/no-poster.jpg';

export const MovieLink = ({ movieId, posterPath, title }) => {
  const location = useLocation();
  const movieLink = `/movies/${movieId}`;
  const poster = `https://image.tmdb.org/t/p/w500${posterPath}`;

  return (
    <li>
      <Link to={movieLink} state={{ from: location }}>
        <img
          src={posterPath ? poster : noPoster}
          alt={title}
          width={230}
          height={345}
        />
        {title}
      </Link>
    </li>
  );
};

MovieLink.propTypes = {
  movieId: PropTypes.number.isRequired,
  posterPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
