import React from "react";

const Subscribecard = () => {
  return (
    <div className="subscribecard">
      <div className="subscribe-site-title">THE TECH KLUB</div>
      <div className="subscribe-message">
        SUBSCRIBE TO OUR NEWSLETTER AND KEEP IN THE LOOP
      </div>
      <form className="subscribe-form">
        <div className="subscribe-input-box">
          <input
            type="text"
            placeholder="Enter email here..."
            id="subscribe-email"
          />
        </div>
        <div className="subscribe-button-field">
          <button className="subscribe-button">SUBSCRIBE</button>
        </div>
      </form>
    </div>
  );
};

export default Subscribecard;
