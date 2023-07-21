import MoviesList from 'components/MoviesList/MoviesList';
import { getTrendingMovies } from 'Services/Api';
import { useState, useEffect } from 'react';
import { Text } from 'components/Text/Text.styled';
import { SectionMain } from 'components/SectionMain/SectionMain.styled';
import { Container } from '../components/Container/Container.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getMovies();
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
    <SectionMain>
      <Container>
        {error && <Text>Ups... Something went wrong - {error}!</Text>}
        {movies && <MoviesList movies={movies} />}
      </Container>
    </SectionMain>
  );
};

export default HomePage;
