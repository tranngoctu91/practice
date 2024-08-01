import React, { useEffect, useRef, useState } from "react";

const TextArea = () => {
  const textAreaRef = useRef();
  const [text, setText] = useState("");
  const [heigh, setHeigh] = useState("auto");

  useEffect(() => {
    setHeigh(`${textAreaRef?.current?.scrollHeight}px`);
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <textarea
        onChange={handleChange}
        style={{ height: heigh }}
        name=""
        id=""
        ref={textAreaRef}
      ></textarea>
    </div>
  );
};

export default TextArea;
