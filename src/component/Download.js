import React from "react";

import appStoreImg from "./../assets/images/appstore.png";
import playStoreImg from "./../assets/images/playstore.png";
import image32 from "./../assets/images/32.jpg";
import image33 from "./../assets/images/33a.jpg";

import "./Download.css";

const DownloadApp = (props) => {
  return (
    <div className="download">
      <div className="download-container">
        <div className="download-content">
          <p className="download-desc1">DOWNLOAD THE APP ON</p>
          <div className="download-store">
            <img
              src={appStoreImg}
              alt="app store"
              className="download-store1"
            />
            <img
              src={playStoreImg}
              alt="play store"
              className="download-store2"
            />
          </div>
        </div>
      </div>
      <div>
          <img
              src={image32}
              alt="play store"
              className="download-store3"
            />
            <img
              src={image33}
              alt="play store"
              className="download-store4"
            />
          </div>
    </div>
  );
};

export default DownloadApp;