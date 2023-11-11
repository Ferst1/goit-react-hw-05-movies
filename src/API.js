import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';

const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDI5ZGVlOTNiZTJjYThhZDQ2YmYyMWRlMTQ5ZWU1MiIsInN1YiI6IjY0ZGI0NGQ1ZjQ5NWVlMDI5MzU2OTE1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X9DeGRwHeq0vI0Xl8w9Nwm04Y3Uo2f5aEe62rr6KFDE',
  },
};

export const fetchMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}trending/movie/day?language=en-US`,
    options
  );
  return data;
};

export const fetchMoviesByQuery = async ({ query }) => {
  const { data } = await axios.get(
    `${BASE_URL}search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  return data;
};

export const fetchMovieById = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${movieId}?language=en-US`,
    options
  );
  return data;
};

export const fetchMovieCast = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${movieId}/credits?language=en-US`,
    options
  );
  return data;
};

export const fetchMovieReview = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );
  return data;
};
