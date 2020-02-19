import React from "react";
import PropTypes from "prop-types";
import {
  VideoContainer,
  TitleVideo,
  DescVideo,
  AddToBasket,
  Price,
  BlocPrice
} from "../styles/components/StyleVideoDetail";

export default function VideoDetail({ movie, myBasket }) {
  const { title, overview, price } = movie;
  const handleAddBasket = () => {
    myBasket.addBasketItem(movie);
  };
  return (
    <VideoContainer>
      <TitleVideo>{title}</TitleVideo>
      <DescVideo>{overview}</DescVideo>
      <BlocPrice>
        <Price>{price} $</Price>
        <AddToBasket onClick={() => handleAddBasket()}>
          Ajouter au panier
        </AddToBasket>
      </BlocPrice>
    </VideoContainer>
  );
}

VideoDetail.propTypes = {
  myBasket: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired
};
