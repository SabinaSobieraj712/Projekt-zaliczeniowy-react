import React from "react";
import "../style/style.css";

const h1Text = "Nasza firma oferuje najwyższej jakości produkty.";
const headParagraph = "Nie wierz nam na słowo - sprawdź";
const buttonText = "oferta";

const button = (buttonText) => {
  return (
    <button className="head-btn">
        <a href="#work">{buttonText}</a>
    </button>
  )
};

export const Header = () => {
  return (
    <header className="head-sect">
      <div className="container">
        <h1 className="head-h1">{h1Text}</h1>
        <p className="head-p">{headParagraph}</p>
          {button(buttonText)}
      </div>
    </header>
  );
};
