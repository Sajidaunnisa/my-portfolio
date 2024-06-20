import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/HomeSection";
import About from "./Components/AboutSection";
import Skills from "./Components/SkillsSection";
import Projects from "./Components/ProjectsSection";
import Contact from "./Components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
