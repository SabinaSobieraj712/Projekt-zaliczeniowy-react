import React from "react";
import "../style/style.css";

const legalNotice = "Nasza firma - wszelkie prawa zastrzeżone, 2022 ®";
const urlOfIstagram = "https://img.icons8.com/ffffff/31/instagram-new--v1.png";
const urlOfFacebook = "https://img.icons8.com/ffffff/31/facebook.png";

const socialBoxElement = (className, url, alt) => {
  return (
    <img
      className= {className}
      src= {url}
      alt= {alt}
    />
  )
}

export const Footer = () => {
  return (
    <footer>
      <section className="footer-section container">
        <p className="footer-p">
          {legalNotice}
        </p>
        <div className="footer-div">
          {socialBoxElement("footer-icon", urlOfIstagram, "instagram")}
          {socialBoxElement("footer-icon", urlOfFacebook, "facebook")}
        </div>
      </section>
    </footer>
  );
};
