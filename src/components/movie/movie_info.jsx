import React from 'react';

import ProductionCompanies from './production';

import './movie_info.css';

const MovieInfo = (props) => {
  const { movie, configuration, genres } = props;

  const backdropImage = () => {
    if (movie.backdrop_path) {
      return `${configuration.images.base_url}${configuration.images.backdrop_sizes[2]}${movie.backdrop_path}`;
    }
    return null;
  }

  return (
    <>
      {backdropImage() && (
        <div className="backdrop" style={{
          backgroundImage: `url(${backdropImage()})`
        }} />
      )}
      <div className="movie">
        <div className="poster">
          <img
            src={`${configuration.images.base_url}${configuration.images.poster_sizes[3]}${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className="description">
          <p>
            {movie.overview}
          </p>
          <p className="stat-row">
            <span className="title">Release date:</span>
            {movie.release_date}
          </p>
          <p className="stat-row">
            <span className="title">Genres:</span>
            {movie.genres.map((genre, index) => {
              return (
                <span key={genre.id}>
                  {genres[genre.id]}
                  {index < movie.genres.length - 1 && ', '}
                </span>
              );
            })}
          </p>
          <p className="stat-row">
            <span className="title">Rating:</span>
            {movie.vote_average.toFixed(1)}
          </p>
          {movie.production_companies.length > 0 && <ProductionCompanies companies={movie.production_companies} configuration={configuration} />}
        </div>
      </div>
    </>
  );
};

export default MovieInfo;