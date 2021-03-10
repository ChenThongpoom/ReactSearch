import React from "react";
import "./Title.css";

function Title({ url, title }) {
  return (
    <div className="title-container">
      <a className="title-text" href={url}>
        {title}
      </a>
    </div>
  );
}

export default Title;
