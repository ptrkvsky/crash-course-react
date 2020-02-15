import React from "react";
import PropTypes from "prop-types";
import VideoListItem from "../components/VideoListItem";
import {VideosContainer, Titre} from "../styles/containers/StyleVideoList"


export default function VideoList({
  myBasket,
  myMovies,
}) {

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
          />
        ))}
      </VideosContainer>
    </section>
  );
}

VideoList.propTypes = {
  myMovies: PropTypes.object.isRequired,
  myBasket: PropTypes.object.isRequired,
};