import React from "react";
import PropTypes from "prop-types";

export default function VideoListItem({ name, image }) {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";
  return (
    <li className="list-group-item">
      <div className="media">
        <img
          alt={name}
          className="align-self-center mr-3 img-rounded"
          src={IMAGE_BASE_URL + image}
        ></img>
        <div className="media-body">
          <h3 className="title_list_item">{name}</h3>
        </div>
      </div>
    </li>
  );
}

VideoListItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
