import React from 'react';
import Header from './Header'; // Import the Header component
import { Banner } from './Banner';

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