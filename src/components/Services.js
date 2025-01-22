import React from "react";
import "../styles/Services.css"; // CSS specific to the About Us page

const Card = ({ imgSrc, title, description }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-image">
          {/* Use the absolute path to the image */}
          <img src={imgSrc} alt={title} />
        </div>
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      {/* Main Heading */}
      <h1 className="main-heading"> Our Services</h1>
      <h3 className="heading">We Are Specialized in The Following Services</h3>
      
      <div className="card-container">
        {/* Card 1 */}
        <Card
          // Use the absolute path to the image in the public folder
          imgSrc="../Assets/Images/videoediting-img.png"
          title="Video Editing"
          description="This is the card content. It slides up when you hover over the card."
        />
        {/* Card 2 */}
        <Card
          // Use the absolute path to the image in the public folder
          imgSrc="../Assets/Images/Websitebuilding-img.png"
          title="Website Building"
          description="This is the card content. It slides up when you hover over the card."
        />
      </div>
    </div>
  );
};

export default App;
