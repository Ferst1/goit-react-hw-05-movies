import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';

const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYThhZDc3MjZkZTQ5ZTE4NmNkY2Q0ZDI5NDNmYmE4ZiIsInN1YiI6IjY1NDZhNmJhNWMwNzFiMDEwOTg2ZjRiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0-nbdYbpGetqHXvI-1FB0LVLeN8C_gUHTEMH1uJZEQY',
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
