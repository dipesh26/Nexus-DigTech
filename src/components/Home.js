import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/Home.css"; // Import your CSS
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Blog from "../components/Blog";
import ContactUs from "../components/ContactUs";

const Home = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const logoRef = useRef(null);
  const navigate = useNavigate(); // Initialize navigate

  // Navigation Menu logic
  useEffect(() => {
    const activeElement = document.querySelector(".menu-item.active");
    if (activeElement) {
      const { offsetLeft, offsetWidth } = activeElement;
      setIndicatorStyle({
        left: offsetLeft + "px",
        width: offsetWidth + "px",
      });
    }
  }, [activeItem]);

  const handleMenuClick = (item) => {
    setActiveItem(item);

    // Use navigate instead of window.location.href
    if (item === "Home") {
      navigate("/"); // Navigate to Home
    } else if (item === "About Us") {
      navigate("/about-us"); // Navigate to About Us
    } else if (item === "Services") {
      navigate("/services"); // Navigate to Services
    } else if (item === "Portfolio") {
      navigate("/portfolio"); // Navigate to Portfolio
    } else if (item === "Blog") {
      navigate("/blog"); // Navigate to Blog
    } else if (item === "Contact Us") {
      navigate("/contact-us"); // Navigate to Contact Us
    }
  };

  // Logo animation effect
  useEffect(() => {
    if (logoRef.current) {
      logoRef.current.classList.add("bounce");
    }
  }, []);

  // Handle Get Quote button click
  const handleGetQuoteClick = () => {
    navigate("/contact-us"); // Navigate to Contact Us
  };

  return (
    <div className="home">
      {/* Logo Section */}
      <div className="logo-section">
        <div className="logo-container">
          <img
            ref={logoRef}
            src="../Assest/Images/NexusLogo.svg"
            alt="Nexus Logo"
            className="nexus-logo"
          />
          <h1 className="logo-text">NEXUS DIGTECH</h1>
        </div>
      </div>

      {/* Home Section */}
      <div className="home-section">
        <nav className="nav-menu">
          <ul className="menu-list">
            {["Home", "About Us", "Services", "Portfolio", "Blog", "Contact Us"].map((item) => (
              <li
                key={item}
                className={`menu-item ${activeItem === item ? "active" : ""}`}
                onClick={() => handleMenuClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="active-indicator" style={indicatorStyle}></div>
        </nav>
        <div className="cta-container">
          <button
            className="get-quote-button"
            onClick={handleGetQuoteClick} // Trigger navigation when clicked
          >
            GET QUOTE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
