import React from "react";
import PropTypes from "prop-types";
import {VideoItem, MovieTitle} from "../styles/components/StyleVideoListItem"

export default function VideoListItem({ movie, myBasket, setPrimeMovie }) {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";

  return (
    <VideoItem>
      <div className="bloc-hover"></div>
      <div className="media">
        <img
          loading="lazy"
          alt={movie.name}
          src={IMAGE_BASE_URL + movie.poster_path}
        ></img>
      </div>
      <div className="bloc-infos">
        <MovieTitle>{movie.title}</MovieTitle>
        <p className="title_list_item">{movie.price} $</p>
        <a
          href="#main-container"
          className="btn-savoirplus"
          onClick={() => setPrimeMovie(movie)}
        >
          Voir la bande annonce
        </a>
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
