import Main from "./pages/Main";
import ReactGA from "react-ga";
import { Routes, Route } from "react-router-dom";
import Resume from "./pages/resume/Resume";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import About from "./pages/About";
const TRACKING_ID = "UA-223259595-1";
ReactGA.initialize(TRACKING_ID);

const App = () => {
  ReactGA.pageview(window.location.pathname);
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
};

export default App;
