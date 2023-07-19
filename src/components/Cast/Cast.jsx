import { getCastOfMovie } from 'Services/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Text } from 'components/Text/Text.styled';

const Cast = () => {
  const { movie_id } = useParams();
  const [cast, setCast] = useState([]);
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
    try {
      const { cast } = await getCastOfMovie(movie_id);
      console.log(cast);
      setCast(cast);
      //   console.log(cast.profile_path, cast.name, cast.character);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      {cast.length > 0 ? (
        cast.map(({ profile_path, name, character }) => {
          return (
            <ul>
              <li>
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
                <p>{name}</p>
                <p>
                  Character: <span> {character}</span>
                </p>
              </li>
            </ul>
          );
        })
      ) : (
        <Text>We don`t have information about a cast!</Text>
      )}
    </div>
  );
};

export default Cast;
