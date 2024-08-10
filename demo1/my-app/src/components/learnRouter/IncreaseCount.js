import React from "react";
import { useCount } from "./CountContext";

const IncreaseCount = () => {
  const { setCount } = useCount();
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Increare</button>
    </div>
  );
};

export default IncreaseCount;
