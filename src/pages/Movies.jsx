import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'Services/Api';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import { Text } from 'components/Text/Text.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(() => searchParams.get('query') ?? '');
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState(null);

  // console.log(searchParams.get('query'));

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
    <>
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
    </>
  );
};

export default Movies;
