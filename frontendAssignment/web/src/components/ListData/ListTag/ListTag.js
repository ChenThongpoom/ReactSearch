import React from "react";
import "./ListTag.css";

function ListTag({ tag }) {
  return <div className="category-container">หมวด - {tag}</div>;
}

export default ListTag;
