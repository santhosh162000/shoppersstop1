import React from "react";
import image from './../assets/images/i.png';
import "./HeadBar.css";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as HiIcons from "react-icons/hi";

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
              <button><BiIcons.BiSearch size={20} color="LightGray"/></button>
            </div>
          </div>
          <div className="top-bar__cart">
            <div>
              <a href="/#"><AiIcons.AiOutlineHeart /> <p>Wishlist</p></a>
            </div>
          </div>
          <div className="top-bar__sign-in">
            <div>
            <a href="/#"><BiIcons.BiShoppingBag /> <p>MyBag</p></a>
            </div>
            </div>
            <div className="top-bar__profile">
            <div>
              <HiIcons.HiUserCircle size={40}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadBar;