import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import VideoList from "./VideoList";
import axios from "axios";

export default function App() {
  const movieUrl =
    "https://api.themoviedb.org/3/movie?sort_by=popularity.desc?api_key=383fad9661a33d6164b48dd1309a05cd";
  const [movies, setMovies] = useState({});

  axios.get(movieUrl).then(res => {
    const movies = res.data;
    setMovies(movies);
  });
  console.log(movies);
  return (
    <div>
      <SearchBar />
      <VideoList movies={movies} />
    </div>
  );
}
