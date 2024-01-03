import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const BlogItem = ({ id, img, title, paragraph }) => {
  return (
    <div className="blog-item">
      <div className="blog-img">
        <img src={img} alt="" />
      </div>
      <div className="blog-content">
        <h3>{title}</h3>
        <p>{paragraph}</p>
        <Link to={`/blog/${id}`}>
          <span>Read More</span>
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
