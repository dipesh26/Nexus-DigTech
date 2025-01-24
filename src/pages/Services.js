import React from "react";
import Header from "../components/Header";
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
      <header className="services-header">
      <h1> Our Services</h1>
      </header>

     <section className="services-content">
        <div className="services-intro">
          <h3>We Are Specialized in The Following Services</h3>
        </div>

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
      </section>
    </div>
  );
};

export default Services;