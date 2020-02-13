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

export default function VideoList({
  sendPrimeMovie,
  movies,
  myBasket,
  setPrimeMovie
}) {
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
            setPrimeMovie={setPrimeMovie}
            myBasket={myBasket}
          />
        ))}
      </VideosContainer>
    </section>
  );
}

VideoList.propTypes = {
  setPrimeMovie: PropTypes.func.isRequired,
  myBasket: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
  sendPrimeMovie: PropTypes.func.isRequired
};
