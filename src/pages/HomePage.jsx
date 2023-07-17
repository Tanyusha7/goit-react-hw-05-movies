import MoviesList from 'components/MoviesList/MoviesList';
import { getTrendingMovies } from 'Services/Api';
import { useState, useEffect } from 'react';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  // const [query, setQuery] = useState('');

  useEffect(() => {
    getMovies();
    // return () => {
    //   effect
    // };
  }, []);

  const getMovies = async () => {
    try {
      const { results } = await getTrendingMovies();
      console.log(results);
      setMovies(results);
    } catch (error) {
      console.log(error.message);
    }
  };

  // console.log(getMovies());

  // const getMoviesBySearchQuery = async ({ searchQuery }) => {
  //   try {
  //     const data = await getMoviesBySearchQuery({ query });
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  return (
    <>
      <MoviesList movies={movies} />
    </>
  );
};

export default HomePage;
