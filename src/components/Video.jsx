import React from "react";
import PropTypes from "prop-types";

export default function Video({ moviekey }) {
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        className="embed-responsive-item"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${moviekey}`}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
}

Video.propTypes = {
  moviekey: PropTypes.string.isRequired
};
