import React, { useState, useEffect } from 'react';
import { Link, useParams, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Cast from './Cast';
import Reviews from './Reviews';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`/movies/get-movie-details/${movieId}`)
      .then(response => setMovie(response.data))
      .catch(error => console.error(error));
  }, [movieId]);

  return (
    <div>
      {movie && (
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link> |{' '}
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          <Switch>
            <Route path="/movies/:movieId/cast" component={Cast} />
            <Route path="/movies/:movieId/reviews" component={Reviews} />
          </Switch>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
