import React from 'react';
import Header from "../components/Header";
import "../styles/Home.css";
import { Banner } from "../components/Banner";  // Correct path if Banner is in components folder


const Home = () => {
  return (
    <div className="home">
      <Header /> 
      <Banner />
      {/* Rest of your Home component content */}
    </div>
  );
};

export default Home;