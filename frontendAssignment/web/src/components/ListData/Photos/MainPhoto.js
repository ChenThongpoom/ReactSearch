import React from "react";
import "./MainPhoto.css";

function MainPhoto({ photos }) {
  return (
    <div className="tripPhoto">
      <img src={photos[0]} alt="1stPhoto" />
    </div>
  );
}

export default MainPhoto;
