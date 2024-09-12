import React from "react";
import "./projects.css";
import image1 from "./Images/zomato.png";
import image2 from "./Images/weather-app.png";
import image3 from "./Images/spotify.png";
import image4 from "./Images/mastercard.png";
import image5 from "./Images/rock-paper-scissors.png";
import image6 from "./Images/tic-tac-toe.png";

const Projects = () => {
  return (
    <div id="projects" className="mt-5 p-3">
      <div className="card bg-dark m-3">
        <div className="title text-danger text-center">
          <h3 className="fw-bold mt-5">Projects</h3>
        </div>
        <div class="row row-cols-md-3 g-5 m-3">
          <div class="col">
            <div class="card border-danger  p-2">
              <img src={image1} class="card-img-top" alt="zomato clone"></img>
              <div class="card-body">
                <h5 class="card-title text-danger">Zomato Clone</h5>
                <p class="card-text text-light">
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
          <div class="col">
            <div class="card border-danger  p-2">
              <img src={image2} class="card-img-top" alt="weather app"></img>
              <div class="card-body">
                <h5 class="card-title text-danger">Weather App</h5>
                <p class="card-text text-light">
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
          <div class="col">
            <div class="card border-danger p-2">
              <img src={image3} class="card-img-top" alt="spotify clone"></img>
              <div class="card-body">
                <h5 class="card-title text-danger">Spotify Clone</h5>
                <p class="card-text text-light">
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
          <div class="col">
            <div class="card border-danger p-2">
              <img
                src={image5}
                class="card-img-top"
                alt="Rock Paper Scissor"
              ></img>
              <div class="card-body">
                <h5 class="card-title text-danger">Rock Paper Scissor</h5>
                <p class="card-text text-light">
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
          </div>
          <div class="col">
            <div class="card border-danger p-2">
              <img src={image4} class="card-img-top" alt="mastercard"></img>
              <div class="card-body">
                <h5 class="card-title text-danger">Mastercard</h5>
                <p class="card-text text-light">
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
          <div class="col">
            <div class="card border-danger p-2">
              <img src={image6} class="card-img-top" alt="Tic Tac Toe"></img>
              <div class="card-body">
                <h5 class="card-title text-danger">Tic Tac Toe</h5>
                <p class="card-text text-light">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
