import { useState } from "react";
import axios from "axios";
import {
  API_END_POINT,
  POPULAR_MOVIES_URL,
  SEARCH_URL,
  API_KEY,
  PRICE_MIN,
  PRICE_MAX
} from "../utils/const";
import getRandom from "../utils/getRandom";

class Movies {
  constructor() {
    const [movies, setMovies] = useState([]); // Popular movies
    this.movies = movies;
    this.setMovies = setMovies;

    const [primeMovie, setPrimeMovie] = useState([]); // Main movie (after the searchbar)
    this.primeMovie = primeMovie;
    this.setPrimeMovie = setPrimeMovie;

    const [keyPrimeMovie, setPrimeMovieKey] = useState({}); // Youtube video key for primeMovie ex : PbwvYst_kEg
    this.keyPrimeMovie = keyPrimeMovie;
    this.setPrimeMovieKey = setPrimeMovieKey;

    const [moviesTypehead, setMoviesTypehead] = useState([]); // Movies in autocompletion
    this.moviesTypehead = moviesTypehead;
    this.setMoviesTypehead = setMoviesTypehead;
  }

  // Requet API. Want to know more ? https://www.robinwieruch.de/react-hooks-fetch-data
  // Function that fetch current popular movies and set a primemovie(with trailer)
  async fetchMovies() {
    try {
      const res = await axios(
        `${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`
      );

      const popularMovies = res.data.results.slice(0, 20);
      popularMovies.map(movie => {
        return (movie.price = getRandom(PRICE_MIN, PRICE_MIN));
      });
      this.setMovies(popularMovies);

      const tabPrimeMovie = res.data.results.slice(0, 1);
      tabPrimeMovie[0].price = getRandom(PRICE_MIN, PRICE_MAX); // random price;
      this.setPrimeMovie(tabPrimeMovie[0]);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async setVideoKey(movie) {
    try {
      const res = await axios(
        `${API_END_POINT}movie/${movie.id}?append_to_response=videos&${API_KEY}`
      );
      if (res.data.videos.results.length > 0) {
        this.setPrimeMovieKey(res.data.videos.results[0].key);
      }
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async handleChangeSearchBar(text) {
    try {
      const res = await axios(
        `${API_END_POINT}${SEARCH_URL}&${API_KEY}&query=${text}`
      );
      console.log({ res });
      if (res.data.total_results > 0) {
        const tabMovieTypehead = res.data.results.slice(0, 10); // Table for typehead search (autocomplete)
        this.setMoviesTypehead(tabMovieTypehead);
      } else {
        console.log("No search results sorry");
      }
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async handleSubmitSearchBar(text) {
    try {
      const res = await axios(
        `${API_END_POINT}${SEARCH_URL}&${API_KEY}&query=${text}`
      );
      if (res.data.total_results > 0) {
        const tabMovieTypehead = res.data.results.slice(0, 10); // Table for typehead search (autocomplete)
        const tabPrimeMovie = res.data.results.slice(0, 1);
        this.setPrimeMovie(tabPrimeMovie[0]);
        this.setMoviesTypehead(tabMovieTypehead);
      } else {
        console.log("No search results sorry");
      }
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  getMovies() {
    return this.movies;
  }
}

export default Movies;
