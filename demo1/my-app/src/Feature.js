import React from "react";

function Feature(props) {
  console.log();

  return (
    <div>
      {props.children}
      <p>{props.title}</p>
      <p>{props.content || "no content"}</p>
    </div>
  );
}

export default Feature;
