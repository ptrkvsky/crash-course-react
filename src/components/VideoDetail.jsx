import React from "react";
import PropTypes from "prop-types";

export default function VideoTitle({ title, description }) {
  return (
    <article>
      <h1>{title}</h1>
      <p>{description}</p>
    </article>
  );
}

VideoTitle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
