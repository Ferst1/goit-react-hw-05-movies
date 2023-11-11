import { useState, useEffect } from 'react';
import { fetchMovies } from 'API';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsloading(true);
    fetchMovies()
      .then(data => {
        setMovies(data.results);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(setIsloading(false));
  }, []);

  return (
    <>
      <h1>Trending Today</h1>
      {isLoading && <Loader />}
      {error && <Error error={error} />}
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
