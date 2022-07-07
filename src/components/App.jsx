import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import GlobalStyle from './GlobalStyle';
import { Toaster } from 'react-hot-toast';
import Layout from './Layout';
import MovieDetails from 'views/MovieDetails';
import Cast from 'views/Cast';
import Reviews from 'views/Reviews';

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={'Movies'} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>

        <Route path="*" element={''} />
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
