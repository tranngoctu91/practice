import React from "react";

const MovieItem = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h3>{data.title}</h3>
      <p>{data.overview}</p>
    </div>
  );
};

export default MovieItem;
