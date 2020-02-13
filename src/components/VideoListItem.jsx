import React from "react";
import PropTypes from "prop-types";

import styled from "@emotion/styled";
import theme from "../styles/theme";

const VideoItem = styled("article")`
  position: relative;
  scroll-snap-align: start;

  .bloc-infos {
    display: none;
    position: absolute;
    width: 100%;
    padding: 0 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    justify-content: center;
    align-items: center;
    text-align: center;
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

const MovieTitle = styled("h3")`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: ${theme.fonts.logo};
  color: ${theme.colors.primary};
  letter-spacing: 1px;
`;

export default function VideoListItem({ movie, myBasket, setPrimeMovie }) {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";

  return (
    <VideoItem>
      <div className="bloc-hover"></div>
      <div className="media">
        <img alt={movie.name} src={IMAGE_BASE_URL + movie.poster_path}></img>
      </div>
      <div className="bloc-infos">
        <MovieTitle>{movie.title}</MovieTitle>
        <p className="title_list_item">Price {movie.price}</p>
        <p className="btn-savoirplus" onClick={() => setPrimeMovie(movie)}>
          En savoir plus
        </p>
        <p
          className="btn-addtobasket"
          onClick={() => myBasket.addBasketItem(movie)}
        >
          Ajouter au panier
        </p>
      </div>
    </VideoItem>
  );
}

VideoListItem.propTypes = {
  setPrimeMovie: PropTypes.func.isRequired,
  myBasket: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired
};
