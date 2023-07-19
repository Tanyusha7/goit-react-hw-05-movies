// import { getTrendingMovies } from 'Services/Api';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import MoviesItem from 'components/MoviesItem/MoviesItem';
import { List } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  // console.log(movies[0].id);
  return (
    <List>
      {movies &&
        movies.map(({ title, id }) => {
          return (
            <Link to={`/movies/${id}`}>
              <MoviesItem id={id} title={title} key={id} />
            </Link>
          );
        })}
    </List>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
