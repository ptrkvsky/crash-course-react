import React from "react";
import PropTypes from "prop-types";
import {
  VideoContainer,
  TitleVideo,
  DescVideo,
  AddToBasket
} from "../styles/components/StyleVideoDetail";

export default function VideoDetail({ movie, myBasket, toggleOpen }) {
  const { title, overview } = movie;
  const handleAddBasket = () => {
    // En général, dans une appli React on va éviter au max de modifier directement le DOM
    // Je t'ai fais une proposition d'implémentation via le state
    // Plus tard tu pourras le réécrire avec le Context
    // document.querySelector("#sectionBasket").classList.add("open");
    toggleOpen();
    myBasket.addBasketItem(movie);
  };
  return (
    <VideoContainer>
      <TitleVideo>{title}</TitleVideo>
      <DescVideo>{overview}</DescVideo>
      <AddToBasket onClick={() => handleAddBasket()}>
        Ajouter au panier
      </AddToBasket>
    </VideoContainer>
  );
}

VideoDetail.propTypes = {
  myBasket: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired
};
