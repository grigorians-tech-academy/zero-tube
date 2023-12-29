import React from 'react';
import { Link } from 'react-router-dom';

import defaultPoster from '../../icons/poster_default.png';
import './movie_card.css';

const MovieCard = (props) => {
  const { movie, configuration, genres } = props;
  const { original_title, poster_path, vote_average, genre_ids } = movie;

  const posterUrl = `${configuration.images.base_url}w342${poster_path}`;

  return (
    <div className="movie-card">
      <div className="movie-card-rating">
        {vote_average.toFixed(1)}
      </div>
      <Link to={`/movie/${movie.id}`} className="movie-card-link">
        <img src={poster_path == null ? defaultPoster : posterUrl} alt="poster" />
      </Link>
      <h3>
        {original_title}
      </h3>
      <div className="movie-card-genres">
        {genre_ids.map((id, index) => (
          <span key={id}>
            {genres[id]}
            {index < genre_ids.length - 1 ? ', ' : ''}
          </span>
        ))}
      </div>
    </div>
  );
}

export default MovieCard;