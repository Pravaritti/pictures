import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  console.log(props.images);
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;

//we make sure that for a list we include keys for every element so that it can be tracked if the newly rendered list element is included in DOM
//key - id
//key will be assigned to
