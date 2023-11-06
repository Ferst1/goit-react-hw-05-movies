import { Loader } from 'components/Loader/Loader';
import MovieCard from 'components/MovieCard/MovieCard';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchData } from 'services/fetchMovie';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';
import Notiflix from 'notiflix';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const pathUrl = `movie/${movieId}`;

  const location = useLocation();
  const goBackLink = useRef(location.state?.from ?? '/movies');
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    fetchData(pathUrl)
      .then(res => {
        return setMovie(res);
      })
      .catch(error => {
        error && Notiflix.Notify.failure(`Sorry, ${error}`);
      })
      .finally(setIsLoading(false));
  }, [pathUrl]);

  function onGoBack() {
    navigate(goBackLink.current);
  }
  return (
    movie !== null && (
      <div>
        <MovieCard movie={movie} onGoBack={onGoBack} />
        <AdditionalInfo />
        {isLoading && <Loader />}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    )
  );
};

export default MovieDetails;
