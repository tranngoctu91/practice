import React from "react";
import Cell from "./Cell";

const Board = (props) => {
  return (
    <div className="game-board">
      {props.cells.map((s, i) => (
        <Cell key={i} value={s} onClick={() => props.onClick(i)}></Cell>
      ))}
    </div>
  );
};

export default Board;
