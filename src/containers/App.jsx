import React, { useState, useEffect } from "react";
import VideoList from "./VideoList";
import SearchBar from "../components/SearchBar";
import VideoDetail from "../components/VideoDetail";
import axios from "axios";

export default function App() {
  const [movies, setMovies] = useState([]); // Most popular movies
  const [primeMovie, setPrimeMovie] = useState([]); // List of 5 movies after the most popular

  //API URL
  const API_END_POINT = "https://api.themoviedb.org/3/";
  const POPULAR_MOVIES_URL = "discover/movie?sort_by=popularity.desc&page=1";
  const API_KEY = "api_key=383fad9661a33d6164b48dd1309a05cd";

  // Requet API. Want to know more ? https://www.robinwieruch.de/react-hooks-fetch-data
  useEffect(() => {
    initMovies();
  }, []);

  const initMovies = () => {
    axios
      .get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`)
      .then(res => {
        setMovies(res.data.results.slice(1, 6));
        setPrimeMovie(res.data.results.slice(0, 1));
      })
      .catch(error => {
        console.log(error);
      });
  };

  const GetVideo = movie => {
    if (movie.length > 0) {
      console.log(
        `${API_END_POINT}movie/${movie[0].id}?append_to_response=videos&${API_KEY}`
      );
    }
  };

  // Function that test if array of movie exist before display
  const renderMovieArray = movie => {
    if (movie.length > 0) {
      return (
        <VideoDetail
          title={primeMovie[0].original_title}
          description={primeMovie[0].overview}
        />
      );
    }
  };

  return (
    <section>
      <SearchBar />
      {/*console.log(primeMovie[0]) */}
      {GetVideo(primeMovie)}
      {renderMovieArray(primeMovie)}
      <VideoList movies={movies} />
    </section>
  );
}
