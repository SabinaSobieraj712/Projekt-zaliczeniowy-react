import React from "react";

import "../style/style.css";

const titleText = "Usługa 1";
const descriptionText = "nowość";

const newServiceBox = (titleText, descriptionText) => {
  return (
    <div className="section-work-service1 service-with">
      <h3>{titleText}</h3>
      <p className="section-work-service1-p">({descriptionText})</p>
      <div className="section-work-service1-circle"></div>
    </div>
  )
}

export const ServiceBox = () => {
  return ( newServiceBox(titleText, descriptionText) );
};
