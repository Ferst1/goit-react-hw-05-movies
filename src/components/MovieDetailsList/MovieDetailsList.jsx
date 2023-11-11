import { useLocation, Outlet } from 'react-router-dom';
import { useRef, Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import {
  Container,
  MovieImage,
  Title,
  Score,
  Overview,
  Genres,
  Genre,
  AdditionalInfo,
  InfoLink,
  GoBackLink,
  MovieInfo,
  MovieDesc,
} from './MovieDetailsList.styled';

const MovieDetailsList = ({ movie }) => {
  const { overview, poster_path, original_title, vote_average, genres } = movie;
  const location = useLocation();
  const locationState = useRef(location.state?.from ?? '/');
  const defaultImg = `https://i.pinimg.com/564x/e4/71/1e/e4711e46bea5264eaab661d643285ff6.jpg`;

  return (
    <Container>
      <GoBackLink to={locationState.current}>Go back</GoBackLink>
      <MovieInfo>
        <MovieImage
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : defaultImg
          }
          width="500"
          alt={original_title}
        />
        <MovieDesc>
          <Title>{original_title}</Title>
          <Score>User score: {Math.round(Number(vote_average) * 10)} %</Score>
          <Overview>{overview}</Overview>
          <Genres>
            Genres:
            {genres.map(genre => (
              <Genre key={genre.id}>{genre.name}</Genre>
            ))}
          </Genres>
        </MovieDesc>
      </MovieInfo>
      <AdditionalInfo>
        <h3>Additional information</h3>
        <ul>
          <li>
            <InfoLink to="cast">Cast</InfoLink>
          </li>
          <li>
            <InfoLink to="reviews">Reviews</InfoLink>
          </li>
        </ul>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </AdditionalInfo>
    </Container>
  );
};

export default MovieDetailsList;
