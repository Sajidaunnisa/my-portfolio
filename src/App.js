import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/HomeSection";
import About from "./Components/AboutSection";
import Skills from "./Components/SkillsSection";
import Projects from "./Components/ProjectsSection";
import Contact from "./Components/Contact";
import Footar from "./Components/Footar";
import Particlespage from "./Components/MyParticals/particles";

function App() {
  return (
    <div>
      <Particlespage />
      <Router>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footar />
      </Router>
    </div>
  );
}

export default App;
