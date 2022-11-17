import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { Notification } from 'components/Notification/Notification';
import { Author, ReviewItem, ReviewList } from './Reviews.styled';

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
    return <p>We don't have any reviews for this movie</p>;

  if (status === 'resolved')
    return (
      <ReviewList>
        {reviewsData.map(({ id, author, content }) => (
          <ReviewItem key={id}>
            <Author>{`Author: ${author}`}</Author>
            <p>{content}</p>
          </ReviewItem>
        ))}
      </ReviewList>
    );
};

export default Reviews;
