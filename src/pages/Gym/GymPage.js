// Import Links
import React from 'react';
import '../projects.css';
import gymvideo from '../../assets/gymvideo.mp4';
import bglive from '../../assets/bglive.mp4';

function GymPage() {
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
          <source src={gymvideo} type="video/mp4" />
        </video>
      </section>

      {/* Project Container Info */}
      <article>
        <section className="projects-container">
          <section className="practices">
            <h2 className="title">Practices</h2>
            <p>Another page I developed for Adtrak which mainly consists of interactability and functionality. This was a fairly straightforward and fast developed webpage to test out media implementations and a functional system for users to input data into.</p>
          </section>
          <section className="links">
            <h2 className="title">Links</h2>
            <p><a className="url" href="https://github.com/24992151/portfoliosmall">https://github.com/24992151/portfoliosmall</a></p>
          </section>
          <section className="included">
            <h2 className="title">What's Included?</h2>
            <p>By far the fastest task and was meant to test out file implementation for users to input data into while also remaining to edit and delete their files. This mainly consists of javascript and iteration planning between the adding, saving, editing and deleting phases that users can configure. No framework was included in this example page and the main purpose is to present user data while retaining contemporaneity</p>
          </section>
        </section>
      </article>
    </div>
  );
}

export default GymPage;