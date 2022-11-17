import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import noPoster from 'images/no-poster.jpg';
import {
  DescriptionContainer,
  LinksItem,
  LinksList,
  MovieDescription,
  MovieImage,
  MovieTitle,
  NavigationLink,
  Paragraph,
  ParagraphTitle,
} from './Description.styled';

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
      <DescriptionContainer>
        <MovieImage
          src={poster_path ? poster : noPoster}
          alt={original_title}
        />
        <MovieDescription>
          <Paragraph />
          <MovieTitle>
            {`${original_title} (${release_date.slice(0, 4)})`}
          </MovieTitle>
          <p>{`User Score: ${Math.round(vote_average * 10)}%`}</p>
          <Paragraph />
          <Paragraph>
            <ParagraphTitle>Overview</ParagraphTitle>
            <p>{overview ?? 'Overview not found'}</p>
          </Paragraph>
          <Paragraph>
            <ParagraphTitle>Genres</ParagraphTitle>
            <p>
              {genres.length
                ? genres.map(genre => genre.name).join(', ')
                : 'Genres are not specified'}
            </p>
          </Paragraph>
        </MovieDescription>
      </DescriptionContainer>
      <LinksList>
        <LinksItem>
          <NavigationLink to="cast" state={{ from: backLinkHref }}>
            Cast
          </NavigationLink>
        </LinksItem>
        <LinksItem>
          <NavigationLink to="reviews" state={{ from: backLinkHref }}>
            Reviews
          </NavigationLink>
        </LinksItem>
      </LinksList>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Description;

Description.propTypes = {
  movieDetails: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
  }).isRequired,
};
