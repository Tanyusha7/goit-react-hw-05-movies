import MoviesList from 'components/MoviesList/MoviesList';
import { getTrendingMovies } from 'Services/Api';
import { useState, useEffect } from 'react';
import { Text } from 'components/Text/Text.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getMovies();
    // return () => {
    //   effect
    // };
  }, []);

  const getMovies = async () => {
    try {
      const { results } = await getTrendingMovies();

      setMovies(results);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      {error && <Text>Ups... Something went wrong - {error}!</Text>}
      <MoviesList movies={movies} />
    </>
  );
};

export default HomePage;
