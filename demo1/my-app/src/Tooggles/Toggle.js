import React, { useState } from "react";

const Toggle = () => {
  const [on, setOn] = useState(false);
  const handleClick = () => {
    if (on) {
      setOn(false);
    } else {
      setOn(true);
    }
  };

  return (
    <div>
      <p> {on ? "hello" : "googdbye"}</p>
      <button onClick={handleClick}>set</button>
    </div>
  );
};

export default Toggle;
