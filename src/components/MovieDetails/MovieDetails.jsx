import { getMovieById } from 'Services/Api';
import { useState, useEffect, useRef, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { Text } from 'components/Text/Text.styled';

const MovieDetails = () => {
  const { movie_id } = useParams();
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [overview, setOverview] = useState('');
  const [year, setYear] = useState('');
  const [genres, setGenres] = useState([]);
  const [score, setScore] = useState(null);

  const [error, setError] = useState(null);
  const location = useLocation();
  const backLocationRef = useRef(location.state?.from ?? '/movies');

  const defaultImg =
    'https://breakthrough.org/wp-content/uploads/2018/10/default-placeholder-image.png';

  useEffect(() => {
    // if (!movie_id) {
    //   return;
    // }

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

      setImage(poster_path);
      setTitle(title);
      setOverview(overview);
      setYear(release_date.slice(0, 4));
      setGenres(genres);
      setScore(Math.round(vote_average * 10));
    } catch (error) {
      setError(error.code);
    }
  };

  const genreName = genres.flatMap(genre => genre.name);

  return (
    <>
      {error && <Text>Ups... Something went wrong - {error}!</Text>}
      <Link to={backLocationRef.current}>
        <button type="button">
          <BsArrowLeft />
          Go Back
        </button>
      </Link>
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
      <div>
        <p>Additional information</p>
        <Link to={`credits`}>
          <div>Cast</div>
        </Link>
        <Link to={`reviews`}>
          <div>Reviews</div>
        </Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
