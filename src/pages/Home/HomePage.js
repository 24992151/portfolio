// Import Links
import React from 'react';
import { Link } from 'react-router-dom';
import './homePage.css';
import portfoliohero from '../../assets/portfoliohero.jpg';
import pwib from '../../assets/pwib.png';
import pworkout from '../../assets/pworkout.png';
import pdubai from '../../assets/pdubai.png';
import timelineimage from '../../assets/timeline.png';
import fblogo from '../../assets/fblogo.png';
import linkedinlogo from '../../assets/linkedinlogo.png';
import gitlogo from '../../assets/gitlogo.png';
import bglive from '../../assets/bglive.mp4';


const HomePage = () => {
  return (
    <div className="app">
      {/* Hero Image */}
      <section>
        <img src={portfoliohero} alt="portfoliohero" className="heroimage" />
      </section>

      <section>
        <video autoPlay muted loop id="bglive">
          <source src={bglive} type="video/mp4" />
        </video>
      </section>

      {/* Portfolio Cards */}
      <section className="portfolio-cards">
        <Link to="/jdm" className="card">
          <section>
            <div className="card-overlay"></div>
            <img src={pwib} alt="JDM Dynasty" />
            <section className="card-content">
              <h2>JDM Dynasty</h2>
            </section>
          </section>
        </Link>
        <Link to="/gym" className="card">
          <section>
            <div className="card-overlay"></div>
            <img src={pworkout} alt="Pine Gym System" />
            <section className="card-content">
              <h2>Pine Gym</h2>
            </section>
          </section>
        </Link>
        <Link to="/dubai" className="card">
          <section>
            <div className="card-overlay"></div>
            <img src={pdubai} alt="Dubai Landscapes" />
            <section className="card-content">
              <h2>Dubai Landscapes</h2>
            </section>
          </section>
        </Link>
      </section>

      {/* About Me */}
      <section className="about-me">
        <h2 className='subheading'>About Me</h2>
        <p>Hi! I'm James Hutchinson from North Yorkshire and specialise in Web and Graphical Design and Development. As someone who's passionate and skilled I offer a range of abilities, including being profecient in computer applications, programming and project coordination. Throughout the decade I have honed my proficiency in utilising software like Microsoft and Adobe products as well as coding languages such as HTML,CSS, Python and JavaScript. This background has enabled me to deliver projects across different sectors like architecture, agriculture and retail. Moreover I am currently enrolled at Edge Hill University to further my education in full-stack web development and related disciplines. I look forward to applying my knowledge and expertise to deliver solutions, for clients while introducing perspectives to their projects.</p>
      </section>

      {/* About CSS-Grid */}
      <article className="About">
        <section className="grid-container">
          {/* Timeline */}
          <div className="timeline">
            <h2 className="section-title">Timeline</h2>
            <img className="timeline-image" src={timelineimage} alt="timelineimage" />
          </div>
          {/* Skills */}
          <div className="top-section">
          <div className="skills">
            <h2 className="section-title">Skills</h2>
            <h3>Coding Languages</h3>
            <ul>
              <li>HTML5 - Semantic and Formatted</li>
              <li>CSS3 - Using the likes of CSS Grid, Flexbox, Animations and Styling</li>
              <li>Javascript - Preferred Language paired with React and Node.js</li>
              <li>PHP - Minimal Worktime with PHP and mostly used with Back-End Projects</li>
              <li>Python - Once again, can write in Python but barely used on any significant</li>
            </ul>
            <h3>Frameworks</h3>
            <ul>
              <li>React - Preferred framework for Front-End and my most confident framework</li>
              <li>Laravel - Created Projects for Questionnaire systems with back-end servers</li>
            </ul>
            <h3>Extra Skills</h3>
            <ul>
              <li>Web Design and Development, User Experience Design and Prototyping w/ Figma</li>
              <li>Graphic Design - Adobe Photoshop, Premiere and InDesign</li>
              <li>Project Coordination and Management using the likes of GitHub and Team Working</li>
              <li>3D Rendering and Game Development - Unity & Phaser3</li>
              <li>Knowledge of RESTful APIs and MySQL Servers</li>
            </ul>
          </div>
            <div className="bottom-section">
              {/* Google Maps Embed */}
              <div className="location">
              <iframe title="My Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18577.275763494752!2d-1.75705461248043!3d54.40715997522302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487c143110453459%3A0xd540bbc12e391bb0!2sRichmond%2C%20UK!5e0!3m2!1sen!2snl!4v1714610235134!5m2!1sen!2snl" className="iframe"></iframe>
              </div>
              {/* Contact */}
              <div className="contact">
                <h2 className="section-title">Contact</h2>
                <div className="contact-box">
                  <a href="https://www.facebook.com/james.hutchinson.92102/">
                    <img src={fblogo} alt="Facebook" className="contact-logo" />
                  </a>
                  <a href="https://www.linkedin.com/in/james-hutchinson-327733261">
                    <img src={linkedinlogo} alt="LinkedIn" className="contact-logo" />
                  </a>
                  <a href="https://github.com/24992151">
                    <img src={gitlogo} alt="GitHub" className="contact-logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default HomePage;