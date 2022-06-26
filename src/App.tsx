import { Route, Routes} from "react-router-dom"

import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import About from "./pages/About"
import Blog from "./pages/Blog"
import Nav from "./components/Nav"


const App = () => {
  return(
    <div className="app">
      {/* <Nav /> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App