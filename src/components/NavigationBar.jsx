import React from "react";
import "../style/style.css";

const textOne = "oferta";
const textTwo = "o nas";
const textThree = "kontakt";

const hiperlinkSet = (className, link, linkText ) => {
  return (<a className={className} href={link}>{linkText}</a>)
};

const button = (className, buttonText) => {
  return (
    <button className={className} disabled>{buttonText}</button>
  )
};

export const NavigationBar = () => {
  return (
    <nav>
      <div className="navigation-container container">
        <p className="navigation_container-p">web driver</p>
        <ul className="navigation_container-link">
          <li>
              {hiperlinkSet("link-us", "#work", textOne )}
          </li>
          <li>
              {hiperlinkSet("link-us", "#section-self-description", textTwo )}
          </li>
          <li>
              {button("btn-contact", textThree)}
          </li>
        </ul>
      </div>
    </nav>
  );
};
