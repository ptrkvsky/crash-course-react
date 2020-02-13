import React from "react";
import PropTypes from "prop-types";
import {
  VideoContainer,
  TitleVideo,
  DescVideo,
  AddToBasket
} from "../styles/components/StyleVideoDetail";

export default function VideoDetail({ movie, myBasket }) {
  const { title, overview } = movie;

  return (
    <VideoContainer>
      <TitleVideo>{title}</TitleVideo>
      <DescVideo>{overview}</DescVideo>
      <AddToBasket onClick={() => myBasket.addBasketItem(movie)}>
        Ajouter au panier
      </AddToBasket>
    </VideoContainer>
  );
}

VideoDetail.propTypes = {
  myBasket: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired
};
