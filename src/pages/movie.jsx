import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { API_KEY } from '../api';

import Page from '../components/shared/page';
import Loader from '../components/shared/loader';

import MovieHeader from '../components/movie/movie_header';
import MovieInfo from '../components/movie/movie_info';

const MoviePage = () => {
  const { id } = useParams();

  const [genres, setGenres] = useState();
  const [configuration, setConfiguration] = useState();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();

  useEffect(() => {
    // loading configuration
    axios.get('https://api.themoviedb.org/3/configuration', {
      params: { api_key: API_KEY }
    })
      .then(response => {
        setConfiguration(response.data);
      });

    // loading genres
    axios.get('https://api.themoviedb.org/3/genre/movie/list', {
      params: { api_key: API_KEY }
    })
      .then(response => {
        const rawGenres = response.data.genres;
        const genres = {};
        rawGenres.forEach(genre => {
          genres[genre.id] = genre.name;
        });
        setGenres(genres);
      });

    // loading movie details
    axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
      params: { api_key: API_KEY }
    })
      .then(response => {
        setMovie(response.data);
      });
  }, [id]);

  useEffect(() => {
    if (!genres || !configuration || !movie) {
      return;
    }
    setLoading(false);
  }, [genres, configuration, movie]);

  return (
    <Page>
      <MovieHeader movie={movie} />
      {movie && <MovieInfo movie={movie} configuration={configuration} genres={genres} />}
      {loading && <Loader />}
    </Page>
  );
};

export default MoviePage;