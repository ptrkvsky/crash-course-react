import React from "react";
import PropTypes from "prop-types";

import styled from "@emotion/styled";
import theme from "../styles/theme";

const VideoContainer = styled("article")``;

const TitleVideo = styled("h1")`
  padding-bottom: 15px;
  margin-bottom: 30px;
  text-transform: uppercase;
  font-size: 55px;
  font-weight: 600;
  color: ${theme.colors.primaryColor};
  border-bottom: 1px solid ${theme.colors.secondary};
`;

const DescVideo = styled("p")`
  font-size: 22px;
  line-height: 1.4;
`;

const AddToBasket = styled("p")`
  display: inline-block;
  padding: 11px 21px;
  margin: 30px 0 0 0;
  font-size: 18px;
  border-radius: 10px;
  background: linear-gradient(145deg, #222833, #1d212b);
  box-shadow: 5px 5px 10px #15181e, -5px -5px 10px #272d3b;
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: ${theme.fonts.logo};
  font-weight: bold;
  color: ${theme.colors.primary};
  cursor: pointer;

  &:hover {
    background: #202530;
    box-shadow: inset 5px 5px 21px #191d25, inset -5px -5px 21px #272d3b;
  }
`;

export default function VideoTitle({ sendMovie, movie }) {
  const { title, overview } = movie;

  return (
    <VideoContainer>
      <TitleVideo>{title}</TitleVideo>
      <DescVideo>{overview}</DescVideo>
      <AddToBasket onClick={() => sendMovie(movie)}>
        Ajouter au panier
      </AddToBasket>
    </VideoContainer>
  );
}

VideoTitle.propTypes = {
  movie: PropTypes.object.isRequired,
  sendMovie: PropTypes.func.isRequired
};
