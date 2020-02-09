import React from "react";
import PropTypes from "prop-types";

export default function VideoListItem({ movie, callback }) {
  const handleClick = () => {
    callback(movie);
  };

  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";
  return (
    <div onClick={handleClick}>
      <div className="media">
        <img
          alt={movie.name}
          className="align-self-center mr-3 img-rounded"
          src={IMAGE_BASE_URL + movie.poster_path}
        ></img>
        <img
          alt={movie.name}
          className=""
          src={IMAGE_BASE_URL + movie.backdrop_path}
        ></img>

        <div className="media-body">
          <h3 className="title_list_item">{movie.name}</h3>
          <p className="title_list_item">Price {movie.price}</p>
        </div>
      </div>
    </div>
  );
}

VideoListItem.propTypes = {
  movie: PropTypes.object.isRequired,
  callback: PropTypes.func.isRequired
};
