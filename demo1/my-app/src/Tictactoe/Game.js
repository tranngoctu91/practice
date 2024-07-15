import React, { useState } from "react";

import "./GameStyle.css";
import Board from "./Board";
import { CheckWin } from "../Helper";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winder = CheckWin(board);
  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winder || boardCopy[index]) {
      return;
    }
    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };
  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
      {winder ? `winner is ${xIsNext ? "O" : "X"}` : ""}
    </div>
  );
};

export default Game;
