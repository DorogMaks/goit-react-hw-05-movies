import { Loader } from 'components/Loader/Loader';
import { Notification } from 'components/Notification/Notification';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsData, setReviewsData] = useState([]);
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const res = await fetchReviews(movieId, controller);
        setReviewsData(res);
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

  if (status === 'resolved' && reviewsData.length === 0)
    return <p>We don't have any cast information for this movie</p>;

  if (status === 'resolved')
    return (
      <ul>
        {reviewsData.map(({ id, author, content }) => (
          <li key={id}>
            <h3>{`Author: ${author}`}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    );
};

export default Reviews;
