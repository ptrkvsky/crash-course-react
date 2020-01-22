import React from "react";
import VideoListItem from "../components/VideoListItem";

export default function VideoList({ movies }) {
  return (
    <ul>
      {movies.map(movie => (
        <VideoListItem
          key={movie.id}
          name={movie.original_title}
          image={movie.poster_path}
          alt={`Affiche ${movie.original_title}`}
        />
      ))}
    </ul>
  );
}
