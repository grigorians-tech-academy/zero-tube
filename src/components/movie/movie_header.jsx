import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../icons/logo.png';
import './movie_header.css';

const MovieHeader = (props) => {
  const { movie } = props;

  return (
    <div className="movie-header">
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <h1>
        {movie?.title || 'Loading...'}
      </h1>
      {movie?.tagline && (
        <p className="tagline">
          {movie.tagline}
        </p>
      )}
    </div>
  );
};

export default MovieHeader;