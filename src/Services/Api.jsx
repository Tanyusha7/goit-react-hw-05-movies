import axios from 'axios';

const API_KEY = '3fd15b48446eede94fd21b39e1e3acac';
const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';
const BASE_URL2 = 'https://api.themoviedb.org/3/search/movie';

export const getTrendingMovies = async () => {
  //   try {
  const { data } = await axios.get(`${BASE_URL}?api_key=${API_KEY}`);
  console.log(data);
  return data;
  //   } catch (error) {
  //     console.log(error);
  //   }
};

export const getMoviesByQuery = async query => {
  const { data } = await axios.get(
    `${BASE_URL2}?query=${query}&api_key=${API_KEY}`
  );
  //   console.log(data);
  return data;
};
