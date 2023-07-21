import { getReviewsOfMovie } from 'Services/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Text } from 'components/Text/Text.styled';
import { ReviewsSection, ReviewsList, ReviewsItem } from './Reviews.styled';
import { Container } from 'components/Container/Container.styled';

const Reviews = () => {
  const { movie_id } = useParams();
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const movieReviews = async movie_id => {
      try {
        if (!movie_id) {
          return;
        }
        const { results } = await getReviewsOfMovie(movie_id);
        // console.log(results);
        setMovie(results);
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
