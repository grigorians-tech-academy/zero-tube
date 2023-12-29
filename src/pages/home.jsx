import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { API_KEY } from '../api';

import Page from '../components/shared/page';
import Loader from '../components/shared/loader';

import Header from '../components/home/header';
import Movies from '../components/home/movies';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const [genres, setGenres] = useState();
  const [configuration, setConfiguration] = useState();
  const [loading, setLoading] = useState(false);

  const [popularMovies, setPopularMovies] = useState();
  const [searchResults, setSearchResults] = useState();

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
  }, []);

  useEffect(() => {
    if (!genres || !configuration) {
      return;
    }

    setLoading(true);
    axios.get('https://api.themoviedb.org/3/movie/popular', {
      params: { api_key: API_KEY }
    })
      .then(response => {
        setPopularMovies(response.data.results);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [genres, configuration]);

  useEffect(() => {
    if (!genres || !configuration || !searchQuery) {
      return;
    }

    setLoading(true);
    axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: API_KEY,
        query: searchQuery
      }
    })
      .then(response => {
        setSearchResults(response.data.results);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [genres, configuration, searchQuery]);

  return (
    <Page>
      <Header commit={setSearchQuery} />
      <h1>
        {(searchQuery && `Search results for '${searchQuery}'`) || 'Popular movies'}
      </h1>
      {!searchQuery && popularMovies && (
        <Movies
          movies={popularMovies}
          configuration={configuration}
          genres={genres}
        />
      )}
      {searchQuery && searchResults && (
        <Movies
          movies={searchResults}
          configuration={configuration}
          genres={genres}
        />
      )}
      {((!genres || !configuration) || loading) && <Loader />}
    </Page>
  );
};

export default HomePage;