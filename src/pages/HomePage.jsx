import MoviesList from 'components/MoviesList/MoviesList';
import { getTrendingMovies } from 'Services/Api';
import { useState, useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';

import { Text } from 'components/Text/Text.styled';
import { SectionMain } from 'components/SectionMain/SectionMain.styled';
import { Container } from '../components/Container/Container.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    setIsLoading(true);
    try {
      const { results } = await getTrendingMovies();

      setMovies(results);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <SectionMain>
      <Container>
        {isLoading && (
          <ThreeDots
            height="10"
            width="300"
            radius="9"
            color="#370f9b"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        )}
        {error && <Text>Ups... Something went wrong - {error}!</Text>}
        {movies && <MoviesList movies={movies} />}
      </Container>
    </SectionMain>
  );
};

export default HomePage;
