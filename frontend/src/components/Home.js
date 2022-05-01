import React from "react";
import Navigation from "./Navigation";
import Featuredcard from "./Featuredcard";
import Trendingcard from "./Trendingcard";
import Subscribecard from "./Subscribecard";
import Recentblogs from "./Recentblogs";
import Footer from "./Footer";
import sideimage from "../images/sideimageedit.png";
import blogheader from "../images/blogheader.png";

const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="header">
          <div className="sideimage1">
            <img src={sideimage} alt="side" id="sideimage" />
          </div>
          <div className="site-title">The Tech Klub</div>
          <div className="sideimage2">
            <img src={sideimage} alt="side" id="sideimage" />
          </div>
        </div>
        <Navigation />
      </div>
      <div className="site-info">...Latest tech news at your fingertips</div>
      <Featuredcard />
      <div className="trending-blogs">
        <Trendingcard
          title="New leaks show new design for Macbook Air"
          media={blogheader}
          author="Stephon Fraser"
          category="Apple"
        />
        <Trendingcard
          title="Microsoft 365 and Features you might like"
          media={blogheader}
          author="Stephon Fraser"
          category="Microsoft"
        />
        <Trendingcard
          title="Is Shopify Hydrogen to best react framework?"
          media={blogheader}
          author="Stephon Fraser"
          category="FrontEnd"
        />
        <Trendingcard
          title="CSS best practices you should follow."
          media={blogheader}
          author="Stephon Fraser"
          category="Frontend"
        />
      </div>
      <Subscribecard />
      <Recentblogs />
      <Footer />
    </div>
  );
};

export default Home;
