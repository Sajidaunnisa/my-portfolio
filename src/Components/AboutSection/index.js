import React from "react";
import image from "./image1.png";

const About = () => {
  return (
    <div id="about" className="m-5">
      <div className="card bg-dark container-lg p-5 col-12">
        <h3 className="text-center text-danger fw-bold my-5">About me</h3>
        <div className="row g-0">
          <div className="col-md-4 col-sm-8 col-xl-2 img-container">
            <img
              src={image}
              className="img-fluid rounded-circle bg-danger first-img"
              alt="image"
            ></img>
          </div>
          <div className="col-7 ml-4">
            <div className="card-body">
              <p>
                <h5 className="card-title text-danger">Sajida Unnisa</h5>
              </p>
              <p className="card-text text-light">
                As a final-year student and experienced frontend developer, I
                bring a unique blend of skills and creativity to every project.
                With expertise in HTML, CSS, JavaScript, React.js, and Next.js,
                I've honed my abilities through diverse projects like Spotify
                and Zomato clones and Weather App. I'm passionate about
                delivering high-quality, user-centric designs and continually
                learning to create engaging and responsive interfaces.
              </p>
              <p className="card-text">
                <a
                  href="#contact"
                  type="button"
                  className="btn btn-sm btn-outline-danger"
                >
                  Contact me
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
