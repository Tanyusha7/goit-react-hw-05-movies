import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'Services/Api';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import { Text } from 'components/Text/Text.styled';
import { SectionMain } from 'components/SectionMain/SectionMain.styled';
import { Container } from 'components/Container/Container.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(() => searchParams.get('query') ?? '');
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }
    const getMoviesBySearchQuery = async query => {
      try {
        const { results } = await getMoviesByQuery(query);

        if (results.length === 0) {
          setIsEmpty(true);
        } else {
          setIsEmpty(false);
        }
        setMovies(results);
        setError(null);
      } catch (error) {
        setError(error.message || error.code);
      }
    };
    getMoviesBySearchQuery(query);
  }, [query]);

  const handleSearchMovie = searchName => {
    setQuery(searchName);
  };

  return (
    <SectionMain>
      <Container>
        <SearchForm
          onSearchMovie={handleSearchMovie}
          setSearchParams={setSearchParams}
        />
        {error && <Text>Ups... Something went wrong - {error}!</Text>}
        {isEmpty ? (
          <Text>
            Sorry. We didn`t find nothing by your search query, try again!
          </Text>
        ) : (
          <MoviesList movies={movies} />
        )}
      </Container>
    </SectionMain>
  );
};

export default Movies;
