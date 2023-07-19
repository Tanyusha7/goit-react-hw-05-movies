import { getMovieById } from 'Services/Api';
import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

import { Text } from 'components/Text/Text.styled';

const MovieDetails = () => {
  const { movie_id } = useParams();
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [overview, setOverview] = useState('');
  const [year, setYear] = useState('');
  const [genres, setGenres] = useState([]);
  const [score, setScore] = useState(null);

  //   const [movies, setMovies] = useState({});

  //   const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState(null);

  //   console.log(movie_id);

  const defaultImg =
    'https://breakthrough.org/wp-content/uploads/2018/10/default-placeholder-image.png';

  useEffect(() => {
    if (!movie_id) {
      return;
    }

    getMovieId(movie_id);
  }, [movie_id]);

  const getMovieId = async movie_id => {
    if (!movie_id) {
      return;
    }
    try {
      const {
        poster_path,
        title,
        overview,
        genres,
        release_date,
        vote_average,
      } = await getMovieById(movie_id);

      //   setMovies(data);

      setImage(poster_path);
      setTitle(title);
      setOverview(overview);
      setYear(release_date.slice(0, 4));
      setGenres(genres);
      setScore(Math.round(vote_average * 10));

      //   console.log(title, overview, genres, release_date);
    } catch (error) {
      setError(error.code);
    }
  };

  //   const year = release_date.slice(0, 4);

  //   const score = Math.round(vote_average * 10);

  const genreName = genres.flatMap(genre => genre.name);

  //   console.log(genreName);

  return (
    <>
      {error && <Text>Ups... Something went wrong - {error}!</Text>}
      <div>
        <img
          src={image ? `https://image.tmdb.org/t/p/w500/${image}` : defaultImg}
          alt={title}
          width="300"
          height="400"
        />
      </div>
      <div>
        <h2>
          {title}
          <span> ({year})</span>
        </h2>
        <p>
          User score: <span>{score}%</span>
        </p>
        <p>Overview</p>
        <p>{overview}</p>
        <p>Genres</p>
        {genres &&
          genreName.map(name => {
            return <p>{name}</p>;
          })}
      </div>
      <ul>
        <p>Additional information</p>
        <Link to={`credits`}>
          <li>Cast</li>
        </Link>
        <Link to={`reviews`}>
          <li>Reviews</li>
        </Link>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
