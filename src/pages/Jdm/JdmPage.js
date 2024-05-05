// Import Links
import React from 'react';
import '../projects.css';
import jdmvideo from '../../assets/jdmvideo.mp4';
import bglive from '../../assets/bglive.mp4';

function JdmPage() {
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
          <source src={jdmvideo} type="video/mp4" />
        </video>
      </section>

      {/* Project Container Info */}
      <article>
        <section className="projects-container">
          <section className="practices">
            <h2 className="title">Practices</h2>
            <p>In this project, I didn't use a framework due to the fact it was primarily focused on the animation and different styling of website than found in ubiquitous web design. It has a combination of CSS animation, unconventional navigation and layout and unique interactions.</p>
          </section>
          <section className="links">
            <h2 className="title">Links</h2>
            <p><a className="url" href="https://github.com/24992151/webisboring">https://github.com/24992151/webisboring</a></p>
          </section>
          <section className="included">
            <h2 className="title">What's Included?</h2>
            <p>As this was a learning experience in more advanced animations and interactions. I mainly tested using the likes of css animations on hoverable effects and keyframe animation. On top of that, the use of interaction helped create a narrative-like experience for users. The entire point of this was going against traditional elements mainly found on sites and then creating a working build for desktop which turned out a success in the post-build user research.</p>
          </section>
        </section>
      </article>
    </div>
  );
}

export default JdmPage;