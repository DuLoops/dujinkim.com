import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import PhotoViewer from "./pages/PhotoViewer";
import PhotoViewerModal from "./pages/PhotoViewerModal";

const App = () => {
  let location = useLocation();
  let background = location.state && location.state.background;
  return (
    <div className="app">
      {/* <Routes location={background || location}>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:photoID" element={<PhotoViewer />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {background && (
        <Routes>
          <Route path="/gallery/:photoID" element={<PhotoViewerModal />} />
        </Routes>
      )} */}
      <Routes location={background || location}>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:photoID" element={<PhotoViewer />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* {background && (
        <Routes>
          <Route path="/gallery/:photoID" element={<PhotoViewerModal />} />
        </Routes>
      )} */}
    </div>
  );
};

export default App;
