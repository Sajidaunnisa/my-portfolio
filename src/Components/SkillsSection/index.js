import React from "react";
import "./skills.css";
// import image from "./images/image2.png";

const Skills = () => {
  return (
    <div id="skills">
      <div class="container-lg text-center bg-dark p-5 ">
        <div class="mt-4 pb-3">
          <section class="py-5">
            <div class="container text-center">
              <h2 class="section-title mb-4">SKILLS</h2>
              <p class="mb-5 text-light">
                I am a passionate full stack developer skilled in modern web
                technologies and UI/UX tools. Here's what I work with:
              </p>

              <div class="row g-4 justify-content-center">
                {/* <!-- Skill Card Template -->
      <!-- Repeat this block per skill --> */}
                <div class="col-6 col-md-4 col-lg-2" data-aos="fade-up">
                  <div class="skills-card text-center">
                    <div class="skill-icon">
                      <img
                        src="https://img.icons8.com/color/48/html-5--v1.png"
                        alt="HTML"
                      />
                    </div>
                    <div class="skill-name">HTML</div>
                  </div>
                </div>

                <div class="col-6 col-md-4 col-lg-2" data-aos="fade-up">
                  <div class="skills-card text-center">
                    <img
                      src="https://img.icons8.com/color/48/css3.png"
                      alt="CSS"
                    />
                    <div class="skill-name">CSS</div>
                  </div>
                </div>

                <div class="col-6 col-md-4 col-lg-2" data-aos="fade-up">
                  <div class="skills-card text-center">
                    <img
                      src="https://img.icons8.com/color/48/javascript--v1.png"
                      alt="JavaScript"
                    />
                    <div class="skill-name">JavaScript</div>
                  </div>
                </div>

                <div class="col-6 col-md-4 col-lg-2" data-aos="fade-up">
                  <div class="skills-card text-center">
                    <img
                      src="https://img.icons8.com/color/48/react-native.png"
                      alt="React"
                    />
                    <div class="skill-name">React</div>
                  </div>
                </div>

                <div class="col-6 col-md-4 col-lg-2" data-aos="fade-up">
                  <div class="skills-card text-center">
                    <img
                      src="https://img.icons8.com/color/48/redux.png"
                      alt="Redux"
                    />
                    <div class="skill-name">Redux</div>
                  </div>
                </div>

                <div class="col-6 col-md-4 col-lg-2" data-aos="fade-up">
                  <div class="skills-card text-center">
                    <img
                      src="https://img.icons8.com/color/48/bootstrap.png"
                      alt="Bootstrap"
                    />
                    <div class="skill-name">Bootstrap</div>
                  </div>
                </div>

                <div class="col-6 col-md-4 col-lg-2" data-aos="fade-up">
                  <div class="skills-card text-center">
                    <img
                      src="https://img.icons8.com/color/48/tailwindcss.png"
                      alt="TailwindCSS"
                    />
                    <div class="skill-name">TailwindCSS</div>
                  </div>
                </div>

                <div class="col-6 col-md-4 col-lg-2" data-aos="fade-up">
                  <div class="skills-card text-center">
                    <img
                      src="https://img.icons8.com/color/48/nodejs.png"
                      alt="Node.js"
                    />
                    <div class="skill-name">Node.js</div>
                  </div>
                </div>

                <div class="col-6 col-md-4 col-lg-2" data-aos="fade-up">
                  <div class="skills-card text-center">
                    <img
                      src="https://img.icons8.com/ios-filled/50/express-js.png"
                      alt="Express"
                    />
                    <div class="skill-name">Express</div>
                  </div>
                </div>

                <div class="col-6 col-md-4 col-lg-2" data-aos="fade-up">
                  <div class="skills-card text-center">
                    <img
                      src="https://img.icons8.com/color/48/mongodb.png"
                      alt="MongoDB"
                    />
                    <div class="skill-name">MongoDB</div>
                  </div>
                </div>

                <div class="col-6 col-md-4 col-lg-2" data-aos="fade-up">
                  <div class="skills-card text-center">
                    <img
                      src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-mongoose-a-node-js-framework-that-lets-developers-access-mongodb-programmatically-logo-color-tal-revivo.png"
                      alt="Mongoose"
                    />
                    <div class="skill-name">Mongoose</div>
                  </div>
                </div>

                <div class="col-6 col-md-4 col-lg-2" data-aos="fade-up">
                  <div class="skills-card text-center">
                    <img
                      src="https://img.icons8.com/ios-filled/50/sql.png"
                      alt="SQL"
                    />
                    <div class="skill-name">SQL</div>
                  </div>
                </div>

                <div class="col-6 col-md-4 col-lg-2" data-aos="fade-up">
                  <div class="skills-card text-center">
                    <img
                      src="https://img.icons8.com/color/48/figma--v1.png"
                      alt="Figma"
                    />
                    <div class="skill-name">Figma</div>
                  </div>
                </div>

                <div class="col-6 col-md-4 col-lg-2" data-aos="fade-up">
                  <div class="skills-card text-center">
                    <img
                      src="https://img.icons8.com/ios-glyphs/48/ffffff/github.png"
                      alt="GitHub"
                    />
                    <div class="skill-name">GitHub</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Skills;
