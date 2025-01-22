import React from "react";
import "../styles/AboutUs.css" // CSS specific to the About Us page

const AboutUs = () => {
  return (
    <div className="about-us">
      <header className="about-header">
        <h1>About Us</h1>
      </header>
      <section className="about-content">
        <div className="about-intro">
          <h2>Who We Are</h2>
          <p>
            We are a team of passionate individuals dedicated to delivering
            top-notch solutions tailored to your needs. Our mission is to bring
            your vision to life with creativity, innovation, and excellence.
          </p>
        </div>
        <div className="our-mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower businesses and individuals by providing
            solutions that make a difference. We strive to build strong
            relationships and deliver exceptional results.
          </p>
        </div>
        <div className="team-section">
          <h2>Meet the Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img
                src="team-member-1.jpg"
                alt="Team Member 1"
                className="team-photo"
              />
              <h3>John Doe</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img
                src="team-member-2.jpg"
                alt="Team Member 2"
                className="team-photo"
              />
              <h3>Jane Smith</h3>
              <p>CTO</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
