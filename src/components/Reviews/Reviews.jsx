import { getReviewsOfMovie } from 'Services/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { Text } from 'components/Text/Text.styled';
import { ReviewsSection, ReviewsList, ReviewsItem } from './Reviews.styled';
import { Container } from 'components/Container/Container.styled';

const Reviews = () => {
  const { movie_id } = useParams();
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const movieReviews = async movie_id => {
      try {
        if (!movie_id) {
          return;
        }

        setIsLoading(true);
        const { results } = await getReviewsOfMovie(movie_id);

        setMovie(results);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };

    movieReviews(movie_id);
  }, [movie_id]);

  return (
    <ReviewsSection>
      <Container>
        <ReviewsList>
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
          {movie.length > 0 ? (
            movie.map(({ author, content }) => {
              return (
                <ReviewsItem key={author}>
                  <b>
                    Author: <span>{author}</span>
                  </b>
                  <p>{content}</p>
                </ReviewsItem>
              );
            })
          ) : (
            <Text>We don`t have any reviews for this movie!</Text>
          )}
        </ReviewsList>
      </Container>
    </ReviewsSection>
  );
};

export default Reviews;
