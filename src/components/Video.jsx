import React from "react";
import PropTypes from "prop-types";

export default function Video({ moviekey }) {
  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${moviekey}`}
      frameBorder="0"
      allowFullScreen
    />
  );
}

Video.propTypes = {
  moviekey: PropTypes.number.isRequired
};
