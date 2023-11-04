import React, { useState, useEffect } from 'react';
import api from '../api/api';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    api
      .get('/trending/movie/day')
      .then(response => setTrendingMovies(response.data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
