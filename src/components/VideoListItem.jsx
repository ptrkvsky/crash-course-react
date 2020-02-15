import React from "react";
import PropTypes from "prop-types";
import { VideoItem, MovieTitle } from "../styles/components/StyleVideoListItem";
import { AddToBasket } from "../styles/components/StyleVideoDetail";

export default function VideoListItem({ movie, myBasket, myMovies }) {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";
  const handleAddBasket = () => {
    document.querySelector("#sectionBasket").classList.add("open");
    myBasket.addBasketItem(movie);
  };
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
          onClick={() => myMovies.setPrimeMovie(movie)}
        >
          Voir la bande annonce
        </a>
        <AddToBasket onClick={() => handleAddBasket()}>
          Ajouter au panier
        </AddToBasket>
      </div>
    </VideoItem>
  );
}

VideoListItem.propTypes = {
  myMovies: PropTypes.func.isRequired,
  setPrimeMovie: PropTypes.func.isRequired,
  myBasket: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired
};
