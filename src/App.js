import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import HomePage from './pages/home';
import MoviePage from './pages/movie';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
    </Router>
  );
}

export default App;
