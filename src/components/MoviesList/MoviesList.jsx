// import { getTrendingMovies } from 'Services/Api';
import PropTypes from 'prop-types';
// import { useState, useEffect } from 'react';
import MoviesItem from 'components/MoviesItem/MoviesItem';
import { List } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  // console.log(movies[0].id);
  return (
    <List>
      {movies &&
        movies.map(({ title, id }) => {
          return <MoviesItem id={id} title={title} />;
        })}
    </List>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
