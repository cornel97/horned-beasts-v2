import React from "react";

export default function HornedBeast({ title, imageUrl, description }) {
  return (
    <div className="horned-beast">
      <h2>{title}</h2>
      <img src={imageUrl} alt="" />
      <p>{description}</p>
    </div>
  );
}
