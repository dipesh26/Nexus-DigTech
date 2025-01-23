import React from "react";
import Header from "./Header"; 
import "../styles/Services.css"; 

const Services = () => {

  const Card = ({ imgSrc, title, description }) => { 
    return (
      <div className="card"> 
        <img src={imgSrc} alt={title} /> 
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  };

  return (
    <div className="services">
      <Header /> 
      <h1> Our Services</h1>
      <h3>We Are Specialized in The Following Services</h3>

      <div className="card-container">
        <Card 
          imgSrc="../Assets/Images/videoediting-img.png" 
          title="Video Editing" 
          description="This is the card content. It slides up when you hover over the card." 
        />
        <Card 
          imgSrc="../Assets/Images/Websitebuilding-img.png" 
          title="Website Building" 
          description="This is the card content. It slides up when you hover over the card." 
        />
        {/* Add more cards here */}
      </div>
    </div>
  );
};

export default Services;