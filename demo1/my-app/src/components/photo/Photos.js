import React, { useEffect, useState } from "react";
import axios from "axios";
const GetPhotos = async (page) => {
  try {
    const s = await axios.get(
      `https://picsum.photos/v2/list?limit=5&page=${page}`
    );
    return s.data;
  } catch (error) {
    console.log(error);
  }
};

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [nextPage, setNextPage] = useState(1);

  useEffect(() => {
    GetPhotos(nextPage).then((images) => {
      const newPhotos = [...photos, ...images];
      setPhotos(newPhotos);
    });
  }, [nextPage]);

  const handleLoadmore = () => {
    setNextPage((nextPage) => nextPage + 1);
  };

  return (
    <div className="grid grid-cols-4 gap-5 p-5">
      {photos.length > 0 && photos.map((s, i) => <p key={i}>{s.id}</p>)}
      <button onClick={() => handleLoadmore()}>Load more</button>
    </div>
  );
};

export default Photos;
