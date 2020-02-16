import React from "react";
import PropTypes from "prop-types";
import VideoListItem from "../components/VideoListItem";
import { VideosContainer, Titre } from "../styles/containers/StyleVideoList";

export default function VideoList({ myBasket, myMovies, toggleOpen }) {
  return (
    <section>
      <Titre id="popular">Les films populaires</Titre>
      <VideosContainer>
        {myMovies.getMovies().map(movie => (
          <VideoListItem
            key={movie.id}
            movie={movie}
            myMovies={myMovies}
            myBasket={myBasket}
            toggleOpen={toggleOpen}
          />
        ))}
      </VideosContainer>
    </section>
  );
}

VideoList.propTypes = {
  myMovies: PropTypes.object.isRequired,
  myBasket: PropTypes.object.isRequired
};
