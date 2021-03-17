import React from "react";

import downloadImg from "./../assets/images/31.webp";
import appStoreImg from "./../assets/images/31a.jpg";

import "./Slide10.css";

const DownloadApp1 = (props) => {
  return (
    <div className="download1">
      <div className="download-container1">
        <div className="download-img-container1">
          <img src={downloadImg} alt="download" />
        </div>
        <div className="download-content1">
          <p className="download-title1">Colour Me Happy</p>
          <div className="download-store1">
            <img
              src={appStoreImg}
              alt="app store"
              className="download-store11"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp1;