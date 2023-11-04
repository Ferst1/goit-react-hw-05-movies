import axios from 'axios';

const apiKey = 'ca8ad7726de49e186cdcd4d2943fba8f'; // Замените 'YOUR_API_KEY' на ваш настоящий API-ключ

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: apiKey,
  },
});

export default api;
