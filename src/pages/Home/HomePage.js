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

      {/* Portfolio Cards */}
      <section className="portfolio-cards">
        <section className="card">
          <div className="card-overlay"></div>
          <img src={pwib} alt="JDM Dynasty" />
          <section className="card-content">
            <h2>JDM Dynasty</h2>
          </section>
        </section>
        <section className="card">
          <div className="card-overlay"></div>
          <img src={pworkout} alt="Pine Gym System" />
          <section className="card-content">
            <h2>Pine Gym</h2>
          </section>
        </section>
        <section className="card">
          <div className="card-overlay"></div>
          <img src={pdubai} alt="Dubai Landscapes" />
          <section className="card-content">
            <h2>Dubai Landscapes</h2>
          </section>
        </section>
      </section>
    </div>
  );
};

export default HomePage;