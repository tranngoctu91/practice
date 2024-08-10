import React from "react";
import { useGallery } from "./gallerry-context";
import PropTypes from "prop-types";

const PhotoList = () => {
  const { photos } = useGallery();
  console.log(photos);
  return (
    <div>
      {photos.length > 0 &&
        photos.map((item, index) => (
          <PhotoItem key={item.id} info={item}></PhotoItem>
        ))}
    </div>
  );
};

const PhotoItem = ({ info }) => {
  const { toggleFavorite, addCart } = useGallery();
  return (
    <div>
      <img style={{ width: "200px" }} src={info.url} alt="" />
      {info.isLike ? <p>Like</p> : <p>Unlike</p>}
      <button onClick={() => toggleFavorite(info.id)}>
        {info.isLike ? <p>Dislike</p> : <p>Like</p>}
      </button>

      <button onClick={() => addCart(info.id)}>Addcart</button>
      <hr />
    </div>
  );
};

PhotoItem.prototype = {
  info: PropTypes.object,
};
export default PhotoList;
