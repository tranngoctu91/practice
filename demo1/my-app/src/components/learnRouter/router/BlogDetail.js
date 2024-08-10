import React from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { slug } = useParams();
  console.log(slug);
  return <div>BlogDetail hello</div>;
};

export default BlogDetail;
