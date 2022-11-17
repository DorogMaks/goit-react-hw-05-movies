import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const NotFound = lazy(() => import('pages/NotFound'));
const MovieDetails = lazy(() => import('components/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/MovieDetails/Cast/Cast'));
const Reviews = lazy(() => import('components/MovieDetails/Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
