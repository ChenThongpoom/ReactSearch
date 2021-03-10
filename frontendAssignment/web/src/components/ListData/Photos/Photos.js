import React from "react";
import "./Photos.css";

function Photos({ photos }) {
  return (
    <div className="extra-photo">
      <img className="fst" src={photos[1]} alt="2ndPhoto" />
      <img className="snd" src={photos[2]} alt="3rdPhoto" />
      <img className="trd" src={photos[3]} alt="4thPhoto" />
    </div>
  );
}

export default Photos;
