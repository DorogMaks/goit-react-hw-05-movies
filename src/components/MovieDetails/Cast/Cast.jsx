import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { Notification } from 'components/Notification/Notification';
import noPhoto from '../../../images/no-photo.jpg';

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
    return <Notification message="Ooops, something went wrong"></Notification>;

  if (status === 'resolved' && castData.length === 0)
    return <p>We don't have any cast information for this movie</p>;

  if (status === 'resolved')
    return (
      <ul>
        {castData.map(({ id, profile_path, name, character }) => {
          const poster = `https://image.tmdb.org/t/p/w500${profile_path}`;
          return (
            <li key={id}>
              <img
                src={profile_path ? poster : noPhoto}
                alt={name}
                width={230}
                height={345}
              />
              <h3>{name}</h3>
              <p>
                {character
                  ? `Character: ${character}`
                  : `Character is not specified`}
              </p>
            </li>
          );
        })}
      </ul>
    );
};
export default Cast;
