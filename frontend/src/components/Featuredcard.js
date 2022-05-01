import React from "react";
import blogheader from "../images/blogheader.png";
import authorimage from "../images/authorimage.png";

const Featuredcard = () => {
  return (
    <div className="featured-blog-card">
      <div className="featured-blog-media">
        <div className="featured-image">
          <img src={blogheader} alt="blog header" id="blogheader" />
        </div>
      </div>
      <div className="featured-blog-content">
        <div className="featured-blog-title">
          Web3 taking the internet by storm. But what is the hype about?
        </div>
        <div className="featured-blog-metadata">
          <div className="featured-blog-author">
            <div className="author-image">
              <img src={authorimage} alt="profile" id="authorimage" />
            </div>
            <div className="author-name">By Stephon Fraser</div>
          </div>
          <div className="featured-blog-date">Apr 1st, 2022</div>
          <div className="featured-blog-category">Web3</div>
        </div>
        <div className="featured-blog-details">
          The world of technology is rapidly evolving. New hardware and software
          are released almost everyday and we’re constantly watching on to see
          where the world we go from here. The web itself is no exception. Read
          more to find out about Web3 and how it will impact the future.
        </div>
      </div>
    </div>
  );
};

export default Featuredcard;
