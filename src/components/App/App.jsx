// import PropTypes from 'prop-types';

// api_key=3fd15b48446eede94fd21b39e1e3acac

import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import Movies from '../../pages/Movies';
import Layout from 'components/Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
      </Route>
    </Routes>
  );
};
