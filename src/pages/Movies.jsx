import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMoviesByQuery } from 'API';
import MoviesList from 'components/MoviesList/MoviesList';
import MoviesSearchForm from 'components/MoviesSearchForm/MovieSearchForm';
import Error from 'components/Error/Error';
import NotFound from 'components/NotFound/NotFound';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;
    setIsloading(true);
    fetchMoviesByQuery({ query })
      .then(({ results }) => {
        if (results.length === 0) {
          setIsEmpty(true);
          setMovies([]);
          return;
        }
        setMovies(results);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(setIsloading(false), setIsEmpty(false));
  }, [query]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <>
      <MoviesSearchForm handleSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {error && <Error error={error} />}
      {isEmpty && <NotFound />}
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
