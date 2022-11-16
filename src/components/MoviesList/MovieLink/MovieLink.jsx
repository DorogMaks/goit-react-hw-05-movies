import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import noPoster from '../../../images/no-poster.jpg';

export const MovieLink = ({ movieId, poster, title }) => {
  const location = useLocation();
  const movieLink = `/movies/${movieId}`;

  return (
    <li>
      <Link to={movieLink} state={{ from: location }}>
        <img
          src={poster ? `https://image.tmdb.org/t/p/w500${poster}` : noPoster}
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
  title: PropTypes.string.isRequired,
  poster: PropTypes.string,
};
