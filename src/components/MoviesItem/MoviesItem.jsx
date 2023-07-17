import PropTypes from 'prop-types';

const MoviesItem = ({ id, title }) => {
  return <li key={id}>{title}</li>;
};

export default MoviesItem;

MoviesItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
