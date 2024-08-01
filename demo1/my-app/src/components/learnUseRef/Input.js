import React, { useEffect, useRef } from "react";

const Input = () => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.value = "abc";
  }, []);

  return (
    <div>
      <input type="text" name="" ref={inputRef} />
    </div>
  );
};

export default Input;
