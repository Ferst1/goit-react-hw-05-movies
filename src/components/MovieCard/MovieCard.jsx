import { Button, Card } from './MovieCard.styled';
import PropTypes from 'prop-types';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieCard = ({ movie, onGoBack }) => {
  const { title, release_date, poster_path, overview, genres, vote_average } =
    movie || {};
  return (
    <>
      <Button type="button" onClick={onGoBack}>
        Go back
      </Button>
      <Card>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          width={250}
          alt="poster"
        />
        <div>
          <h2>
            {title}( {release_date.substr(0, 4)} )
          </h2>
          <p>User score: {Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <ul>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </Card>
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    vote_average: PropTypes.number.isRequired,
  }),
};

export default MovieCard;
