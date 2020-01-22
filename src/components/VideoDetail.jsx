import React from "react";

export default function VideoTitle({ title, description }) {
  return (
    <article>
      <h1>{title}</h1>
      <p>{description}</p>
    </article>
  );
}
