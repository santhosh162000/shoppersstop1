import React from "react";
import "./FirstBar.css";

const FirstBar = () => {
  return (
    <div className="top-hook">
      <div className="top-hook__container">
        <div className="top-hook__title">
        <p>Choose from more than 1 lakh + Styles and Exclusive brands</p>
        </div>
        <div className="top-hook__navbar">
          <nav>
            <ul className="top-hook__nav-list">
              <li>
                <a href="/#">All Stores </a>
              </li>
              <li>
                <a href="/#">Contact Us</a>
              </li>
              <li>
                <a href="/#">Track Order</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default FirstBar;