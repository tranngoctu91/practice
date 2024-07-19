import React, { useEffect } from "react";
// https://picsum.photos/v2/list
const Photos = () => {
  console.log("outside");
  useEffect(() => {
    document.title = "welcome to use effect";
    console.log("inside");
  }, []);
  return <div>Photo</div>;
};

export default Photos;
