import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovies } from 'services/api';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Container } from 'components/Shared/Container.styled';
import { Section } from 'components/Shared/Section.styled';
import { Loader } from 'components/Loader/Loader';
import { Notification } from 'components/Notification/Notification';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [moviesData, setMoviesData] = useState([]);
  const [status, setStatus] = useState('idle');

  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (!searchQuery) return;

    setStatus('pending');

    const controller = new AbortController();

    (async () => {
      try {
        const res = await fetchMovies(searchQuery, controller);
        setMoviesData(res);
        setStatus('resolved');
      } catch (error) {
        console.error(error.message);
        setStatus('rejected');
      }
    })();

    return () => {
      controller.abort();
    };
  }, [searchQuery]);

  const onFormSubmit = searchValue => {
    setSearchParams(searchValue ? { query: searchValue } : {});
  };

  return (
    <Section>
      <Container>
        <SearchForm onFormSubmit={onFormSubmit} />
        {status === 'idle' && <p>{`Let's find some movies`}</p>}
        {status === 'pending' && <Loader />}
        {status === 'rejected' && (
          <Notification message="Ooops, something went wrong" />
        )}
        {status === 'resolved' && moviesData.length === 0 && (
          <Notification
            message={`Sorry, we did not find any movies for "${searchQuery}"`}
          />
        )}
        {status === 'resolved' && <MoviesList moviesData={moviesData} />}
      </Container>
    </Section>
  );
};

export default Movies;
