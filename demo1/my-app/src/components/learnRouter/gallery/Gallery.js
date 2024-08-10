import React from "react";
import { GalleryProvider } from "./gallerry-context";
import Cart from "./Cart";
import PhotoList from "./PhotoList";

const Gallery = () => {
  return (
    <div>
      <GalleryProvider>
        <Cart></Cart>
        <PhotoList></PhotoList>
      </GalleryProvider>
    </div>
  );
};

export default Gallery;
