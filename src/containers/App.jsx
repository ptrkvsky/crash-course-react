import React, { useState, useEffect } from "react";
import VideoList from "./VideoList";
import SearchBar from "../components/SearchBar";
import VideoDetail from "../components/VideoDetail";
import Video from "../components/Video";
import axios from "axios";
import isEmpty from "../utils/isEmpty";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";

export default function App() {
  const [movies, setMovies] = useState([]); // Most popular movies
  const [keyPrimeMovie, setPrimeMovieKey] = useState({});
  const [primeMovie, setPrimeMovie] = useState([]); // List of 5 movies after the most popular
  const [moviesTypehead, setMoviesTypehead] = useState([]); // List of 5 movies after the most popular

  //API URL
  const API_END_POINT = "https://api.themoviedb.org/3/";
  const POPULAR_MOVIES_URL = "discover/movie?sort_by=popularity.desc&page=1";
  const SEARCH_URL = "search/movie/?language=fr&include_adult=false";
  const API_KEY = "api_key=383fad9661a33d6164b48dd1309a05cd";

  // Requet API. Want to know more ? https://www.robinwieruch.de/react-hooks-fetch-data
  //Function that fetch current popular movies and set a primemovie(with trailer)
  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await axios(
          `${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`
        );
        setMovies(res.data.results.slice(1, 6));

        const tabPrimeMovie = res.data.results.slice(0, 1);
        setPrimeMovie(tabPrimeMovie[0]);
      } catch (e) {
        console.log(e);
        throw e;
      }
    }

    fetchMovies();
  }, []);

  //Second function that get a movie
  useEffect(() => {
    async function setVideoKey(movie) {
      try {
        const res = await axios(
          `${API_END_POINT}movie/${movie.id}?append_to_response=videos&${API_KEY}`
        );
        if (res.data.videos.results.length > 0) {
          setPrimeMovieKey(res.data.videos.results[0].key);
        }
      } catch (e) {
        console.log(e);
        throw e;
      }
    }

    if (!isEmpty(primeMovie)) {
      setVideoKey(primeMovie);
    }
  }, [primeMovie]);

  const receiveMovie = movie => {
    setPrimeMovie(movie);
  };

  const receiveSearchText = text => {
    async function searchMovie() {
      try {
        const res = await axios(
          `${API_END_POINT}${SEARCH_URL}&${API_KEY}&query=${text}`
        );
        if (res.data.total_results > 0) {
          const tabMovieTypehead = res.data.results.slice(0, 10); // Table for typehead search (autocomplete)
          const tabPrimeMovie = res.data.results.slice(0, 1);
          setPrimeMovie(tabPrimeMovie[0]);
          setMoviesTypehead(tabMovieTypehead);
        } else {
          console.log("no search results sorry");
        }
      } catch (e) {
        console.log(e);
        throw e;
      }
    }
    searchMovie();
  };

  const receiveHandleChange = text => {
    async function searchMovie() {
      try {
        if (text.length > 1) {
          const res = await axios(
            `${API_END_POINT}${SEARCH_URL}&${API_KEY}&query=${text}`
          );
          if (res.data.total_results > 0) {
            const tabMovieTypehead = res.data.results.slice(0, 10); // Table for typehead search (autocomplete)
            setMoviesTypehead(tabMovieTypehead);
          } else {
            console.log("no search results sorry");
          }
        }
      } catch (e) {
        console.log(e);
        throw e;
      }
    }
    searchMovie();
  };

  return (
    <section>
      <div className="searchbar">
        <SearchBar
          tabMovieTypehead={moviesTypehead}
          sendSearchText={receiveSearchText}
          sendHandleChange={receiveHandleChange}
        />
      </div>
      <div className="row">
        <div className="col-md-8">
          <Video moviekey={keyPrimeMovie} />
          <VideoDetail
            title={primeMovie.original_title}
            description={primeMovie.overview}
          />
        </div>
        <div className="col-md-4">
          <VideoList sendMovie={receiveMovie} movies={movies} />
        </div>
      </div>
    </section>
  );
}
