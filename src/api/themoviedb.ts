import axios from 'axios';

const api = axios.create({
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDAzMThjNDE2YTIwZTRmZWY1NGE2ZGFkMDhkOGZmMSIsInN1YiI6IjY1MzYzNjA1YzhhNWFjMDExY2YwY2YyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5KKQJ9ZF-ltlOPaMe0FixdAysZ2OqYYeCYU4yQn1RYI',
  },
  baseURL: 'https://api.themoviedb.org/3',
});

export const apiImagesPosterPath = 'https://image.tmdb.org/t/p/w185';
export const apiImagesBackdropPath = 'https://image.tmdb.org/t/p/original';

export default api;
