import React from "react";
import PropTypes from "prop-types";
import VideoListItem from "../components/VideoListItem";

export default function VideoList({ movies }) {
  return (
    <>
      <ul>
        <li className="list-group-item">
          <h2>Les films populaires</h2>
        </li>
        {movies.map(movie => (
          <VideoListItem
            key={movie.id}
            name={movie.original_title}
            image={movie.poster_path}
            alt={`Affiche ${movie.original_title}`}
          />
        ))}
      </ul>
    </>
  );
}

VideoList.propTypes = {
  movies: PropTypes.array.isRequired
};
