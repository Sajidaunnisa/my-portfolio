import React from "react";
import "./projects.css";
import image1 from "./Images/zomato.png";
import image2 from "./Images/weather-app.png";
import image3 from "./Images/spotify.png";
import image4 from "./Images/mastercard.png";
// import image5 from "./Images/rock-paper-scissors.png";
// import image6 from "./Images/tic-tac-toe.png";
import image7 from "./Images/myntra.png";
import image8 from "./Images/convosync.png";

const Projects = () => {
  return (
    <div id="projects" className="mt-5 p-3">
      <div className="card bg-dark m-3">
        <div className="title text-danger text-center">
          <h3 className="fw-bold mt-5">Projects</h3>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-5 m-3">
          {/* myntra-clone */}
          <div className="col">
            <div className="card border-danger p-2 project-card">
              <img src={image7} className="card-img-top" alt="zomato clone" />
              <div className="card-body">
                <h5 className="card-title text-danger">Myntra Clone</h5>
                <p className="card-text text-light">
                  built using React, Redux, Bootstrap, Node.js, and MySQL.
                  Includes wishlist, bag and category-wise product listings with
                  dynamic routing.
                </p>
                <p className="card-text">
                  <a
                    href="https://ecomweb-by-sajida.netlify.app"
                    type="button"
                    className="btn btn-sm btn-outline-danger"
                  >
                    Demo
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* ConvoSync-A Real Time Chat Application */}
          <div className="col">
            <div className="card border-danger p-2 project-card">
              <img src={image8} className="card-img-top" alt="zomato clone" />
              <div className="card-body">
                <h5 className="card-title text-danger">ConvoSync-A Chat App</h5>
                <p className="card-text text-light">
                  built using React, Redux, Socket.IO, Node.js & MongoDB.
                  Supports authentication, media sharing, and live messaging
                  with Cloudinary integration.
                </p>
                <p className="card-text">
                  <a
                    href="https://convosync-chatapp.netlify.app"
                    type="button"
                    className="btn btn-sm btn-outline-danger"
                  >
                    Demo
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Zomato Clone */}
          <div className="col">
            <div className="card border-danger p-2 project-card">
              <img src={image1} className="card-img-top" alt="zomato clone" />
              <div className="card-body">
                <h5 className="card-title text-danger">Zomato Clone</h5>
                <p className="card-text text-light">
                  Developed a Zomato clone with HTML, CSS, JavaScript, and
                  React.js, demonstrating my skills in building complex web
                  applications with modern libraries and frameworks.
                </p>
                <p className="card-text">
                  <a
                    href="https://zomato-clone-by-sajida.netlify.app"
                    type="button"
                    className="btn btn-sm btn-outline-danger"
                  >
                    Demo
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Weather App */}
          <div className="col">
            <div className="card border-danger p-2 project-card">
              <img src={image2} className="card-img-top" alt="weather app" />
              <div className="card-body">
                <h5 className="card-title text-danger">Weather App</h5>
                <p className="card-text text-light">
                  Developed a Weather App with HTML, CSS, and JavaScript,
                  demonstrating my skills in creating interactive web
                  applications that display real-time data.
                </p>
                <p className="card-text">
                  <a
                    href="https://wheaternow-aap.netlify.app"
                    type="button"
                    className="btn btn-sm btn-outline-danger"
                  >
                    Demo
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Spotify Clone */}
          <div className="col">
            <div className="card border-danger p-2 project-card">
              <img src={image3} className="card-img-top" alt="spotify clone" />
              <div className="card-body">
                <h5 className="card-title text-danger">Spotify Clone</h5>
                <p className="card-text text-light">
                  Built a Spotify clone with HTML and CSS, demonstrating my
                  ability to replicate complex UI designs and layouts with
                  precision and attention to detail.
                </p>
                <p className="card-text">
                  <a
                    href="https://sajidas-spotify-clone.netlify.app"
                    type="button"
                    className="btn btn-sm btn-outline-danger"
                  >
                    Demo
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Rock Paper Scissors */}
          {/* <div className="col">
            <div className="card border-danger p-2 project-card">
              <img
                src={image5}
                className="card-img-top"
                alt="Rock Paper Scissor"
              />
              <div className="card-body">
                <h5 className="card-title text-danger">Rock Paper Scissor</h5>
                <p className="card-text text-light">
                  Created a Stone Paper Scissor game with HTML, CSS, and
                  JavaScript, demonstrating my skills in building interactive
                  and user-friendly web applications.
                </p>
                <p className="card-text">
                  <a
                    href="https://sajidas-rock-paper-scissor.netlify.app"
                    type="button"
                    className="btn btn-sm btn-outline-danger"
                  >
                    Demo
                  </a>
                </p>
              </div>
            </div>
          </div> */}

          {/* Mastercard */}
          <div className="col">
            <div className="card border-danger p-2 project-card">
              <img src={image4} className="card-img-top" alt="mastercard" />
              <div className="card-body">
                <h5 className="card-title text-danger">Mastercard</h5>
                <p className="card-text text-light">
                  Created a Mastercard mockup using HTML and CSS, showcasing my
                  ability to replicate real-world designs with precision and
                  attention to detail.
                </p>
                <p className="card-text">
                  <a
                    href="https://sajidas-master-card.netlify.app"
                    type="button"
                    className="btn btn-sm btn-outline-danger"
                  >
                    Demo
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Tic Tac Toe */}
          {/* <div className="col">
            <div className="card border-danger p-2 project-card">
              <img src={image6} className="card-img-top" alt="Tic Tac Toe" />
              <div className="card-body">
                <h5 className="card-title text-danger">Tic Tac Toe</h5>
                <p className="card-text text-light">
                  Built a Tic Tac Toe game with HTML, CSS, and JavaScript,
                  demonstrating my skills in creating interactive and engaging
                  web applications for users to enjoy.
                </p>
                <p className="card-text">
                  <a
                    href="https://sajidas-tic-tac-toe.netlify.app"
                    type="button"
                    className="btn btn-sm btn-outline-danger"
                  >
                    Demo
                  </a>
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
