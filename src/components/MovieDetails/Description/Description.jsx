import { Link, Outlet, useLocation } from 'react-router-dom';
import noPoster from '../../../images/no-poster.jpg';

const Description = ({
  movieDetails: {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  },
}) => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const poster = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <>
      <div>
        <img
          src={poster_path ? poster : noPoster}
          alt={original_title}
          width={245}
          height={368}
        />
        <div>
          <h2>{`${original_title} (${release_date.slice(0, 4)})`}</h2>
          <p>{`User Score: ${Math.round(vote_average * 10)}%`}</p>
          <div>
            <h3>Overview</h3>
            <p>{overview ?? 'Overview not found'}</p>
          </div>
          <div>
            <h3>Genres</h3>
            <p>
              {genres.length
                ? genres.map(genre => genre.name).join(', ')
                : 'Genres are not specified'}
            </p>
          </div>
        </div>
      </div>
      <ul>
        <li>
          <Link to="cast" state={{ from: backLinkHref }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: backLinkHref }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Description;
