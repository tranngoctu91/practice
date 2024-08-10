import React, { useContext } from "react";
import { useCount } from "./CountContext";

const DisplayCount = () => {
  const { count } = useCount();
  return <div>{count}</div>;
};

export default DisplayCount;
