import React from 'react';
import './movies.css';

import MovieCard from './movie_card';

const Movies = (props) => {
  const { movies, configuration, genres } = props;

  return (
    <>
      <div className="movies">
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            configuration={configuration}
            genres={genres}
          />
        ))}
      </div>
      {movies.length === 0 && (
        <div className="movies-empty">
          No movies found
        </div>
      )}
    </>
  );
}

export default Movies;