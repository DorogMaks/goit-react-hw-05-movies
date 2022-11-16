import { Loader } from 'components/Loader/Loader';
import { Notification } from 'components/Notification/Notification';
import { Container } from 'components/Shared/Container.styled';
import { Section } from 'components/Shared/Section.styled';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import notFound from '../../images/notFound.jpg';

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
        const movie = await fetchMovieDetails(movieId, controller);
        setMovieDetails(movie);
        setStatus('resolved');
        console.log(movie);
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
          <Notification message="Ooops, something went wrong">
            <img src={notFound} alt="not found" width="280px" />
          </Notification>
        )}
        {status === 'resolved' && movieDetails && <div>MovieDetailsCard</div>}
      </Container>
    </Section>
  );
};
export default MovieDetails;
