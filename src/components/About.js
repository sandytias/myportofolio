import React from "react";

function About() {
  return (
    <section className="page-section bg-primary text-white mb-0" id="about">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-white">
          About Me
        </h2>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row">
          <div className="col">
            <p className="lead">
              Hello, my name is Sandy, I graduated from ISM (Indonesian School
              of Management) in Master's Degree at Economics. Previously, I
              worked at PT Mandiri Utama Finance as a BRO (Business Relation
              Officer) for 5 months, and I decided to resign because I was
              interested in the world of IT, Web Development to be more precise.
              To master my passion, I prepared myself by taking part in the
              Bootcamp at Purwadhika Startup and Coding School, and several
              other online courses.
            </p>
          </div>
        </div>
        <div className="text-center mt-4">
          <a
            className="btn btn-xl btn-outline-light"
            href="https://res.cloudinary.com/dxenadjps/image/upload/v1603360225/images/0001_xeoanh.jpg"
          >
            <i className="fas fa-image mr-2"></i>
            My CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
