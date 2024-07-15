import React, { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(1);
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleCount}>Increment</button>
    </div>
  );
}

export default Counter;
