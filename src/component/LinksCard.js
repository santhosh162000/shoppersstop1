import React from "react";

import "./LinksCard.css";

const LinksCard = ({ heading, links }) => {
  return (
    <div className="links-card">
      <div className="links-card-container">
        <p className="links-card-heading">{heading}</p>
        <ul className="links-card-ul">
          {links.map((link) => {
            return (
              <li className="links-card-li">
                <a href="/#" className="links-card-a">
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LinksCard;