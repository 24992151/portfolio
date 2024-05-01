import React from 'react';
import './homePage.css';
import portfoliohero from '../../assets/portfoliohero.jpg';
import pwib from '../../assets/pwib.png';
import pworkout from '../../assets/pworkout.png';
import pdubai from '../../assets/pdubai.png';


const HomePage = () => {
  return (
    <div className="app">
      {/* Hero Image */}
      <section>
        <img src={portfoliohero} alt="portfoliohero" className="heroimage" />
      </section>
    </div>
  );
};

export default HomePage;