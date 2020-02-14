import React from "react";
import PropTypes from "prop-types";
import VideoListItem from "../components/VideoListItem";
import {VideosContainer, Titre} from "../styles/containers/StyleVideoList"


export default function VideoList({
  movies,
  myBasket,
  setPrimeMovie
}) {

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