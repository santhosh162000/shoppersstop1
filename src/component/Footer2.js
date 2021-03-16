import React from "react";

import LinksCard from "./LinksCard";

import "./Footer2.css";

const linksData = [
  {
    heading: "CUSTOMER",
    links: [
        "HELP/FAQS",
        "TRACK ORDER",
        "SIZE GUIDE",
        "BUYING GUIDE",
        "HOW DO I SHOP?",
        "HOW DO I PAY?",
        "FIND PLACES WE DELIVER",
        "STYLE HUB",
    ],
  },
  {
    heading: "POLICIES",
    links: [
        "TERMS OF USE",
        "PRIVACY",
        "DELIVERY POLICY",
        "EXCHANGES & RETURNS",
    ],
  },
  {
    heading: "STORE AND SITES",
    links: [
        "ABOUT US",
        "CONTACT US",
        "CUSTOMER SERVICE",
        "CORPORATE SITE",
        "STORE LOCATOR",
        "CAREERS",
    ],
  },
  {
    heading: "DELIGHTFUL PROGRAMS",
    links: [
        "INSTANT GIFTING",
        "EXPRESS STORE PICK UP",
    ],
  },
  {
    heading: "FIRST CITIZEN",
    links: [
      "FIRST CITIZEN",
    ],
  },
  {
    heading: "REACH US",
    links: [
        "FOR ANY QUERY PLEASE EMAIL US",
        "customercare@shoppersstop.com",
    ],
  },
];

const Footer2 = (props) => {
  return (
    <div className="middle-links">
      <div className="middle-links-container">
        {linksData.map((item) => {
          return <LinksCard heading={item.heading} links={item.links} />;
        })}
          
        </div>
      </div>
  );
};

export default Footer2;