import React from "react";
import PropTypes from "prop-types";

import styled from "@emotion/styled";

const VideoItem = styled("article")`
  position: relative;
  scroll-snap-align: start;
`;

export default function VideoListItem({ movie, callback }) {
  const handleClick = () => {
    callback(movie);
  };

  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";

  return (
    <VideoItem onClick={handleClick}>
      <div className="media">
        <img alt={movie.name} src={IMAGE_BASE_URL + movie.poster_path}></img>
      </div>
      <div className="media-body">
        <h3 className="title_list_item">{movie.title}</h3>
        <p className="title_list_item">Price {movie.price}</p>
      </div>
    </VideoItem>
  );
}

VideoListItem.propTypes = {
  movie: PropTypes.object.isRequired,
  callback: PropTypes.func.isRequired
};
