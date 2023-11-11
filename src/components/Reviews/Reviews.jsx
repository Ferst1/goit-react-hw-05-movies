import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieReview } from 'API';
import Error from 'components/Error/Error';
import NotFound from 'components/NotFound/NotFound';
import Loader from 'components/Loader/Loader';
import { ReviewsWrap, ReviewsList, ReviewAutor } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    fetchMovieReview(movieId)
      .then(({ results }) => {
        if (results.length === 0) {
          setIsEmpty(true);
          return;
        }
        setReviews(results);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(setIsloading(false));
  }, [movieId]);

  return (
    <ReviewsWrap>
      {isLoading && <Loader />}
      {isEmpty && <NotFound />}
      {error && <Error error={error} />}
      <ReviewsList>
        {reviews &&
          reviews.map(review => (
            <li key={review.id}>
              <ReviewAutor>{review.author}</ReviewAutor>
              {review.content}
            </li>
          ))}
      </ReviewsList>
    </ReviewsWrap>
  );
};

export default Reviews;
