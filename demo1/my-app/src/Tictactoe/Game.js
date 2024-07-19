import React, { useReducer, useState } from "react";

import "./GameStyle.css";
import Board from "./Board";
import { CheckWin } from "../Helper";
import { type } from "@testing-library/user-event/dist/type";

const initialState = {
  board: Array(9).fill(),
  xIsNext: true,
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      const { board, xIsNext } = state;
      const { index, winner } = action.payload;
      if (winner || board[index]) {
        return state;
      }
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board[index] = xIsNext ? "X" : "O";
      nextState.xIsNext = !xIsNext;
      return nextState;
    }
    case "RESEST": {
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board = Array(9).fill(null);
      nextState.xIsNext = true;
      return nextState;
    }
    default:
      break;
  }
  return state;
};
const Game = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const winner = CheckWin(state.board);

  const handleClick = (index) => {
    dispatch({
      type: "CLICK",
      payload: {
        index,
        winner,
      },
    });
  };
  const handleReset = () => {
    dispatch({
      type: "RESEST",
    });
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      {winner ? `winner is ${state.xIsNext ? "O" : "X"}` : ""}
      <button onClick={() => handleReset()}> Resest</button>
    </div>
  );
};

export default Game;
