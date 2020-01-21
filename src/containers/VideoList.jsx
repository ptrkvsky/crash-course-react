import React from "react";
import VideoListItem from "../components/VideoListItem";

export default function VideoList({ movies }) {
  return (
    <ul>
      movies.map( movie => <VideoListItem name={movies.original_title} /> )
    </ul>
  );
}
