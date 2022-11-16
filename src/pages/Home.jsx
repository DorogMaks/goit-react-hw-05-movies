import { useState } from 'react';
import { useEffect } from 'react';
import { fetchTrending } from 'services/api';
import { Section } from 'components/Shared/Section.styled';
import { Container } from 'components/Shared/Container.styled';
import { Loader } from 'components/Loader/Loader';
import { Notification } from 'components/Notification/Notification';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        const res = await fetchTrending(controller);
        setMovies(res);
        setStatus('resolved');
      } catch (error) {
        console.error(error.message);
        setStatus('rejected');
      }
    })();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <Section>
      <Container>
        <h2>Trending today</h2>
        {status === 'pending' && <Loader />}
        {status === 'rejected' && (
          <Notification message="Ooops, something went wrong" />
        )}
        {status === 'resolved' && <MoviesList moviesData={movies} />}
      </Container>
    </Section>
  );
};

export default Home;
