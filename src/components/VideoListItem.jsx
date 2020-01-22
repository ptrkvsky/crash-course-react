import React from "react";

export default function VideoListItem({ name, image }) {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";
  return (
    <li>
      <img src={IMAGE_BASE_URL + image}></img>
      <h3>{name}</h3>
    </li>
  );
}
