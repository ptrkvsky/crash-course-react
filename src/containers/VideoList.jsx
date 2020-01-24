import React from "react";
import PropTypes from "prop-types";
import VideoListItem from "../components/VideoListItem";

export default function VideoList(props) {
  const { movies } = props;

  const receiveCallback = movie => {
    props.sendMovie(movie);
  };

  return (
    <>
      <ul>
        <li className="list-group-item">
          <h2>Les films populaires</h2>
        </li>
        {movies.map(movie => (
          <VideoListItem
            key={movie.id}
            movie={movie}
            alt={`Affiche ${movie.original_title}`}
            callback={receiveCallback}
          />
        ))}
      </ul>
    </>
  );
}

VideoList.propTypes = {
  movies: PropTypes.array.isRequired,
  sendMovie: PropTypes.func.isRequired
};
