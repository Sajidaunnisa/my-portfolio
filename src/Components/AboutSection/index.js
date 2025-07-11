import React from "react";
import image from "./images/image1.png";

const About = () => {
  return (
    <div id="about" className="container my-5">
      <div className="card bg-dark p-4">
        <h3 className="text-center text-danger fw-bold mb-4">About me</h3>
        <div className="row align-items-center g-4">
          {/* Profile Image */}
          <div className="col-12 col-md-4 text-center">
            <img
              src={image}
              className="img-fluid rounded-circle bg-danger p-1"
              alt="Sajida Unnisa"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
          </div>

          {/* Text Content */}
          <div className="col-12 col-md-8">
            <div className="card-body text-light">
              <p className="card-text">
                Hi, I’m <strong className="text-danger">Sajida Unnisa</strong> —
                a passionate <strong>MERN stack developer</strong> and B.Tech
                graduate in Computer Science Engineering (2025). I specialize in
                building responsive, user-focused web applications using
                technologies like{" "}
                <strong>React.js, Redux, Bootstrap, Node.js, Express</strong>,
                and <strong>MongoDB</strong>. From developing full-stack clones
                of platforms like Zomato and Myntra to building ConvoSync, a
                real-time chat application, I love transforming ideas into
                functional, visually appealing web experiences. I'm always eager
                to learn and grow by exploring new technologies and best
                practices in development. Outside of coding, I enjoy reading,
                crafting, and staying connected to my faith and family.
              </p>
              <a href="#contact" className="btn btn-outline-danger btn-sm mt-2">
                Contact me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
