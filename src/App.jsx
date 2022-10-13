import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import PhotoViewer from "./pages/PhotoViewer";
import Admin from "./pages/Admin";
const App = () => {
  // let location = useLocation();
  // let modal = location.state && location.state.modal;
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery/" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/gallery/:photoID" element={<PhotoViewer />} />
        {/* {modal ? (
          <Route path="/gallery/:photoID" element={<Gallery />} />
        ) : (
          <Route path="/gallery/:photoID" element={<PhotoViewer />} />
        )} */}
      </Routes>

    </div>
  );
};

export default App;
