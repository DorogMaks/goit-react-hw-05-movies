import { Loader } from 'components/Loader/Loader';
import { Notification } from 'components/Notification/Notification';
import { Container } from 'components/Shared/Container.styled';
import { Section } from 'components/Shared/Section.styled';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import Description from './Description/Description';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const [movieDetails, setMovieDetails] = useState({});
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!movieId) return;

    setStatus('pending');

    const controller = new AbortController();
    (async () => {
      try {
        const res = await fetchMovieDetails(movieId, controller);
        setMovieDetails(res);
        setStatus('resolved');
      } catch (error) {
        console.error(error.message);
        setStatus('rejected');
      }
    })();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <Section>
      <Container>
        <Link to={backLinkHref}>{'< Go back'}</Link>
        {status === 'pending' && <Loader />}
        {status === 'rejected' && (
          <Notification message="Ooops, something went wrong" />
        )}
        {status === 'resolved' && movieDetails && (
          <Description movieDetails={movieDetails} />
        )}
      </Container>
    </Section>
  );
};

export default MovieDetails;
