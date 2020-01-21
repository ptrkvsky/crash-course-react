import React from "react";
import VideoListItem from "../components/VideoListItem";

export default function VideoList({ movies }) {
  return (
    <ul>
      {movies.map(movie => (
        <VideoListItem name={movie.original_title} />
      ))}
    </ul>
  );
}
