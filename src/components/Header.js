import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Header.css" // CSS specific to the Header Us page

const Header = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const logoRef = useRef(null);
  const navigate = useNavigate();

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

  useEffect(() => {
    if (logoRef.current) {
      logoRef.current.classList.add("bounce");
    }
  }, []);

  const handleGetQuoteClick = () => {
    // Implement the logic for handling the "GET QUOTE" button click here
    // For example, you could navigate to a "Quote" page:
    navigate("/quote"); 
  };

  return (
    <header className="header">
      <div className="logo-section">
        <div className="logo-container">
          <img
            ref={logoRef}
            src="../Assest/Images/Nexus-Logo.png"
            alt="Nexus Logo"
            className="nexus-logo"
          />
          <h1 className="logo-text">NEXUS DIGTECH</h1>
        </div>
      </div>

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
        <div className="cta-container">
          <button
            className="get-quote-button"
            onClick={handleGetQuoteClick} // Trigger navigation when clicked
          >
            GET QUOTE
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;