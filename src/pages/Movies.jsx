import React, { useEffect, useState } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import { useSearchParams } from 'react-router-dom';
import { fetchData } from 'services/fetchMovie';
import MoviesList from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import Notiflix from 'notiflix';

const Movies = () => {
  const [searchMovie, setSearchMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const pathUrl = `search/movie?query=${query}`;

  useEffect(() => {
    if (!query) {
      return;
    }
    setIsLoading(true);
    fetchData(pathUrl)
      .then(res => {
        return res.results.length !== 0
          ? setSearchMovie(res.results)
          : Notiflix.Notify.failure(`Sorry, error`);
      })
      .catch(error => {
        error && Notiflix.Notify.failure(`Sorry, ${error}`);
      })
      .finally(setIsLoading(false));
  }, [pathUrl, query]);

  return (
    <div>
      <SearchForm setSearchParams={setSearchParams} />
      <MoviesList movies={searchMovie} />
      {isLoading && <Loader />}
    </div>
  );
};

export default Movies;
