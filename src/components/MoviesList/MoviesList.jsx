import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import MoviesItem from 'components/MoviesItem/MoviesItem';
import { List } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  // console.log(location);
  return (
    <List>
      {movies &&
        movies.map(({ title, id }) => {
          return (
            <Link to={`/movies/${id}`} state={{ from: location }}>
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
