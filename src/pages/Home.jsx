import React, { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { fetchData } from 'services/fetchMovie';
import Notiflix from 'notiflix';

const pathUrl = 'trending/all/day';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchData(pathUrl)
      .then(res => {
        return setMovies(res.results);
      })
      .catch(error => {
        error && Notiflix.Notify.failure(`Sorry, ${error}`);
      })
      .finally(setIsLoading(false));
  }, []);

  return (
    <div>
      <h2>Trending Today</h2>
      <MoviesList movies={movies} />
      {isLoading && <Loader />}
    </div>
  );
};

export default Home;
