import React from "react";
import PropTypes from "prop-types";
import VideoListItem from "../components/VideoListItem";

import styled from "@emotion/styled";
// import theme from "../styles/theme";

const VideosContainer = styled("div")`
  scroll-snap-type: x proximity;
  overflow-x: auto;
  overflow-y: hidden;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 33%;
  box-shadow: -11px -11px 22px #1b1f28, 11px 11px 22px #252b38;
`;

const Titre = styled("h2")`
  font-size: 45px;
  margin-bottom: 30px;
`;

export default function VideoList({ sendPrimeMovie, movies }) {
  const receiveCallback = movie => {
    sendPrimeMovie(movie);
  };

  return (
    <section>
      <Titre id="popular">Les films populaires</Titre>
      <VideosContainer>
        {movies.map(movie => (
          <VideoListItem
            key={movie.id}
            movie={movie}
            alt={`Affiche ${movie.original_title}`}
            callback={receiveCallback}
          />
        ))}
      </VideosContainer>
    </section>
  );
}

VideoList.propTypes = {
  movies: PropTypes.array.isRequired,
  sendPrimeMovie: PropTypes.func.isRequired
};
