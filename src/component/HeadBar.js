import React from "react";
import image from './../assets/images/i.png';
import "./HeadBar.css";

const HeadBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar__container">
        <div className="top-bar__logo">
          <img
            src={image}
            alt="SHOPPERS STOP"
          />
        </div>
        <div className="top-bar__side-content">
          <div className="top-bar__searchbar">
            <div className="top-bar__searchbar__container">
              <input type="text" placeholder="Search Products & Brands" />
              <button>Search</button>
            </div>
          </div>
          <div className="top-bar__cart">
            <div>
              <p>Wishlist</p>
            </div>
          </div>
          <div className="top-bar__sign-in">
            <div>
              <p>MyBag</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadBar;