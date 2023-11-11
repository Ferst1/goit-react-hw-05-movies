import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieCast } from 'API';
import NotFound from 'components/NotFound/NotFound';
import Error from 'components/Error/Error';
import Loader from 'components/Loader/Loader';
import {
  CastWrap,
  CastList,
  CastListItem,
  CastImage,
  CastName,
} from './Cast.styled';

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const defaultImg = `https://i.pinimg.com/564x/01/0c/b2/010cb2c89b8924d966b4369c0142a6cd.jpg`;

  useEffect(() => {
    if (!movieId) return;
    fetchMovieCast(movieId)
      .then(({ cast }) => {
        if (cast.length === 0) {
          setIsEmpty(true);
          return;
        }
        setCasts(cast);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(setIsloading(false));
  }, [movieId]);

  return (
    <CastWrap>
      {isLoading && <Loader />}
      {isEmpty && <NotFound />}
      {error && <Error error={error} />}
      <CastList>
        {casts &&
          casts.map(cast => (
            <CastListItem key={cast.id}>
              <CastImage
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w200${cast.profile_path}`
                    : defaultImg
                }
                width={250}
                alt={`${cast.name}`}
              />
              <CastName>{cast.name}</CastName>
            </CastListItem>
          ))}
      </CastList>
    </CastWrap>
  );
};

export default Cast;
