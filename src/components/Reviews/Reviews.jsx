import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from 'services/fetchMovie';
import { Loader } from 'components/Loader/Loader';
import { ItemList } from './Reviews.styled';
import Notiflix from 'notiflix';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const pathUrl = `movie/${movieId}/reviews`;

  useEffect(() => {
    setIsLoading(true);
    fetchData(pathUrl)
      .then(res => {
        return setReviews(res.results);
      })
      .catch(error => {
        error && Notiflix.Notify.failure(`Sorry, ${error}`);
      })
      .finally(setIsLoading(false));
  }, [pathUrl]);
  return (
    <div>
      {reviews.length === 0 && <p>We don't have any reviews</p>}
      {reviews.length > 0 && (
        <ItemList>
          {reviews.map(review => (
            <li key={review.id}>
              <h5>Author: {review.author}</h5>
              <p>{review.content}</p>
            </li>
          ))}
        </ItemList>
      )}
      {isLoading && <Loader />}
    </div>
  );
};

export default Reviews;
