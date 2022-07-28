import React from "react";
import "../style/style.css";
import { ServiceBox } from "./ServiceBox";

  const urlOfFirstFotoOne = "specialist-text-circle1";
  const urlOfFirstFotoTwo = "specialist-text-circle2";
  const nameSurnameOne = "Imię i Nazwisko [ dział ]";
  const nameSurnameTwo = "Imię i Nazwisko [ dział ]";
  const boxTitleText = "Czym zajmuje się nasza firma?";
  const bodyTitleText = "Nasi specjaliści";
  const myServiceBoxOne = "Usluga 2";
  const myServiceBoxTwo = "Usluga 3";
  const myServiceBoxThree = "Usluga 4";
  const myServiceBoxFour = "Usluga 5";
  const myServiceBoxFive = "Usluga 6";
  const sampleTextFilOne =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, " +
    "officia nam eum modi nulla amet laborum neque praesentium omnis" + 
    " cupiditate placeat hic quo ut corporis repudiandae sequi necessitatibus" + 
    " ex optio. Unde nesciunt dignissimos necessitatibus non recusandae " + 
    "exercitationem voluptates nostrum quos! Sapiente, totam dicta.";

  const sampleTextFilTwo =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. " + 
    " Reprehenderit possimus dolorum consectetur voluptate eaque," + 
    " illo molestiae officiis? Nisi sint velit beatae, quas debitis " + 
    "quis modi corporis doloremque maiores nesciunt aliquid ducimus " + 
    "hic natus qui, nihil, nemo blanditiis. Similique, corporis corrupti veniam.";

  const selectServicesArray = [
    myServiceBoxOne,
    myServiceBoxTwo,
    myServiceBoxThree,
    myServiceBoxFour,
    myServiceBoxFive,
  ];

  const personsInformationArray = [
    { foto: urlOfFirstFotoOne, name: nameSurnameOne, text: sampleTextFilOne },
    { foto: urlOfFirstFotoTwo, name: nameSurnameTwo, text: sampleTextFilTwo },
  ];

  const textSelector = (index, item) => {
    return index === personsInformationArray.length - 1 ? (
      <p className="specialist-text_text2_wrapper-p">{item.text}</p>
    ) : (
      <p className="section-specialist-text1-div-p">{item.text}</p>
    );
  };

  const classNameVar = (index) => {
    return `section-work-service${index + 2} service-with`;
  };

  const individualServiceBox = (item, index) => {      
    return ( 
    <div key={index} className={classNameVar(index)}>
      <h3>{item}</h3>
    </div>
    )
  }; 

  const personalInformationBox = (item, index) => {
    return (
    <div key={index} className="specialist-text-text1">
      <div className={item.foto}></div>
      <div className="specialist-text-wrapper">
        <h4>{item.name}</h4>
        {textSelector(index, item)}
      </div>
    </div>
    )
  }

export const Body = () => {
  return (
    <main>
      <section id="section-self-description" className="main-container container">
        <h1 className="specialist-text-h1">{bodyTitleText}</h1>
        {personsInformationArray.map((item, index) => (personalInformationBox(item, index)))}
      </section>

      <section id="work" className="section-work">
        <div className="section-work-div container">
          <h2 className="section-work-h2">{boxTitleText}</h2>
          <ServiceBox />
          {selectServicesArray.map((item, index) => (individualServiceBox(item, index)))}
        </div>
      </section>
    </main>
  );
};
