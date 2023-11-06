import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Router,
} from 'react-router-dom';
import Cast from '../pages/Cast/Cast';
import Reviews from '../pages/Reviews';

const Home = lazy(() => import('./components/Home'));
const Movies = lazy(() => import('./components/Movies'));
const MovieDetails = lazy(() => import('./components/MovieDetails'));

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Search Movies</Link>
            </li>
          </ul>
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movies" exact component={Movies} />
            <Route path="/movies/:movieId" component={MovieDetails} />
            <Route path="/movies/:movieId/cast" component={Cast} />
            <Route path="/movies/:movieId/reviews" component={Reviews} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
