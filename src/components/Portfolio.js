import React from "react";
import Header from "./Header"; // Import the Header component
import "../styles/Portfolio.css"; 

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Header /> {/* Add the Header component here */}
      <header className="portfolio-header">
        <h1>Portfolio</h1>
      </header>
      <section className="portfolio-content">
        <div className="portfolio-intro">
          <h2>Our Team Work</h2>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;