import React from "react";
import DisplayCount from "./DisplayCount";
import IncreaseCount from "./IncreaseCount";
import { CountProvider } from "./CountContext";

const WrapCount = () => {
  return (
    <div>
      <CountProvider>
        <DisplayCount></DisplayCount>
        <IncreaseCount></IncreaseCount>
      </CountProvider>
    </div>
  );
};

export default WrapCount;
