import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MovieDetailsList from 'components/MovieDetailsList/MovieDetailsList';
import Error from 'components/Error/Error';
import Loader from 'components/Loader/Loader';
import { fetchMovieById } from 'API';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    setIsloading(true);
    fetchMovieById(movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(setIsloading(false));
  }, [movieId, error]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <Error error={error} />}
      {movie && <MovieDetailsList movie={movie} />}
    </>
  );
};

export default MovieDetails;
