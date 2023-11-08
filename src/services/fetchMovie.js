const BASE_URL = 'https://api.themoviedb.org/3/';

export async function fetchData(pathUrl) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYThhZDc3MjZkZTQ5ZTE4NmNkY2Q0ZDI5NDNmYmE4ZiIsInN1YiI6IjY1NDZhNmJhNWMwNzFiMDEwOTg2ZjRiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0-nbdYbpGetqHXvI-1FB0LVLeN8C_gUHTEMH1uJZEQY',
    },
  };
  return await fetch(`${BASE_URL}${pathUrl}`, options).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
