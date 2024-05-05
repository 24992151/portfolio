// Import Links
import React from 'react';
import '../projects.css';
import dubaivideo from '../../assets/dubaivideo.mp4';
import bglive from '../../assets/bglive.mp4';

function DubaiPage() {
  return (
    <div className="page">

      {/* Live Background */}
      <section>
        <video autoPlay muted loop id="bglive">
          <source src={bglive} type="video/mp4" />
        </video>
      </section>

      {/* Video */}
      <section className="video">
        <video autoPlay loop muted>
          <source src={dubaivideo} type="video/mp4" />
        </video>
      </section>

      {/* Project Container Info */}
      <article>
        <section className="projects-container">
          <section className="practices">
            <h2 className="title">Practices</h2>
            <p>This project was a minimalist site for a Dubai Landscaping company for Adtrak, a web based company in Nottingham. The primary goal for this was to create site based on suitable colour schemes and layout for a landscaping company as well as a layout which is both accessible and usable.</p>
          </section>
          <section className="links">
            <h2 className="title">Links</h2>
            <p><a className="url" href="https://github.com/24992151/portfoliolarge">https://github.com/24992151/portfoliolarge</a></p>
          </section>
          <section className="included">
            <h2 className="title">What's Included?</h2>
            <p>This site was made using React while using Git for iterative version control. Some of the included implementation included Flexbox, overlays and the first time using media queries for responsive web design. The primary focus was creating the site in the most minimalist fashion while containing all the clients wanted content and information.</p>
          </section>
        </section>
      </article>
    </div>
  );
}

export default DubaiPage;