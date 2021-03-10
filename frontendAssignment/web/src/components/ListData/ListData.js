import React from "react";
import "./ListData.css";

import MainPhoto from "./Photos/MainPhoto";
import Title from "./Title/Title";
import Description from "./Description/Description";
import ListTag from "./ListTag/ListTag";
import Photos from "./Photos/Photos";

function ListData({ photos, url, title, desc, tag }) {
  return (
    <div className="shown-data">
      <li className="tripResult-container">
        <MainPhoto photos={photos} />
        <div className="text-container">
          <Title url={url} title={title} />
          <Description desc={desc} url={url} />
          <ListTag tag={tag} />
          <Photos photos={photos} />
        </div>
      </li>
    </div>
  );
}

export default React.memo(ListData);
