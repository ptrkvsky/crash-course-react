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

export default function VideoListItem({ movie, myBasket, myMovies }) {
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
  myMovies: PropTypes.func.isRequired,
  setPrimeMovie: PropTypes.func.isRequired,
  myBasket: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired
};
