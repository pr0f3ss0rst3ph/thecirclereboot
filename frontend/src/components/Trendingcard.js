import React from "react";

const Trendingcard = ({ media, title, author, category }) => {
  return (
    <div className="trending-blog-card">
      <div className="trending-blog-media">
        <img src={media} alt="blog header" id="blogheader" />
      </div>
      <div className="trending-blog-title">{title}</div>
      <div className="trending-blog-metadata">
        <div className="trending-blog-author">by {author}</div>
        <div className="trending-blog-category">{category}</div>
      </div>
    </div>
  );
};

export default Trendingcard;
