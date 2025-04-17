import React from "react";
import image from "./images/image2.png";
import "animate.css";

const Contact = () => {
  return (
    <div id="contact" className="mt-5 mb-5">
      <div className="card container-sm py-5 mb-5 bg-dark text-light animate__animated animate__fadeInUp">
        <div className="title text-danger text-center">
          <h3 className="fw-bold mt-3">Contact Me</h3>
        </div>
        <div className="row mt-5 px-3">
          {/* Contact Form */}
          <div className="col-md-7">
            <form
              className="row g-4"
              action="https://formspree.io/f/xnnpypyk"
              method="POST"
            >
              <div className="col-md-10">
                <label htmlFor="lastName" className="form-label text-light">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control border-danger bg-dark text-light"
                  id="lastName"
                  placeholder="Enter your name"
                  name="lastName"
                  required
                />
              </div>

              <div className="col-md-10">
                <label htmlFor="email" className="form-label text-light">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control border-danger bg-dark text-light"
                  id="email"
                  placeholder="youremail@example.com"
                  name="email"
                  required
                />
              </div>

              <div className="col-md-10">
                <label htmlFor="message" className="form-label text-light">
                  Message
                </label>
                <textarea
                  className="form-control border-danger bg-dark text-light"
                  id="message"
                  name="message"
                  placeholder="Type a message"
                  rows="4"
                  required
                ></textarea>
              </div>

              <div className="col-md-10">
                <button type="submit" className="btn btn-danger w-100">
                  Message Me
                </button>
              </div>
            </form>
          </div>

          {/* Image and Contact Info (Right Side) */}
          <div className="col-md-5 text-center mt-4 mt-md-0">
            <img
              src={image}
              className="img-fluid rounded-circle bg-danger p-1 mb-4 animate__animated animate__zoomIn"
              alt="Profile"
              style={{
                width: "200px",
                height: "200px",
                objectFit: "cover",
              }}
            />
            <div className="d-flex align-items-center justify-content-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-envelope-fill text-danger"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
              </svg>
              <h6 className="text-light ms-3 mb-0">sajidaunnisa78@gmail.com</h6>
            </div>

            <div className="d-flex align-items-center justify-content-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-telephone-fill text-danger"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                />
              </svg>
              <h6 className="text-light ms-3 mb-0">+91 6300786270</h6>
            </div>

            <div className="d-flex align-items-center justify-content-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-geo-alt-fill text-danger"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
              </svg>
              <h6 className="text-light ms-3 mb-0">Hyderabad</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
