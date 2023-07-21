import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { List } from './MoviesList.styled';
import { LinkInfo } from 'components/Link/Link.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <List>
        {movies &&
          movies.map(({ title, id }) => {
            return (
              <li key={id}>
                <LinkInfo
                  to={`/movies/${id}`}
                  state={{ from: location }}
                  key={id}
                >
                  {title}
                </LinkInfo>
              </li>
            );
          })}
      </List>
    </>
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
