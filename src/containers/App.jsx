import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import VideoList from "./VideoList";
import axios from "axios";

export default function App() {
  const [movies, setMovies] = useState([]);

  const API_END_POINT = "https://api.themoviedb.org/3/";
  const POPULAR_MOVIES_URL = "discover/movie?sort_by=popularity.desc&page=1";
  const API_KEY = "api_key=383fad9661a33d6164b48dd1309a05cd";

  useEffect(() => {
    axios
      .get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`)
      .then(res => {
        setMovies(res.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <SearchBar />
      <VideoList movies={movies} />
    </div>
  );
}
