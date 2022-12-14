import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { Notification } from 'components/Notification/Notification';
import noPhoto from 'images/no-photo.png';
import { ActorName, CastImage, CastItem, CastList } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [castData, setCastData] = useState([]);
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        const res = await fetchCast(movieId, controller);
        setCastData(res);
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

  if (status === 'pending') return <Loader />;

  if (status === 'rejected')
    return <Notification message="Ooops, something went wrong" />;

  if (status === 'resolved' && castData.length === 0)
    return <p>We don't have any cast information for this movie</p>;

  if (status === 'resolved')
    return (
      <CastList>
        {castData.map(({ id, profile_path, name, character }) => {
          const photo = `https://image.tmdb.org/t/p/w500${profile_path}`;

          return (
            <CastItem key={id}>
              <CastImage src={profile_path ? photo : noPhoto} alt={name} />
              <ActorName>{name}</ActorName>
              <p>
                {character
                  ? `Character: ${character}`
                  : `Character is not specified`}
              </p>
            </CastItem>
          );
        })}
      </CastList>
    );
};
export default Cast;
