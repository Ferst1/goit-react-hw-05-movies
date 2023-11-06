import React, { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { useParams } from 'react-router-dom';
import { fetchData } from 'services/fetchMovie';
import { CardList } from './Card.styled';
import Notiflix from 'notiflix';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const pathUrl = `movie/${movieId}/credits`;

  useEffect(() => {
    setIsLoading(true);
    fetchData(pathUrl)
      .then(res => {
        return setCast(res.cast);
      })
      .catch(error => {
        error && Notiflix.Notify.failure(`Sorry, ${error}`);
      })
      .finally(setIsLoading(false));
  }, [pathUrl]);
  return (
    <div>
      {cast.length > 0 && (
        <CardList>
          {cast.map(cast => (
            <li key={cast.id}>
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                    : defaultImg
                }
                alt={cast.name}
                width="140"
                height="210"
              />
              <h4>{cast.name}</h4>
              <p>Character: {cast.character}</p>
            </li>
          ))}
        </CardList>
      )}
      {cast.length === 0 && <p>Sorry, there are no results</p>}
      {isLoading && <Loader />}
    </div>
  );
};

export default Cast;
