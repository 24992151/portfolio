// Import Links
import React from 'react';
import '../projects.css';
import jdmvideo from '../../assets/jdmvideo.mp4';

function JdmPage() {
  return (
    <div className="page">
      {/* Video */}
      <section className="video">
        <video autoPlay loop muted>
          <source src={jdmvideo} type="video/mp4" />
        </video>
      </section>

      {/* Project Container Info */}
      <article>
        <section className="projects-container">
          <section className="practices">
            <h2 className="title">Practices</h2>
          </section>
          <section className="links">
            <h2 className="title">Links</h2>
            <p><a className="url" href="https://github.com/24992151/webisboring">https://github.com/24992151/webisboring</a></p>
          </section>
          <section className="included">
            <h2 className="title">What's Included?</h2>
          </section>
        </section>
      </article>
    </div>
  );
}

export default JdmPage;