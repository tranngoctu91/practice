import React from "react";
import useLinkNewTab from "../../hooks/useLinkNewTab";
import useHover from "../../hooks/useHover";

const Blog = () => {
  const { contentRef } = useLinkNewTab();
  const { hovered, nodeRef } = useHover();
  return (
    <div ref={contentRef}>
      <a
        href="https://www.google.com.vn/?hl=vi"
        className={`underline ${hovered ? "text-green" : ""}`}
        ref={nodeRef}
      >
        google
      </a>
      <a href="https://www.google.com.vn/?hl=vi" className="underline">
        google
      </a>

      <a href="https://www.google.com.vn/?hl=vi" className="underline">
        google
      </a>
    </div>
  );
};

export default Blog;
