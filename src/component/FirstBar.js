import React from "react";
import "./FirstBar.css";
import * as BsIcons from "react-icons/bs";

const FirstBar = () => {
  return (
    <div className="top-hook">
      <div className="top-hook__container">
        <div className="top-hook__title">
          <nav>
            <ul className="top-hook__nav-lis">
            <li>
                <pre><BsIcons.BsCircleFill size={6} color="red"/> </pre>
              </li>
              <li>
                <p>  Choose from more than 1 lakh + Styles and Exclusive brands</p>
              </li>
            </ul>
          </nav>
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