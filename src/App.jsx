import { Route, Routes } from "react-router-dom";

import About from './pages/Main'
import Contact from "./pages/Contact";
import PhotoViewer from "./pages/PhotoViewer";
const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery/:photoID" element={<PhotoViewer />} />
      </Routes>

    </div>
  );
};

export default App;
