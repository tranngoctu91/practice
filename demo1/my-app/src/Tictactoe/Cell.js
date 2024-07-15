import React from "react";

function Cell(props) {
  return (
    <div className="game-cell" onClick={props.onClick}>
      {props.value}
    </div>
  );
}

export default Cell;
