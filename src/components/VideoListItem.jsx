import React from "react";
import PropTypes from "prop-types";
import {
  VideoItem,
  MovieTitle,
  BlocButtons,
  Price
} from "../styles/components/StyleVideoListItem";
import { AddToBasket } from "../styles/components/StyleVideoDetail";
import { IMAGE_BASE_URL } from "../utils/const";

export default function VideoListItem({
  movie,
  myBasket,
  myMovies,
  isOpen,
  setIsOpen
}) {
  const handleAddBasket = () => {
    myBasket.addBasketItem(movie);
    setIsOpen(true);
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
        <Price>{movie.price} $</Price>
        <BlocButtons>
          <AddToBasket
            href="#main-container"
            className="button"
            onClick={() => myMovies.setPrimeMovie(movie)}
          >
            Voir la bande annonce
          </AddToBasket>
          <AddToBasket onClick={() => handleAddBasket()}>
            Ajouter au panier
          </AddToBasket>
        </BlocButtons>
      </div>
    </VideoItem>
  );
}

VideoListItem.propTypes = {
  isOpen: PropTypes.bool,
  movie: PropTypes.object.isRequired,
  myBasket: PropTypes.object.isRequired,
  myMovies: PropTypes.func.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  setPrimeMovie: PropTypes.func.isRequired
};
