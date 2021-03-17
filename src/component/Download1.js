import React from "react";
import * as BsIcons from "react-icons/bs";
import image32 from "./../assets/images/42.jpg";
import image33 from "./../assets/images/43.jpg";

import "./Download1.css";

const DownloadAppa = (props) => {
  return (
    <div className="downloada">
      <div className="download-containera">
        <div className="download-contenta">
        <nav>
            <ul className="top-hook__nav-lis1">
            <li>
                <pre><BsIcons.BsQuestionCircle size={25} color="black"/> </pre>
              </li>
              <li>
                <p>QUESTIONS?</p>
              </li>
            </ul>
          </nav>
          <div className="download-storea">
            <p className="download-store1a">customercare@shoppersstop.com</p>
          </div>
        </div>
      </div>
      <div>
          <img
              src={image32}
              alt="play storea"
              className="download-store3a"
            />
            <img
              src={image33}
              alt="play storea"
              className="download-store4a"
            />
          </div>
    </div>
  );
};

export default DownloadAppa;