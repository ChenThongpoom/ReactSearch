import React from "react";
import "./Description.css";

function Description({ desc, url }) {
  return (
    <div className="description-container">
      <div className="description">{desc} </div>
      <a className="more-text" href={url}>
        อ่านต่อ
      </a>
    </div>
  );
}

export default Description;
