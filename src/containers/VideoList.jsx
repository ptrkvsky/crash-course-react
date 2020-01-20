import React from "react";
import VideoListItem from "../components/VideoListItem";

export default function VideoList() {
  const movies = ["film1", "film2"];

  return (
    <ul>
      {movies.map(movie => (
        <VideoListItem key={movie} name={movie} />
      ))}
    </ul>
  );
}
