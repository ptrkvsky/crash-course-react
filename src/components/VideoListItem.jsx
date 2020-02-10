import React from "react";
import PropTypes from "prop-types";

import styled from "@emotion/styled";

const VideoItem = styled("article")`
  position: relative;
  scroll-snap-align: start;

  .bloc-infos {
    display: inherit;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    justify-content: center;
    align-items: center;
  }

  .bloc-hover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-out;
  }
  &:hover .bloc-infos {
    display: inherit;
  }
  &:hover .bloc-hover {
    background: rgb(32, 37, 47, 0.8);
  }
`;

export default function VideoListItem({ movie, callback }) {
  const handleClick = () => {
    callback(movie);
  };

  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";

  return (
    <VideoItem onClick={handleClick}>
      <div className="bloc-hover"></div>
      <div className="media">
        <img alt={movie.name} src={IMAGE_BASE_URL + movie.poster_path}></img>
      </div>
      <div className="bloc-infos">
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
