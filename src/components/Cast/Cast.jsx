import { getCastOfMovie } from 'Services/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { Text } from 'components/Text/Text.styled';
import { CastItem, CastList } from './Cast.styled';
import { Container } from '../Container/Container.styled';

const Cast = () => {
  const { movie_id } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const defaultImg =
    'https://ronaldmottram.co.nz/wp-content/uploads/2019/01/default-user-icon-8.jpg';

  useEffect(() => {
    if (!movie_id) {
      return;
    }
    castOfMovie(movie_id);
  }, [movie_id]);

  const castOfMovie = async movie_id => {
    if (!movie_id) {
      return;
    }

    setIsLoading(true);
    try {
      const { cast } = await getCastOfMovie(movie_id);

      setCast(cast);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };
  return (
    <Container>
      <CastList>
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
        {cast.length > 0 ? (
          cast.map(({ profile_path, name, character }, index) => {
            return (
              <CastItem key={index}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : defaultImg
                  }
                  alt={name}
                  width="100"
                  height="150"
                />
                <b>{name}</b>
                <p>
                  Character: <span> {character}</span>
                </p>
              </CastItem>
            );
          })
        ) : (
          <Text>We don`t have information about a cast!</Text>
        )}
      </CastList>
    </Container>
  );
};

export default Cast;
