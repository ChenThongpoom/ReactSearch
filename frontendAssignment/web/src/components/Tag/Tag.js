import React from "react";
import "./Tag.css";

function Tag({ tag, clicked }) {
  return (
    <div className="tag-container" key={tag}>
      <div className="tag" onClick={clicked}>
        {tag}
      </div>
    </div>
  );
}

export default Tag;
