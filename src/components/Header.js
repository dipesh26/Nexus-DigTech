import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "../styles/Header.css"; // CSS specific to the Header Us page

const Header = () => {
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const logoRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Determine the active item based on the current pathname
  const activeItem = (() => {
    switch (location.pathname) {
      case '/':
        return 'Home';
      case '/about-us':
        return 'About Us';
      case '/services':
        return 'Services';
      case '/portfolio':
        return 'Portfolio';
      case '/blog':
        return 'Blog';
      case '/contact-us':
        return 'Contact Us';
      default:
        return '';
    }
  })();

  useEffect(() => {
    const updateIndicator = () => {
      const activeElement = document.querySelector(".menu-item.active");
      if (activeElement) {
        const { offsetLeft, offsetWidth } = activeElement;
        setIndicatorStyle({
          left: offsetLeft + "px",
          width: offsetWidth + "px",
        });
      }
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator); // Update on window resize

    return () => {
      window.removeEventListener('resize', updateIndicator);
    };
  }, [activeItem]);

  const handleMenuClick = (item) => {
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
    navigate("/contact-us");
  };

  return (
    <header className="header">
      <div className="logo-section">
        <div className="logo-container">
          <img
            ref={logoRef}
            src="../assets/images/Nexus-Logo.png"
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
        <div className="cta-container">
          <button
            className="get-quote-button"
            onClick={handleGetQuoteClick}
          >
            GET QUOTE
          </button>
        </div>
        <div className="active-indicator" style={indicatorStyle}></div>
      </nav>
    </header>
  );
};

export default Header;
