import { getMovieById } from 'Services/Api';
import { useState, useEffect, useRef, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { ThreeDots } from 'react-loader-spinner';
import { Text } from 'components/Text/Text.styled';
import { LinkInfo } from 'components/Link/Link.styled';
import {
  MovieSection,
  BtnBack,
  Genreslist,
  MovieDesc,
  MovieCont,
  AddInfoSection,
  AddInfoItem,
  AddInfoList,
  AddInfoText,
} from '../components/MovieDetails/MovieDetails.styled';
import { Container } from 'components/Container/Container.styled';

const MovieDetails = () => {
  const { movie_id } = useParams();

  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(null);
  const location = useLocation();
  const backLocationRef = useRef(location.state?.from ?? '/movies');

  const defaultImg =
    'https://breakthrough.org/wp-content/uploads/2018/10/default-placeholder-image.png';

  useEffect(() => {
    getMovieId(movie_id);
  }, [movie_id]);

  const getMovieId = async movie_id => {
    if (!movie_id) {
      return;
    }
    setIsLoading(true);
    try {
      const movie = await getMovieById(movie_id);

      setMovieDetails(movie);
      setIsLoading(false);
    } catch (error) {
      setError(error.code);
    }
  };

  return (
    <>
      <MovieSection>
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
          <BtnBack type="button">
            <LinkInfo to={backLocationRef.current}>
              <BsArrowLeft />
              Go back
            </LinkInfo>
          </BtnBack>
          <MovieDesc>
            <div>
              <img
                src={
                  movieDetails.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
                    : defaultImg
                }
                alt={movieDetails.title}
                width="300"
                height="400"
              />
            </div>
            <MovieCont>
              <h2>
                {movieDetails.title}
                <span>
                  (
                  {movieDetails.release_date &&
                    movieDetails.release_date.slice(0, 4)}
                  )
                </span>
              </h2>
              <p>
                User score:
                <span> {Math.round(movieDetails.vote_average * 10)}%</span>
              </p>
              <b>Overview</b>
              <p>{movieDetails.overview}</p>
              <b>Genres</b>
              <Genreslist>
                {movieDetails.genres?.map((genre, index) => {
                  return <p key={index}>{genre.name}</p>;
                })}
              </Genreslist>
            </MovieCont>
          </MovieDesc>
        </Container>
      </MovieSection>

      <AddInfoSection>
        <Container>
          <AddInfoList>
            <AddInfoText>Additional information</AddInfoText>
            <AddInfoItem>
              <LinkInfo to={`credits`}>Cast</LinkInfo>
            </AddInfoItem>
            <AddInfoItem>
              <LinkInfo to={`reviews`}>Reviews</LinkInfo>
            </AddInfoItem>
          </AddInfoList>
        </Container>
      </AddInfoSection>

      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
