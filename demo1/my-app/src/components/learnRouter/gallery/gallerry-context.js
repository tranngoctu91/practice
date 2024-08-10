import { createContext, useContext, useState } from "react";

const fakeData = [
  {
    id: 1,
    url: "https://plus.unsplash.com/premium_photo-1682320426935-f0614a9a6517?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isLike: false,
  },
  {
    id: 2,
    url: "https://plus.unsplash.com/premium_photo-1682320426935-f0614a9a6517?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isLike: false,
  },
  {
    id: 3,
    url: "https://plus.unsplash.com/premium_photo-1682320426935-f0614a9a6517?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isLike: false,
  },
  {
    id: 4,
    url: "https://plus.unsplash.com/premium_photo-1682320426935-f0614a9a6517?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isLike: false,
  },
  {
    id: 5,
    url: "https://plus.unsplash.com/premium_photo-1682320426935-f0614a9a6517?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isLike: true,
  },
];

const GalleryContext = createContext();
function GalleryProvider(props) {
  const [photos, setPhotos] = useState(fakeData);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);

  function toggleFavorite(photoId) {
    const updatedArray = photos.map((photo) => {
      if (photo.id === photoId) {
        photo.isLike = !photo.isLike;
      }
      return photo;
    });
    setPhotos(updatedArray);
  }

  function addCart(photoId) {
    var photo = photos.find((s) => s.id === photoId);
    if (photo) {
      setCartItems((prev) => [...prev, photo]);
    }
  }

  function removeItem(photoId) {
    var photo = photos.find((s) => s.id === photoId);
    if (photo) {
      setCartItems((pre) => {
        const filter = pre.filter((s) => s.id !== photo.id);
        return filter;
      });
    }
  }
  const value = {
    photos,
    cartItems,
    favoriteList,
    setPhotos,
    setCartItems,
    setFavoriteList,
    toggleFavorite,
    addCart,
    removeItem,
  };
  return (
    <GalleryContext.Provider value={value} {...props}></GalleryContext.Provider>
  );
}

function useGallery() {
  const context = useContext(GalleryContext);
  if (typeof context === "undefined") throw new Error("error");
  return context;
}
export { GalleryProvider, useGallery };
