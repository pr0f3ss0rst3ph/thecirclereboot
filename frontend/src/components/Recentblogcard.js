import React from "react";

const Recentblogcard = ({ title, category, media, author }) => {
  return (
    <div>
      <div className="recent-blog-media"></div>
      <div className="recent-blog-details">
        <div className="recent-blog-title">{title}</div>
        <div className="recent-blog-metadata">
          <div className="recent-blog-category">{category}</div>
          <div className="recent-blog-author">{author}</div>
        </div>
      </div>
    </div>
  );
};

export default Recentblogcard;
